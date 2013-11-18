define(
  ["dojo/_base/declare",
   "dojo/_base/lang",
   "dojo/_base/kernel",
   "dojo/_base/array",
   "dojo/dom-class",
   "dojo/cookie",
   "dojo/_base/json",
   "dojo/Deferred",
   "dojo/promise/all",
   "dojo/i18n",
   "esri/arcgis/utils",
   "esri/tasks/geometry"
  ], function(
        declare,
        lang,
        kernel, 
        array, 
        domClass, 
        dojoCookie,
        dojoJson,
        Deferred, 
        all, 
        jsapiBundle, 
        utils, 
        tasks
  ){
        var App =  declare("utilities.App",null,{
            config: {},
            constructor: function(/*Object*/defaults){
                //specify class defaults 
                this.config.helperServices = defaults.helperServices || {};
                lang.mixin(this.config, defaults);
             

            },
            init: function(){
                var deferred = new Deferred();
                //Check url parameters for an application id( appid) or webmap id 
                 var urlObject = esri.urlToObject(document.location.href);
                 urlObject.query = urlObject.query || {};
                 lang.mixin(this.config,urlObject.query);
                
                //need to set the sharing url here so that when we query the applciation and organization the correct 
                //location is searched. 
                this.setDefaults();
                var orgDef = this.queryOrganization();
                orgDef.then(lang.hitch(this, function(){
                  all([ this.getlocalization(), this.queryApplication() ]).then(lang.hitch(this,function(results){
                       deferred.resolve(this.config);
                  }));
                }));

                return deferred.promise;
            },
            getlocalization: function(){
              //Get the localization strings for the template and store in an i18n variable. Also determine if the 
              //application is in a right-to-left language like Arabic or Hebrew. 

                var deferred = new Deferred();

                this.config.i18n = jsapiBundle.getLocalization("esriTemplate", "template");
                //Bi-directional language support added to support right-to-left languages like Arabic and Hebrew
                //Note: The map must stay ltr
                this.config.i18n.isRightToLeft = false;
                array.some(["ar","he"], lang.hitch(this, function(l){
                  if(kernel.locale.indexOf(l) !== -1){
                      this.config.i18n.isRightToLeft = true;
                      return true;
                  }
                }));
                var dirNode = document.getElementsByTagName("html")[0];
                var classes = dirNode.className;
                if(this.config.i18n.isRightToLeft){
                    dirNode.setAttribute("dir","rtl");
                    var rtlClasses = " esriRTL dj_rtl dijitRtl " + classes.replace(/ /g, "-rtl ");
                    dirNode.className = lang.trim(classes + rtlClasses);
                }else{
                  dirNode.setAttribute("dir","ltr");
                  domClass.add(dirNode,"esriLtr");
                }
                deferred.resolve(true);
                return deferred.promise;

            },
            setDefaults: function(){
              //Check to see if the app is hosted or a portal. In those cases set the sharing url and the proxy. Otherwise use
              //the sharing url set it to arcgis.com. We know app is hosted (or portal) if it has /apps/ in the url 
  

              //templates can be at /apps or /home/webmap/templates
              var appLocation = location.pathname.indexOf("/apps/");
              if(appLocation === -1){
                 appLocation = location.pathname.indexOf("/home/");
              }
    
              this.isOrg = false;
              if(this.config.sharingurl){ //sharing url specified 
                //sharing url set in config file so use default services 
              }else if(appLocation!== -1){ //hosted or portal 
                this.isOrg = true;
                var instance = location.pathname.substr(0,appLocation);
                this.config.sharingurl = location.protocol + "//" + location.host + instance;
      
                this.config.proxyurl =  location.protocol + '//' + location.host + instance +  "/sharing/proxy";
              }else{ //default to arcgis.com 
                this.config.sharingurl = location.protocol + "//" +  "www.arcgis.com";
  
              }

              esri.arcgis.utils.arcgisUrl = this.config.sharingurl + "/sharing/rest/content/items";
              //esri.dijit._arcgisUrl = this.config.sharingurl + "/sharing/rest";  
   
      
              //Set the proxy. If the app is hosted use the default proxy. 
              if(this.config.proxyurl){
                esri.config.defaults.io.proxyUrl = this.config.proxyurl;
                esri.config.defaults.io.alwaysUseProxy = false;    
              }

              //setup any helper services (geometry, print, routing, geocoding)
              if(this.config.helperServices && this.config.helperServices.geometry && this.config.helperServices.geometry.url){
                esri.config.defaults.geometryService = new esri.tasks.GeometryService(this.config.helperServices.geometry.url);
              }
     
            },
             queryApplication : function(){
    
            //If there is an application id query arcgis.com using esri.arcgis.utils.getItem to get the item info. If the item info includes 
            //itemData.values then the app was configurable so overwrite the default values with the configured values. 
                var deferred = new Deferred();
                if(this.config.appid){
                   return utils.getItem(this.config.appid).then(lang.hitch(this,function(response){
                        lang.mixin(this.config, response.itemData.values);
                        //overwrite any values with url params 
                        var urlObject = esri.urlToObject(document.location.href);
                        urlObject.query = urlObject.query || {};
                        lang.mixin(this.config,urlObject.query);

                        return true;
                    }));
                }else{
                    deferred.resolve(true);
                }
                return deferred.promise;

     
            },

            queryOrganization: function(){

                var deferred = new Deferred();
               //Is this a hosted app or is it an app with an organization url set to query for info
                if(this.config.sharingurl && this.isOrg){

                var requestParams;
                var cookie = dojoCookie("esri_auth");
                if(cookie && cookie.length > 0){
                  var userInfo = dojoJson.fromJson(dojoCookie("esri_auth"));
                  userToken = userInfo.token || null;
                  requestParams = {
                    "f": "json",
                    "token": userToken
                  };
                }else{
                  requestParams = {
                    "f": "json"
                  }
                }

                 var req = esri.request({
                    url: this.config.sharingurl + "/sharing/rest/portals/self",
                    content: requestParams, // {"f": "json"},
                    callbackParamName:"callback"
                 });
                 req.then(lang.hitch(this, function(response){
        
                        //Is there a custom basemap group owner and title  or id? 
                        var q = this._parseQuery(response.basemapGalleryGroupQuery);
                        if(q.id){
                          this.config.basemapgroup.id = q.id;
                        }else if(q.title && q.owner){
                          this.config.basemapgroup.title = q.title;
                          this.config.basemapgroup.owner = q.owner;
                        }

                        //Get Units 
                        if(response.units){
                          this.config.units = response.units;
                        }else{
                          //use english 
                          this.config.units = "english";
                        }
                        //look for helper services and if they exist set them
                        if(response.isPortal && response.portalMode === "single tenant"){
                          this.config.sharingurl = response.portalHostname;
                           esri.arcgis.utils.arcgisUrl = response.portalHostname + "/sharing/rest/content/items";
                        }
                        lang.mixin(this.config.helperServices, response.helperServices);
                        //update geometry service (note: replaced the setDefaults call again)
                        if(this.config.helperServices && this.config.helperServices.geometry && this.config.helperServices.geometry.url){
                          esri.config.defaults.geometryService = new esri.tasks.GeometryService(this.config.helperServices.geometry.url);
                        }
          
                        deferred.resolve(true); 
                 }));
                }else{
  
                  deferred.resolve(true);
   
                }
                return deferred.promise;
            },
            _parseQuery: function(queryString){
    
               var regex = /(AND|OR)?\W*([a-z]+):/ig,
                    fields = {},
                    fieldName,
                    fieldIndex,
                    result = regex.exec(queryString);
                while (result) {
                  fieldName = result && result[2];
                  fieldIndex = result ? (result.index + result[0].length) : -1;

                  result = regex.exec(queryString);

                  fields[fieldName] = queryString
                                        .substring(fieldIndex, result ? result.index : queryString.length)
                                        .replace(/^\s+|\s+$/g, "")
                                        .replace(/\"/g,""); //remove extra quotes in title 
            
                }
              return fields;             
            }
           });
        return App;
    });

