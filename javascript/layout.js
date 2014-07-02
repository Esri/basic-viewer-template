dojo.require("esri.widgets");
dojo.require("esri.arcgis.utils");
dojo.require("dojox.layout.FloatingPane");
dojo.require("dojo.dnd.move");
dojo.require("utilities.custommenu");
dojo.require("esri.dijit.HomeButton");
dojo.require("esri.dijit.LocateButton");
dojo.require("apl.ElevationsChart.Pane");

var map;
var clickHandler, clickListener;
var editLayers = [],
    editorWidget;
var webmapExtent;
var configOptions;
var allResults = null;

var measure;
var ConstrainedFloatingPane;

function initMap(options) {
/*Patch to fix issue with floating panes used to display the measure and time panel. They
   moved slightly each time the window was toggled due to this bug
   http://bugs.dojotoolkit.org/ticket/5849
   */

dojox.layout.FloatingPane.prototype.show = function (callback) {
        var anim = dojo.fadeIn({
            node: this.domNode,
            duration: this.duration,
            beforeBegin: dojo.hitch(this, function () {
                this.domNode.style.display = "";
                this.domNode.style.visibility = "visible";
                if (this.dockTo && this.dockable) {
                    this.dockTo._positionDock(null);
                }
                if (typeof callback == "function") {
                    callback();
                }
                this._isDocked = false;
                if (this._dockNode) {
                    this._dockNode.destroy();
                    this._dockNode = null;
                }
            })
        }).play();
        this.resize(dojo.coords(this.domNode));
    };
/*Extend the floating pane for the measure and time slider to constrain within the parent widget*/
    ConstrainedFloatingPane = dojo.declare(dojox.layout.FloatingPane, {
    
        postCreate: function() {
            this.inherited(arguments);
            this.moveable = new dojo.dnd.move.constrainedMoveable(
                this.domNode, {
                    handle: this.focusNode,
                    constraints: function() {
                        var coordsBody = dojo.coords(dojo.body());
                        // or
                        var coordsWindow = {
                            l: 0,
                            t: 0,
                            w: window.innerWidth,
                            h: window.innerHeight                            
                        };
                        
                        return coordsWindow;
                    },
                    within: true
                }
            );                            
        }
        
    });

      //fix for dojox/mobile bug https://bugs.dojotoolkit.org/ticket/17228
     document.dojoClick = false;




    configOptions = options;
    //handle config options with different name 
    if (options.link1text !== undefined) configOptions.link1.text = options.link1text;
    if (options.link1url !== undefined) configOptions.link1.url = options.link1url;
    if (options.link2text !== undefined) configOptions.link2.text = options.link2text;
    if (options.link2url !== undefined) configOptions.link2.url = options.link2url;
    if (options.placefinderfieldname !== undefined) configOptions.placefinder.singlelinefieldname = options.placefinderfieldname;
    if (options.searchextent !== undefined) configOptions.placefinder.currentExtent = options.searchextent;
    if (options.customlogoimage !== undefined) configOptions.customlogo.image = options.customlogoimage;
    if (options.customlogolink !== undefined) configOptions.customlogo.link = options.customlogolink;
    if (options.basemapgrouptitle !== undefined && options.basemapgroupowner !== undefined) {
        configOptions.basemapgroup.title = options.basemapgrouptitle;
        configOptions.basemapgroup.owner = options.basemapgroupowner;
    }
    if (configOptions.leftpanelvisible) {
        configOptions.leftPanelVisibility = (configOptions.leftpanelvisible === 'true' || configOptions.leftpanelvisible === true) ? true : false;
    }

    configOptions.displaytitle = (configOptions.displaytitle === "true" || configOptions.displaytitle === true) ? true : false;
    configOptions.displaymeasure = (configOptions.displaymeasure === "true" || configOptions.displaymeasure === true) ? true : false;
    configOptions.displayshare = (configOptions.displayshare === "true" || configOptions.displayshare === true) ? true : false;
    configOptions.displaybasemaps = (configOptions.displaybasemaps === "true" || configOptions.displaybasemaps === true) ? true : false;
    configOptions.displayoverviewmap = (configOptions.displayoverviewmap === "true" || configOptions.displayoverviewmap === true) ? true : false;
    configOptions.displayeditor = (configOptions.displayeditor === "true" || configOptions.displayeditor === true) ? true : false;
    configOptions.displaylegend = (configOptions.displaylegend === "true" || configOptions.displaylegend === true) ? true : false;
    configOptions.displaysearch = (configOptions.displaysearch === "true" || configOptions.displaysearch === true) ? true : false;
    configOptions.displaybookmarks = (configOptions.displaybookmarks === "true" || configOptions.displaybookmarks === true) ? true : false;
    configOptions.displaylayerlist = (configOptions.displaylayerlist === "true" || configOptions.displaylayerlist === true) ? true : false;
    configOptions.displaydetails = (configOptions.displaydetails === "true" || configOptions.displaydetails === true) ? true : false;
    configOptions.displaytimeslider = (configOptions.displaytimeslider === "true" || configOptions.displaytimeslider === true) ? true : false;
    configOptions.displayelevation = (configOptions.displayelevation === "true" || configOptions.displayelevation === true) ? true : false;
    configOptions.displayprint = (configOptions.displayprint === "true" || configOptions.displayprint === true) ? true : false;
    configOptions.displayprintlegend = (configOptions.displayprintlegend === "true" || configOptions.displayprintlegend === true) ? true : false;
    configOptions.showelevationdifference = (configOptions.showelevationdifference === "true" || configOptions.showelevationdifference === true) ? true : false;

    configOptions.searchextent = (configOptions.searchextent === "true" || configOptions.searchextent === true) ? true : false;
    configOptions.placefinder.currentExtent = (configOptions.placefinder.currentExtent === "true" || configOptions.placefinder.currentExtent === true) ? true : false;


    configOptions.displayscalebar = (configOptions.displayscalebar === "true" || configOptions.displayscalebar === true) ? true : false;
    configOptions.displayslider = (configOptions.displayslider === "true" || configOptions.displayslider === true) ? true : false;
    configOptions.constrainmapextent = (configOptions.constrainmapextent === "true" || configOptions.constrainmapextent === true) ? true : false;
    configOptions.embed = (configOptions.embed === "true" || configOptions.embed === true) ? true : false;
    configOptions.leftpanelvisible = (configOptions.leftpanelvisible === "true" || configOptions.leftpanelvisible === true) ? true : false;

    createApp();
}

function createApp() {
    //load the specified theme 
    var ss = document.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = "css/" + configOptions.theme + ".css";
    document.getElementsByTagName("head")[0].appendChild(ss);

    //will this app be embedded - if so turn off title and links
    if (configOptions.embed || configOptions.displaytitle === false) {
        configOptions.displaytitle = false;
        configOptions.link1.url = "";
        configOptions.link2.url = "";
        dojo.addClass(dojo.body(), "embed");
    } else {
        dojo.addClass(dojo.body(), 'notembed');
        dojo.query("html").addClass("notembed");
    }

    //create the links for the top of the application if provided
    if (configOptions.link1.url && configOptions.link2.url) {
        if (configOptions.displaytitle === false) {
            //size the header to fit the links
            dojo.style(dojo.byId("header"), "height", "25px");
        }
        esri.show(dojo.byId('nav'));
        dojo.create("a", {
            href: configOptions.link1.url,
            target: '_blank',
            innerHTML: configOptions.link1.text
        }, 'link1List');
        dojo.create("a", {
            href: configOptions.link2.url,
            target: '_blank',
            innerHTML: configOptions.link2.text
        }, 'link2List');
    }


    var itemInfo = configOptions.itemInfo || configOptions.webmap;

    if (configOptions.gcsextent ) {

        //make sure the extent is valid minx,miny,maxx,maxy
        var extent = configOptions.gcsextent;
        if (extent) {

            var extArray = decodeURIComponent(extent).split(",");
        
            if(extArray.length === 4){

                getItem(configOptions.webmap, extArray);
            }else{
                createMap(configOptions.webmap);
            }

        }
    } else {
        createMap(configOptions.webmap);
    }


}

function getItem(item, extArray) {
    //get the item and update the extent then create the map 
    var deferred = esri.arcgis.utils.getItem(item);

    deferred.addCallback(function (itemInfo) {
        if (extArray) {
            itemInfo.item.extent = [
                [parseFloat(extArray[0]), parseFloat(extArray[1])],
                [parseFloat(extArray[2]), parseFloat(extArray[3])]
            ];
        }
        createMap(itemInfo);
    });

    deferred.addErrback(function (error) {
        alert(i18n.viewer.errors.createMap + " : " + dojo.toJson(error.message));
    });
}

function createMap(webmapitem) {
    if(configOptions.embed && configOptions.home){
        configOptions.displayslider = true;
        
    }
    var mapDeferred = esri.arcgis.utils.createMap(webmapitem, "map", {
        mapOptions: {
            slider: configOptions.displayslider,
            wrapAround180: !configOptions.constrainmapextent,
            showAttribution: true,
            //set wraparound to false if the extent is limited.
            logo: !configOptions.customlogo.image //hide esri logo if custom logo is provided
        },
        ignorePopups: false,
        bingMapsKey: configOptions.bingmapskey
    });

    mapDeferred.addCallback(function (response) {
        //add webmap's description to details panel 
        if (configOptions.description === "") {
            if (response.itemInfo.item.description !== null) {
                configOptions.description = response.itemInfo.item.description;
            }
        }



        configOptions.owner = response.itemInfo.item.owner;
        document.title = configOptions.title || response.itemInfo.item.title;
        //add a title
        if (configOptions.displaytitle === "true" || configOptions.displaytitle === true) {
            configOptions.title = configOptions.title || response.itemInfo.item.title;
            dojo.create("p", {
                id: 'webmapTitle',
                innerHTML: configOptions.title
            }, "header");
            dojo.style(dojo.byId("header"), "height", "38px");
        } else if (!configOptions.link1.url && !configOptions.link2.url) {
            //no title or links - hide header
            esri.hide(dojo.byId('header'));
            dojo.addClass(dojo.body(), 'embed');
            dojo.query("html").addClass("embed");
        }


        //get the popup click handler so we can disable it when measure tool is active
        clickHandler = response.clickEventHandle;
        clickListener = response.clickEventListener;
        map = response.map;



        //Constrain the extent of the map to the webmap's initial extent
        if (configOptions.constrainmapextent) {
            webmapExtent = response.map.extent.expand(1.5);
        }

        //Create the search location tool. We do this here in case there's a location url param and if 
        //so we'll zoom to it 
        if (configOptions.displaysearch === true) {
            createSearchTool();
        } else {
            esri.hide(dojo.byId('webmap-toolbar-right'));
        }


        if (map.loaded) {
            initUI(response);
        } else {
            dojo.connect(map, "onLoad", function () {
                initUI(response);
            });
        }

        var initialExtent = response.map.extent;
        if (configOptions.extent) {
            var extent = new esri.geometry.Extent(dojo.fromJson(configOptions.extent));
            if (isValidExtent(extent)) {
                initialExtent = extent;
            } else {
                //maybe its xmin,xmax etc so lets see if the extent works in the current spatial ref
                var coords = configOptions.extent.split(",");

                if (coords.length > 3) {
                    extent = new esri.geometry.Extent(parseInt(coords[0]), parseInt(coords[1]), parseInt(coords[2]), parseInt(coords[3]), map.spatialReference);
                    console.log(extent);
                    if (isValidExtent(extent)) {
                        //reset to webmap initial extent
                        initialExtent = extent;
                    }
                }
            }

        }

        map.setExtent(initialExtent);

        //add the map widgets (home, locate) if specified 
        if(configOptions.displaymapwidgets || configOptions.home){

                var homeButton = new esri.dijit.HomeButton({
                    map: map
                },dojo.create("div",{},dojo.query(".esriSimpleSliderIncrementButton")[0], "after"));//homeDiv);
                homeButton.startup();        
        }
        if(configOptions.displaymapwidgets || configOptions.locate){
                var locateDiv = dojo.create("div",{id:"locateDiv"},"map");
                var locationButton = new esri.dijit.LocateButton({
                    map: map
                },locateDiv);
                locationButton.startup();   
        }

    });

    mapDeferred.addErrback(function (error) {
        alert(i18n.viewer.errors.createMap + " : " + dojo.toJson(error.message));
    });
}

function isValidExtent(extent) {
    var valid = false;
    if ((extent.xmax === undefined) || (extent.xmin === undefined) || (extent.ymax === undefined) || (extent.ymin === undefined)) {
        return false;
    } else {
        return true;
    }

}

function initUI(response) {
    dojo.connect(dijit.byId('map'), 'resize', resizeMap);
    adjustPopupSize();
    var layers = response.itemInfo.itemData.operationalLayers;


    //constrain the extent
    if (configOptions.constrainmapextent) {
        var basemapExtent = map.getLayer(map.layerIds[0]).fullExtent.expand(1.5);
        //create a graphic with a hole over the web map's extent. This hole will allow
        //the web map to appear and hides the rest of the map to limit the visible extent to the webmap.
        var clipPoly = new esri.geometry.Polygon(map.spatialReference);
        clipPoly.addRing([
            [basemapExtent.xmin, basemapExtent.ymin],
            [basemapExtent.xmin, basemapExtent.ymax],
            [basemapExtent.xmax, basemapExtent.ymax],
            [basemapExtent.xmax, basemapExtent.ymin],
            [basemapExtent.xmin, basemapExtent.ymin]
        ]);
        //counter-clockwise to add a hole
        clipPoly.addRing([
            [webmapExtent.xmin, webmapExtent.ymin],
            [webmapExtent.xmax, webmapExtent.ymin],
            [webmapExtent.xmax, webmapExtent.ymax],
            [webmapExtent.xmin, webmapExtent.ymax],
            [webmapExtent.xmin, webmapExtent.ymin]
        ]);

        var symbol = new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID, new esri.symbol.SimpleLineSymbol(), new dojo.Color("white"));

        var maxExtentGraphic = new esri.Graphic(clipPoly, symbol);

        map.graphics.add(maxExtentGraphic);
    }



    //add a custom logo to the map if provided
    if (configOptions.customlogo.image) {
        esri.show(dojo.byId('logo'));
        //if a link isn't provided don't make the logo clickable
        if (configOptions.customlogo.link) {
            var link = dojo.create('a', {
                href: configOptions.customlogo.link,
                target: '_blank'
            }, dojo.byId('logo'));

            dojo.create('img', {
                src: configOptions.customlogo.image
            }, link);
        } else {
            dojo.create('img', {
                id: 'logoImage',
                src: configOptions.customlogo.image
            }, dojo.byId('logo'));
            //set the cursor to the default instead of the pointer since the logo is not clickable
            dojo.style(dojo.byId('logo'), 'cursor', 'default');
        }

    }


    if (configOptions.displayscalebar === true) {
        //add scalebar
        //is the map embedded? If so set scalebar value to dual otherwise use the units 
        var scalebarUnits;
        if(configOptions.embed){
            scalebarUnits = "dual";
        }else{
            scalebarUnits = configOptions.units;
        }
        var scalebar = new esri.dijit.Scalebar({
            map: map,
            scalebarUnit: scalebarUnits //metric, english or dual
        });
    }

    //Add/Remove tools depending on the config settings or url parameters
    if (configOptions.displayprint === true) {
        addPrint(layers);

    }
    if (configOptions.displaylayerlist === true) {
        addLayerList(layers);
    }
    if (configOptions.displaybasemaps === true) {
        //add menu driven basemap gallery if embed = true
        if (configOptions.embed) {
            addBasemapGalleryMenu();
        } else {
            addBasemapGallery();
        }
    }

    if (configOptions.displaymeasure === true) {
        addMeasurementWidget();
    } else {
        esri.hide(dojo.byId('floater'));
    }
    if (configOptions.displayelevation && configOptions.displaymeasure) {

        esri.show(dojo.byId('bottomPane'));
        createElevationProfileTools();
    }
    if (configOptions.displaybookmarks === true) {
        addBookmarks(response);
    }
    if (configOptions.displayoverviewmap === true) {
        //add the overview map - with initial visibility set to false.
        addOverview(false);
    }

    //do we have any editable layers - if not then set editable to false
    editLayers = hasEditableLayers(layers);
    
    //is the logged-in user allowed to edit? 
    var editable = true;
    if(esri.isDefined(configOptions.userPrivileges)){
        if(dojo.indexOf(configOptions.userPrivileges, "features:user:edit") === -1){
            editable = false;
        }
    }
    if (editLayers.length === 0 || !editable) {
        configOptions.displayeditor = false;
    }

    //do we have any operational layers - if not then set legend to false
    var layerInfo = esri.arcgis.utils.getLegendLayers(response);
    if (layerInfo.length === 0) {
        configOptions.displaylegend = false;
    }


    if (displayLeftPanel()) {

        //create left panel
        var bc = dijit.byId('leftPane');
        esri.show(dojo.byId('leftPane'));
        var cp = new dijit.layout.ContentPane({
            id: 'leftPaneHeader',
            region: 'top',
            style: 'height:10px;',
            content: esri.substitute({
                close_title: i18n.panel.close.title,
                close_alt: i18n.panel.close.label
            }, '<div style="float:right;clear:both;" id="paneCloseBtn" onClick="hideLeftPanel();"><a title=${close_title} alt=${close_alt} href="#"><img src=images/closepanel.png border="0"/></a></div>')
        });
        bc.addChild(cp);
        var cp2 = new dijit.layout.StackContainer({
            id: 'stackContainer',
            region: 'center',
            style: 'height:98%;'
        });
        bc.addChild(cp2);
        if (configOptions.embed) {
            dojo.style(dojo.byId("leftPane"), "width", configOptions.leftpanewidth);
        } else {
            dojo.style(dojo.byId("leftPane"), "width", configOptions.leftpanewidth + "px");
        }
        //Add the Editor Button and Panel
        if (configOptions.displayeditor == 'true' || configOptions.displayeditor === true) {
            addEditor(editLayers); //only enabled if map contains editable layers
        }



        //Add the Detail button and panel
        if (configOptions.displaydetails === true && configOptions.description !== "") {

            var detailTb = new dijit.form.ToggleButton({
                showLabel: true,
                label: i18n.tools.details.label,
                title: i18n.tools.details.title,
                checked: true,
                iconClass: 'esriDetailsIcon',
                id: 'detailButton'
            }, dojo.create('div'));
            dojo.byId('webmap-toolbar-left').appendChild(detailTb.domNode);

            dojo.connect(detailTb, 'onClick', function () {
                navigateStack('detailPanel');
            });

            var detailCp = new dijit.layout.ContentPane({
                title: i18n.tools.details.title,
                selected: true,
                region: 'center',
                id: "detailPanel"
            });


            //set the detail info
            detailCp.set('content', configOptions.description);


            dijit.byId('stackContainer').addChild(detailCp);
            dojo.addClass(dojo.byId('detailPanel'), 'panel_content');
            navigateStack('detailPanel');
        }
        if (configOptions.displaylegend === true) {
            addLegend(layerInfo);
        }
        if (configOptions.leftPanelVisibility === false) {
            hideLeftPanel();
        }
        dijit.byId('mainWindow').resize();

        // resizeMap(); //comment out due to op layer moving bug when using a non web mercator basemap
    }



    //add the time slider if the layers are time-aware 
    if (configOptions.displaytimeslider === true) {
        if (response.itemInfo.itemData.widgets && response.itemInfo.itemData.widgets.timeSlider) {
            addTimeSlider(response.itemInfo.itemData.widgets.timeSlider.properties);
        } else {
            //check to see if we have time aware layers 
            var timeLayers = hasTemporalLayer(layers);
            if (timeLayers.length > 0) {
                //do we have time aware layers? If so create time properties
                var fullExtent = getFullTimeExtent(timeLayers);
                var timeProperties = {
                    'startTime': fullExtent.startTime,
                    'endTime': fullExtent.endTime,
                    'thumbCount': 2,
                    'thumbMovingRate': 2000,
                    'timeStopInterval': findDefaultTimeInterval(fullExtent)
                };
                addTimeSlider(timeProperties);
            } else {
                configOptions.displaytimeslider = false;
                esri.hide(dojo.byId('timeFloater'));
            }

        }
    }

    //Display the share dialog if enabled 
    if (configOptions.displayshare === true) {
        createSocialLinks();
    }

    //resize the border container 
    dijit.byId('bc').resize();

    resizeMap(); //resize the map in case any of the border elements have changed

}
//


function displayLeftPanel() {
    //display the left panel if any of these options are enabled. 
    var display = false;
    if (configOptions.displaydetails && configOptions.description !== '') {
        display = true;
    }
    if (configOptions.displaylegend) {
        display = true;
    }
    if (configOptions.displayeditor) {
        display = true;
    }
    return display;
}

function resizeMap() {
    if (map) {
        map.resize(true);
        map.reposition();
    }
}


//select panels in the stack container. The stack container is used to organize content 
//in the left panel (editor, legend, details)


function navigateStack(label) {
    //display the left panel if its hidden
    showLeftPanel();

    //select the appropriate container 
    dijit.byId('stackContainer').selectChild(label);

    //hide or show the editor 
    if (label === 'editPanel') {
        createEditor();
    } else {
        destroyEditor();
    }

    //toggle the other buttons
    var buttonLabel = '';
    switch (label) {
    case 'editPanel':
        buttonLabel = 'editButton';
        break;
    case 'legendPanel':
        buttonLabel = 'legendButton';
        break;
    case 'detailPanel':
        buttonLabel = 'detailButton';
        break;
    }
    toggleToolbarButtons(buttonLabel);
}

//Utility functions that handles showing and hiding the left panel. Hide occurs when 
//the x (close) button is clicked. 


function showLeftPanel() {
    //display the left panel if hidden
    var leftPaneWidth = dojo.style(dojo.byId("leftPane"), "width");
    if (leftPaneWidth === 0) {
        if (configOptions.embed) {
            dojo.style(dojo.byId("leftPane"), "width", configOptions.leftpanewidth);
        } else {
            dojo.style(dojo.byId("leftPane"), "width", configOptions.leftpanewidth + "px");
        }
        dijit.byId("mainWindow").resize();
    }
}

function hideLeftPanel() {
    //close the left panel when x button is clicked
    var leftPaneWidth = dojo.style(dojo.byId("leftPane"), "width");
    if (leftPaneWidth === 0) {
        leftPaneWidth = configOptions.leftpanewidth;
    }
    dojo.style(dojo.byId("leftPane"), "width", "0px");
    dijit.byId('mainWindow').resize();
    resizeMap();
    //uncheck the edit, detail and legend buttons
    setTimeout(function () {
        toggleToolbarButtons('');

    }, 100);

}

function toggleToolbarButtons(label) {
    var buttons = ['detailButton', 'editButton', 'legendButton'];
    dojo.forEach(buttons, function (button) {
        if (dijit.byId(button)) {
            if (button === label) {
                dijit.byId(label).set('checked', true);
            } else {
                dijit.byId(button).set('checked', false);
            }
        }
    });

}

//Create links for sharing the app via social networking 


function updateLinkUrls() {
    //get the current map extent
    var extent = "";
    extent = "&extent=" + dojo.toJson(map.extent.toJson());

    var appUrl = (document.location.href.split("?"));
    var link = appUrl[0] + "?" + extent;
    if (appUrl[1]) {
        link += "&" + appUrl[1];
    }


    var mapTitle = "Web Map";
    if (dojo.byId("webmapTitle")) {
        mapTitle = encodeURIComponent(dojo.byId("webmapTitle").innerHTML);
    }

    //Get URL to add to email (bitly support removed 3/2013)
    var url = encodeURIComponent(link);
    createLink(mapTitle, url);

    //enable menu items now that links are working
    var menu = dijit.byId('socialMenu');
    dojo.forEach(menu.getChildren(), function (item) {
        item.set("disabled", false);
    });

    dijit.byId("shareButton").focus();

}

function createLink(mapTitle, url) {
    dojo.byId('mailLink').href = "mailto:?subject=" + mapTitle + "&body=Check out this map: %0D%0A " + url;
    dojo.byId('facebookLink').href = "http://www.facebook.com/sharer.php?u=" + url + "&t=" + mapTitle;
    dojo.byId('twitterLink').href = "http://www.twitter.com/home?status=" + mapTitle + "+" + url;
}

function getBasemapGroup() {
    //get the basemap group if a custom one is defined or if a hosted or portal app with a custom group.
    var basemapGroup = null;
    if (configOptions.basemapgroup.title && configOptions.basemapgroup.owner) {
        basemapGroup = {
            "owner": configOptions.basemapgroup.owner,
            "title": configOptions.basemapgroup.title
        };
    } else if (configOptions.basemapgroup.id) {
        basemapGroup = {
            "id": configOptions.basemapgroup.id
        };
    }
    return basemapGroup;

}

function addBasemapGalleryMenu() {
    //This option is used for embedded maps so the gallery fits well with apps of smaller sizes. 
    var ht = map.height / 2;
    var cp = new dijit.layout.ContentPane({
        id: 'basemapGallery',
        style: "height:" + ht + "px;width:190px;"
    });

    var basemapMenu = new dijit.Menu({
        id: 'basemapMenu'
    });

    //if a bing maps key is provided - display bing maps too.
    var basemapGallery = new esri.dijit.BasemapGallery({
        showArcGISBasemaps: true,
        portalUrl: configOptions.sharingurl,
        basemapsGroup: getBasemapGroup(),
        bingMapsKey: configOptions.bingmapskey,
        map: map
    });
    cp.set('content', basemapMenu.domNode);

    dojo.connect(basemapGallery, 'onLoad', function () {
        var menu = dijit.byId("basemapMenu");
        dojo.forEach(basemapGallery.basemaps, function (basemap) {
            //Add a menu item for each basemap, when the menu items are selected
            menu.addChild(new utilities.custommenu({
                label: basemap.title,
                iconClass: "menuIcon",
                iconSrc: basemap.thumbnailUrl,
                onClick: function () {
                    basemapGallery.select(basemap.id);
                }
            }));
        });
    });




    var button = new dijit.form.DropDownButton({
        label: i18n.tools.basemap.label,
        id: "basemapBtn",
        iconClass: "esriBasemapIcon",
        title: i18n.tools.basemap.title,
        dropDown: cp
    });

    dojo.byId('webmap-toolbar-center').appendChild(button.domNode);

    dojo.connect(basemapGallery, "onSelectionChange", function () {
        //close the basemap window when an item is selected
        //destroy and recreate the overview map  - so the basemap layer is modified.
        destroyOverview();
        dijit.byId('basemapBtn').closeDropDown();
    });

    basemapGallery.startup();
}


//Add the basemap gallery widget to the application. 


function addBasemapGallery() {

    var cp = new dijit.layout.ContentPane({
        id: 'basemapGallery',
        style: "max-height:448px;width:380px;"
    });

    //if a bing maps key is provided - display bing maps too.
    var basemapGallery = new esri.dijit.BasemapGallery({
        showArcGISBasemaps: true,
        portalUrl: configOptions.sharingurl,
        basemapsGroup: getBasemapGroup(),
        bingMapsKey: configOptions.bingmapskey,
        map: map
    }, dojo.create('div'));


    cp.set('content', basemapGallery.domNode);


    var button = new dijit.form.DropDownButton({
        label: i18n.tools.basemap.label,
        id: "basemapBtn",
        iconClass: "esriBasemapIcon",
        title: i18n.tools.basemap.title,
        dropDown: cp
    });

    dojo.byId('webmap-toolbar-center').appendChild(button.domNode);

    dojo.connect(basemapGallery, "onSelectionChange", function () {
        //close the basemap window when an item is selected
        //destroy and recreate the overview map  - so the basemap layer is modified.
        destroyOverview();
        dijit.byId('basemapBtn').closeDropDown();
    });

    basemapGallery.startup();
}

//add any bookmarks to the application


function addBookmarks(info) {
    //does the web map have any bookmarks
    if (info.itemInfo.itemData.bookmarks) {
        var bookmarks = new esri.dijit.Bookmarks({
            map: map,
            bookmarks: info.itemInfo.itemData.bookmarks
        }, dojo.create("div"));


        dojo.connect(bookmarks, "onClick", function () {
            //close the bookmark window when an item is clicked
            dijit.byId('bookmarkButton').closeDropDown();
        });


        var cp = new dijit.layout.ContentPane({
            id: 'bookmarkView'
        });
        cp.set('content', bookmarks.bookmarkDomNode);
        var button = new dijit.form.DropDownButton({
            label: i18n.tools.bookmark.label,
            id: "bookmarkButton",
            iconClass: "esriBookmarkIcon",
            title: i18n.tools.bookmark.title,
            dropDown: cp
        });

        dojo.byId('webmap-toolbar-center').appendChild(button.domNode);
    }

}
//Create a menu with a list of operational layers. Each menu item contains a check box
//that allows users to toggle layer visibility. 


function addLayerList(layers) {
    var layerList = buildLayerVisibleList(layers);
    if (layerList.length > 0) {
        //create a menu of layers
        layerList.reverse();
        var menu = new dijit.Menu({
            id: 'layerMenu',
            baseClass: "customMenu"
        });
        dojo.forEach(layerList, function (layer) {
            menu.addChild(new dijit.CheckedMenuItem({
                label: layer.title,
                checked: layer.visible,
                onChange: function () {
                    if (layer.layer.featureCollection) {
                        //turn off all the layers in the feature collection even
                        //though only the  main layer is listed in the layer list 
                        dojo.forEach(layer.layer.featureCollection.layers, function (layer) {
                            layer.layerObject.setVisibility(!layer.layerObject.visible);
                        });
                    } else {
                        layer.layer.setVisibility(!layer.layer.visible);
                    }

                }
            }));
        });


        var button = new dijit.form.DropDownButton({
            label: i18n.tools.layers.label,
            id: "layerBtn",
            iconClass: "esriLayerIcon",
            title: i18n.tools.layers.title,
            dropDown: menu
        });

        dojo.byId('webmap-toolbar-center').appendChild(button.domNode);
    }
}

//build a list of layers for the toggle layer list - this list
//is slightly different than the legend because we don't want to list lines,points,areas etc for each
//feature collection type. 


function buildLayerVisibleList(layers) {
    var layerInfos = [];
    dojo.forEach(layers, function (mapLayer, index) {
        if (mapLayer.featureCollection && !mapLayer.layerObject) {
            if (mapLayer.featureCollection.layers) {
                //add the first layer in the layer collection... not all  - when we turn off the layers we'll 
                //turn them all off 
                if (mapLayer.featureCollection.layers) {
                    layerInfos.push({
                        "layer": mapLayer,
                        "visible": mapLayer.visibility,
                        "title": mapLayer.title
                    });
                }
            }
        } else if (mapLayer.layerObject) {
            layerInfos.push({
                layer: mapLayer.layerObject,
                visible: mapLayer.layerObject.visible,
                title: mapLayer.title
            });
        }
    });
    return layerInfos;
}

function addPrint(layers) {

    //generate a list of legend layers if the configuration property is set to true 
    var legendLayers = [];
    if (configOptions.displayprintlegend) {
        legendLayers = dojo.map(layers, function (layer) {
            return {
                "layerId": layer.id
            };
        });
    }

    var layoutOptions = {
        'authorText': configOptions.owner,
        'titleText': configOptions.title,
        'scalebarUnit': configOptions.units,
        //(i18n.viewer.main.scaleBarUnits === 'english') ? 'Miles' : 'Kilometers',
        'legendLayers': legendLayers
    };


    //default template options
    var templates = dojo.map(configOptions.printlayouts, function (layout) {
        layout.layoutOptions = layoutOptions;
        return layout;
    });
    if (configOptions.printlayout) { //when true use all print options
        //get all the layouts from the service. 
        var printInfo = esri.request({
            url: configOptions.helperServices.printTask.url,
            content: {
                "f": "json"
            },
            callbackParamName: "callback"
        }, {
            useProxy: true
        });
        printInfo.then(function (response) {


            var layoutTemplate, templateNames, mapOnlyIndex, templates;

            layoutTemplate = dojo.filter(response.parameters, function (param, idx) {
                return param.name === "Layout_Template";
            });

            if (layoutTemplate.length === 0) {
                console.log("print service parameters name for templates must be \"Layout_Template\"");
                return;
            }
            templateNames = layoutTemplate[0].choiceList;

            // remove the MAP_ONLY template then add it to the end of the list of templates 
            mapOnlyIndex = dojo.indexOf(templateNames, "MAP_ONLY");
            if (mapOnlyIndex > -1) {
                var mapOnly = templateNames.splice(mapOnlyIndex, mapOnlyIndex + 1)[0];
                templateNames.push(mapOnly);
            }

            // create a print template for each choice
            templates = dojo.map(templateNames, function (name) {
                var plate = new esri.tasks.PrintTemplate();
                plate.layout = plate.label = name;
                plate.format = configOptions.printformat;
                plate.layoutOptions = layoutOptions;
                return plate;
            });
            updatePrint(templates);
        }, function (error) {
            updatePrint(templates);
        });


    } else {
        updatePrint(templates);
    }
}

function updatePrint(templates) {
    // print dijit
    var printer = new esri.dijit.Print({
        map: map,
        templates: templates,
        url: configOptions.helperServices.printTask.url
    }, dojo.create('span'));

    dojo.query('.esriPrint').addClass('esriPrint');

    dojo.byId('webmap-toolbar-center').appendChild(printer.printDomNode);

    printer.startup();
}
//create a floating pane to hold the measure widget and add a button to the toolbar
//that allows users to hide/show the measurement widget.


function addMeasurementWidget() {
    



    var fp = new ConstrainedFloatingPane({
        title: i18n.tools.measure.title,
        resizable: false,
        dockable: false,
        closable:false,
        id: "floater",
        //constrainToContainer: true,
        style: "position:absolute;top:0;left:0;width:245px;height:175px;z-index:999!important;visibility:hidden;"    
    }, dojo.byId("floater"));

    fp.startup();

   

 fp.startup();


    measure = new esri.dijit.Measurement({
        map: map,
        defaultAreaUnit: (configOptions.units === "metric") ? "esriSquareKilometers" : "esriSquareMiles",
        defaultLengthUnit: (configOptions.units === "metric") ? "esriKilometers" : "esriMiles",
        id: 'measureTool'
    }, 'measureDiv');

    measure.startup();


    var toggleButton = new dijit.form.ToggleButton({
        label: i18n.tools.measure.label,
        title: i18n.tools.measure.title,
        id: "toggleButton",
        iconClass: "esriMeasureIcon"
    });

    dojo.connect(toggleButton, "onClick", function () {
        toggleMeasure();
    });

    dojo.byId('webmap-toolbar-center').appendChild(toggleButton.domNode);
}

//Show/hide the measure widget when the measure button is clicked.


function toggleMeasure() {
    if (dojo.byId('floater').style.visibility === 'hidden') {
        //make sure the floater isn't hidden behind the toolbar
         dojo.style(dojo.byId("floater"),"top", "0");
         dijit.byId('floater').show();


        //if the editor widget exists popups are already disabled. 
        if (!editorWidget) {
            disablePopups(); //disable map popups otherwise they interfere with measure clicks
        } else {
            console.log('Editor widget exists so no disabling');
        }


    } else {
        dijit.byId('floater').hide();

        if (!editorWidget) {
            enablePopups(); //enable map popup windows
        }


        dijit.byId('toggleButton').set('checked', false); //uncheck the measure toggle button
        //deactivate the tool and clear the results
        var measure = dijit.byId('measureTool');
        measure.clearResult();
        if (measure.activeTool) {
            measure.setTool(measure.activeTool, false);
        }
    }

}

function addOverview(isVisible) {
    //attachTo:bottom-right,bottom-left,top-right,top-left
    //opacity: opacity of the extent rectangle - values between 0 and 1. 
    //color: fill color of the extnet rectangle
    //maximizeButton: When true the maximize button is displayed
    //expand factor: The ratio between the size of the ov map and the extent rectangle.
    //visible: specify the initial visibility of the ovmap.
    var overviewMapDijit = new esri.dijit.OverviewMap({
        map: map,
        attachTo: "top-right",
        opacity: 0.5,
        color: "#000000",
        expandfactor: 2,
        maximizeButton: false,
        visible: isVisible,
        id: 'overviewMap'
    });
    overviewMapDijit.startup();
}

function destroyOverview() {
    var ov = dijit.byId('overviewMap');
    if (ov) {
        var vis = ov.visible;
        ov.destroy();
        addOverview(vis);
    }
}

//Add the legend to the application - the legend will be 
//added to the left panel of the application. 


function addLegend(layerInfo) {

    var legendTb = new dijit.form.ToggleButton({
        showLabel: true,
        label: i18n.tools.legend.label,
        title: i18n.tools.legend.title,
        checked: true,
        iconClass: 'esriLegendIcon',
        id: 'legendButton'
    }, dojo.create('div'));

    dojo.byId('webmap-toolbar-left').appendChild(legendTb.domNode);

    dojo.connect(legendTb, 'onClick', function () {
        navigateStack('legendPanel');
    });
    var legendCp = new dijit.layout.ContentPane({
        title: i18n.tools.legend.title,
        selected: true,
        region: 'center',
        id: "legendPanel"
    });

    dijit.byId('stackContainer').addChild(legendCp);
    dojo.addClass(dojo.byId('legendPanel'), 'panel_content');

    var legendDijit = new esri.dijit.Legend({
        map: map,
        layerInfos: layerInfo
    }, dojo.create('div'));

    dojo.byId('legendPanel').appendChild(legendDijit.domNode);

    navigateStack('legendPanel');
    if (dojo.isIE === 8) {
        setTimeout(function () {
            legendDijit.startup();
        }, 100);
    } else {
        legendDijit.startup();
    }

}

//Determine if the webmap has any editable layers  


function hasEditableLayers(layers) {
    var layerInfos = [];
    dojo.forEach(layers, function (layer) {

        if (layer && layer.layerObject) {

            var eLayer = layer.layerObject;

            if (eLayer instanceof esri.layers.FeatureLayer && eLayer.isEditable()) {
                    layerInfos.push({
                        'featureLayer': eLayer
                    });
            }

        }
    });


    return layerInfos;
}



//if the webmap contains editable layers add an editor button to the map
//that adds basic editing capability to the app.


function addEditor(editLayers) {

    //create the button that show/hides the editor 
    var editTb = new dijit.form.ToggleButton({
        showLabel: true,
        label: i18n.tools.editor.label,
        title: i18n.tools.editor.title,
        checked: false,
        iconClass: 'esriEditIcon',
        id: 'editButton'
    }, dojo.create('div'));

    //add the editor button to the left side of the application toolbar 
    dojo.byId('webmap-toolbar-left').appendChild(editTb.domNode);
    dojo.connect(editTb, 'onClick', function () {
        navigateStack('editPanel');
    });

    //create the content pane that holds the editor widget 
    var editCp = new dijit.layout.ContentPane({
        title: i18n.tools.editor.title,
        selected: "true",
        id: "editPanel",
        region: "center"
    });

    //add this to the existing div
    dijit.byId('stackContainer').addChild(editCp);
   // navigateStack('editPanel');
    //create the editor if the legend and details panels are hidden - otherwise the editor
    //will be created when the edit button is clicked.
    if ((configOptions.displaydetails === false) && (configOptions.displaylegend === false)) {
        createEditor();
    }
}

//Functions to create and destroy the editor. We do this each time the edit button is clicked. 



function destroyEditor() {
    if (editorWidget) {
        editorWidget.destroy();
        editorWidget = null;
        enablePopups();
    }

}
//Utility methods used to enable/disable popups. For example when users are measuring locations
//on the map we want to turn popups off so they don't appear when users click to specify a measure area. 


function enablePopups() {
    if (clickListener) {
        clickHandler = dojo.connect(map, "onClick", clickListener);
    }
}

function disablePopups() {
    if (clickHandler) {
        dojo.disconnect(clickHandler);
    }
}

//Create menu of social network sharing options (Email, Twitter, Facebook)

function createEditor() {

    if (editorWidget) {
        return;
    }

    if (editLayers.length > 0) {

        var editLayerInfo = editLayers;
        var templateLayers = dojo.map(editLayers, function(layer) {
            return layer.featureLayer;
        });
        //add field infos if applicable - this will contain hints if defined in the popup. Also added logic to hide fields that have visible = false. The popup takes 
        //care of this for the info window but not for the edit window. 
        dojo.forEach(editLayerInfo, function(layer) {


            if (layer.featureLayer && layer.featureLayer.infoTemplate && layer.featureLayer.infoTemplate.info && layer.featureLayer.infoTemplate.info.fieldInfos) {
                //only display visible fields 
                var fields = layer.featureLayer.infoTemplate.info.fieldInfos;
                var fieldInfos = [];
                dojo.forEach(fields, function(field) {
                    if (field.visible) {
                        fieldInfos.push(field);
                    }
                });
                layer.fieldInfos = fieldInfos;
            }
        });


        var editPanelHeight = dojo.style(dojo.byId("leftPane"), "height");

        var templatePicker = new esri.dijit.editing.TemplatePicker({
            featureLayers: templateLayers,
            showTooltip: false,
            rows: "auto",
            columns: "auto",
            style: "height:" + editPanelHeight + "px;width:" + (parseInt(configOptions.leftpanewidth) - 10) + "px;"
        },dojo.create("div"));
        dojo.place(templatePicker.domNode, "editPanel", "first");


        templatePicker.startup();

        var params = {
            map: map,
            templatePicker: templatePicker,
            layerInfos: editLayerInfo,
            toolbarVisible: configOptions.displayeditortoolbar
        };
        if(configOptions.displayeditortoolbar){
                dojo.addClass(templatePicker.domNode, "toolbar");
        }
        editorWidget = new esri.dijit.editing.Editor({
            settings: params
        },dojo.create("div"));
        dojo.place(editorWidget.domNode, "editPanel", "last");

        editorWidget.startup();



        disablePopups();
    }

}
function createSocialLinks() {
    //extend the menu item so the </a> links are clickable 
    dojo.provide('dijit.anchorMenuItem');

    dojo.declare('dijit.anchorMenuItem', dijit.MenuItem, {
        _onClick: function (evt) {
            this.firstChild.click(this, evt);
        }
    });
    //create a dropdown button to display the menu
    //build a menu with a list of sharing options 
    var menu = new dijit.Menu({
        id: 'socialMenu',
        style: 'display:none;'
    });

    menu.addChild(new dijit.anchorMenuItem({
        label: esri.substitute({
            email_text: i18n.tools.share.menu.email.label
        }, "<a id='mailLink' target='_blank' class='iconLink'>${email_text}</a>"),
        iconClass: "emailIcon",
        disabled: true
    }));
    menu.addChild(new dijit.anchorMenuItem({
        label: esri.substitute({
            facebook_text: i18n.tools.share.menu.facebook.label
        }, "<a id='facebookLink' target='_blank' class='iconLink'>${facebook_text}</a>"),
        iconClass: "facebookIcon",
        disabled: true
    }));
    menu.addChild(new dijit.anchorMenuItem({
        label: esri.substitute({
            twitter_text: i18n.tools.share.menu.twitter.label
        }, "<a id='twitterLink' target='_blank' class='iconLink'>${twitter_text}</a>"),
        iconClass: "twitterIcon",
        disabled: true
    }));
    //create dropdown button to display menu
    var menuButton = new dijit.form.DropDownButton({
        label: i18n.tools.share.label,
        id: 'shareButton',
        title: i18n.tools.share.title,
        dropDown: menu,
        iconClass: 'esriLinkIcon'
    });
    menuButton.startup();

    dojo.byId('webmap-toolbar-center').appendChild(menuButton.domNode);
    dojo.connect(menuButton, 'onClick', function () {
        updateLinkUrls();
    });
}


function createOptions() {


    var hasEsri = false,
        geocoders = dojo.clone(configOptions.helperServices.geocode);

    dojo.forEach(geocoders, function (geocoder, index) {
        if (geocoder.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer") > -1) {
            hasEsri = true;
            geocoder.name = "Esri World Geocoder";
            geocoder.outFields = "Match_addr, stAddr, City";
            geocoder.singleLineFieldName = "SingleLine";
            geocoder.placeholder = (configOptions.placefinder.placeholder === "") ? i18n.tools.search.title : configOptions.placefinder.placeholder;
            geocoder.esri = geocoder.placefinding = true;
            if (configOptions.placefinder.currentExtent || configOptions.searchextent) {
                geocoder.searchExtent = map.extent;
            }
            if (configOptions.placefinder.countryCode !== "") {
                geocoder.sourceCountry = configOptions.placefinder.countryCode;
            }
        }

    });
    //only use geocoders with a singleLineFieldName that allow placefinding unless its custom

    geocoders = dojo.filter(geocoders, function (geocoder) {
        if(geocoder.name && geocoder.name === "Custom"){
            return (esri.isDefined(geocoder.singleLineFieldName));
        }else{
         return (esri.isDefined(geocoder.singleLineFieldName) && esri.isDefined(geocoder.placefinding) && geocoder.placefinding);
        }
    });
    var esriIdx;
    if (hasEsri) {
        for (var i = 0; i < geocoders.length; i++) {
            if (esri.isDefined(geocoders[i].esri) && geocoders[i].esri === true) {
                esriIdx = i;
                break;
            }
        }
    }
    var options = {
        map: map,
        autoNavigate: false,
        autoComplete: hasEsri,
        theme: "simpleGeocoder"
    };
    if (hasEsri) {
        options.minCharacters = 0;
        options.maxLocations = 5;
        options.searchDelay = 100;
    }
    //If the World geocoder is primary enable auto complete 
    if (hasEsri && esriIdx === 0) {
        options.arcgisGeocoder = geocoders.splice(0, 1)[0]; //geocoders[0];
        if (geocoders.length > 0) {
            options.geocoders = geocoders;
        }
    } else {
        options.arcgisGeocoder = false;
        options.geocoders = geocoders;
    }

    return options;

}

function createSearchTool() {
    //If user has specified a placefinder url set that to overwrite the geocode helper services
    if (configOptions.placefinder.url !== "") {
        configOptions.helperServices.geocode = [];
        configOptions.helperServices.geocode.push({
            name: "Custom",
            outFields: "*",
            url: configOptions.placefinder.url,
            singleLineFieldName: configOptions.placefinder.singleLineFieldName
        });
    }
    var options = createOptions();


    var geocoder = new esri.dijit.Geocoder(options, dojo.create("div", {
        id: "geocoder"
    }));

    geocoder.startup();
    dojo.byId('webmap-toolbar-right').appendChild(geocoder.domNode);

    //if location was set go there 
    if (configOptions.find) {
        geocoder.value = configOptions.find;
        allResults = null;
        geocoder.find().then(function (response) {
            var result = response.results && response.results[0];
            if (result) {
                allResults = response.results;
                geocoder.select(result);
            }
        });
    }

    // dojo.connect(geocoder, "onFindResults",handleGeocodeResults);
    geocoder.on("find-results", checkResults); //handleGeocodeResults);
    geocoder.on("select", showGeocodingResult); //handleGeocodeResults);
    geocoder.on("auto-complete", clearResults);
    geocoder.on("clear", clearResults);



}
function checkResults(geocodeResults) {
    allResults = null;
    if (geocodeResults && geocodeResults.results && geocodeResults.results.results) {
        geocodeResults.results = geocodeResults.results.results;
    }
    if ((!geocodeResults || !geocodeResults.results || !geocodeResults.results.length)) {
        //No results
        console.log("No results found");
    } else if (geocodeResults) {
        allResults = geocodeResults.results;
        console.log(allResults);
    }
}

function clearResults() {
    if (map.infoWindow.isShowing) {
        map.infoWindow.hide();
    }
    allResults = null;
}

function showGeocodingResult(geocodeResult, pos) {
    if (!esri.isDefined(pos)) {
        pos = 0;
    }

    if (geocodeResult.result) {
        geocodeResult = geocodeResult.result;
    }

    if (geocodeResult.extent) {
        setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, geocodeResult.extent, geocodeResult, pos);
    } else { //best view 
        var bestView = map.extent.centerAt(geocodeResult.feature.geometry).expand(0.0625);
        setupInfoWindowAndZoom(geocodeResult.name, geocodeResult.feature.geometry, bestView, geocodeResult, pos);
    }
}

function setupInfoWindowAndZoom(content, geocodeLocation, newExtent, geocodeResult, pos) {
    map.infoWindow.clearFeatures();

    //Show info window
    if (allResults && allResults.length > 1) {
        //let's update the content to show additional results 
        var currentLocationName = content;
        var attr = allResults[pos].feature.attributes;
        content = "<div id='geocodeCurrentResult' style='display:none;'><span style='font-weight:bold;'>";
        content += i18n.tools.search.currentLocation;
        content += "</span></div>";
        content += "<span>";

        if (!attr.Match_addr) {
            content += currentLocationName;
        } else {
            content += attr.Match_addr;
            if (attr.stAddr && attr.City) {
                content += " - " + attr.stAddr + ", " + attr.City;
            } else if (attr.stAddr) {
                content += " - " + attr.stAddr;
            }
        }

        content += "</span>";
        content += "<div id='geocodeWantOtherResults'>";
        content += "<A onClick='showOtherResults();' href='#'>";

        content += i18n.tools.search.notWhatYouWanted;
        content += "</A>";
        content += "</div>";
        content += "<div id='geocodeOtherResults' style='display:none;'><span style='font-weight:bold;'>";
        content += i18n.tools.search.selectAnother;
        content += "</span><br/>";
        for (var i = 0; i < allResults.length; i++) {
            if (i !== pos) {
                var result = allResults[i];
                attr = result.feature.attributes;
                content += "<A href='#' onClick='selectAnotherResult(" + i + ")'>";
                if (!attr.Match_addr) {
                    content += result.name;
                } else {
                    //content += result.feature.attributes.Place_addr ? (" - " + result.feature.attributes.Place_addr) : ""
                    content += attr.Match_addr;
                    if (attr.stAddr && attr.City) {
                        content += " - " + attr.stAddr + ", " + attr.City;
                    } else if (attr.stAddr) {
                        content += " - " + attr.stAddr;
                    }
                }

                content += "</A><br/>";
            }
        }
        content += "</div>";

    }

    //display a popup for the result
    map.infoWindow.setTitle(i18n.tools.search.popupTitle);
    map.infoWindow.setContent(content);
    //Ensure popups don't interfere wtih the editor window contents. 
    var handler = dojo.connect(map.infoWindow, "onHide", function () {
        dojo.disconnect(handler);
        if (editorWidget) {
            destroyEditor();
            createEditor();
        }
    });

    var location = new esri.geometry.Point(geocodeLocation.x, geocodeLocation.y, geocodeLocation.spatialReference);
    var extentHandler = dojo.connect(map, "onExtentChange", function () {
        map.infoWindow.show(location);
        dojo.disconnect(extentHandler);
    });

    map.setExtent(newExtent);

}

function showOtherResults() {
    dojo.style(dojo.byId("geocodeWantOtherResults"), "display", "none");
    dojo.style(dojo.byId("geocodeCurrentResult"), "display", "block");
    dojo.style(dojo.byId("geocodeOtherResults"), "display", "block");

}

function selectAnotherResult(pos) {
    showGeocodingResult(allResults[pos], pos);
}




//Add the time slider if the webmap has time-aware layers 


function addTimeSlider(timeProperties) {
    esri.show(dojo.byId('timeFloater'));
    //add time button and create floating panel
    var fp = new ConstrainedFloatingPane({
        title: i18n.tools.time.title,
        resizable: false,
        dockable: false,
        closable: false,
        style: "position:absolute;top:30px;left:60px;width:70%;height:150px;z-index:100;visibility:hidden;",
        id: 'timeFloater'
    }, dojo.byId('timeFloater'));
    fp.startup();



    //add close button to title pane - time panel can be toggled using the button so close not necessary?
   /* var titlePane = dojo.query('#timeFloater .dojoxFloatingPaneTitle')[0];
    var closeDiv = dojo.create('div', {
        id: "closeBtn",
        innerHTML: esri.substitute({
            close_title: i18n.panel.close.title,
            close_alt: i18n.panel.close.label
        }, '<a alt=${close_alt} title=${close_title} href="#" onClick="toggleTime(null);"><img  src="images/close.png"/></a>')
    }, titlePane);*/

    //add a button to the toolbar to toggle the time display 
    var toggleButton = new dijit.form.ToggleButton({
        label: i18n.tools.time.label,
        title: i18n.tools.time.title,
        id: "toggleTimeButton",
        iconClass: "esriTimeIcon"
    });

    dojo.connect(toggleButton, "onClick", function () {
        toggleTime(timeProperties);
    });

    dojo.byId('webmap-toolbar-center').appendChild(toggleButton.domNode);


}

function formatDate(date, datePattern) {
    return dojo.date.locale.format(date, {
        selector: 'date',
        datePattern: datePattern
    });
}

function hasTemporalLayer(layers) {
    var timeLayers = [];
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        if (layer.layerObject) {
            if (layer.layerObject.timeInfo && layer.layerObject.timeInfo.timeExtent && layer.layerObject.visible) {
                timeLayers.push(layer.layerObject);
            }
        }
    }
    return timeLayers;
}

function getFullTimeExtent(timeLayers) {
    var fullTimeExtent = null;
    dojo.forEach(timeLayers, function (layer) {
        var timeExtent = layer.timeInfo.timeExtent;
        if (!fullTimeExtent) {
            fullTimeExtent = new esri.TimeExtent(new Date(timeExtent.startTime.getTime()), new Date(timeExtent.endTime.getTime()));
        } else {
            if (fullTimeExtent.startTime > timeExtent.startTime) {
                fullTimeExtent.startTime = new Date(timeExtent.startTime.getTime());
            }
            if (fullTimeExtent.endTime < timeExtent.endTime) {
                fullTimeExtent.endTime = new Date(timeExtent.endTime.getTime());
            }
        }
    });
    // round off seconds
    fullTimeExtent.startTime = new Date(fullTimeExtent.startTime.getFullYear(), fullTimeExtent.startTime.getMonth(), fullTimeExtent.startTime.getDate(), fullTimeExtent.startTime.getHours(), fullTimeExtent.startTime.getMinutes(), 0, 0);
    fullTimeExtent.endTime = new Date(fullTimeExtent.endTime.getFullYear(), fullTimeExtent.endTime.getMonth(), fullTimeExtent.endTime.getDate(), fullTimeExtent.endTime.getHours(), fullTimeExtent.endTime.getMinutes() + 1, 1, 0);
    return fullTimeExtent;
}

function findDefaultTimeInterval(fullTimeExtent) {
    var interval;
    var units;
    var timePerStop = (fullTimeExtent.endTime.getTime() - fullTimeExtent.startTime.getTime()) / 10;
    var century = 1000 * 60 * 60 * 24 * 30 * 12 * 100;
    if (timePerStop > century) {
        interval = Math.round(timePerStop / century);
        units = "esriTimeUnitsCenturies";
    } else {
        var decade = 1000 * 60 * 60 * 24 * 30 * 12 * 10;
        if (timePerStop > decade) {
            interval = Math.round(timePerStop / decade);
            units = "esriTimeUnitsDecades";
        } else {
            var year = 1000 * 60 * 60 * 24 * 30 * 12;
            if (timePerStop > year) {
                interval = Math.round(timePerStop / year);
                units = "esriTimeUnitsYears";
            } else {
                var month = 1000 * 60 * 60 * 24 * 30;
                if (timePerStop > month) {
                    interval = Math.round(timePerStop / month);
                    units = "esriTimeUnitsMonths";
                } else {
                    var week = 1000 * 60 * 60 * 24 * 7;
                    if (timePerStop > week) {
                        interval = Math.round(timePerStop / week);
                        units = "esriTimeUnitsWeeks";
                    } else {
                        var day = 1000 * 60 * 60 * 24;
                        if (timePerStop > day) {
                            interval = Math.round(timePerStop / day);
                            units = "esriTimeUnitsDays";
                        } else {
                            var hour = 1000 * 60 * 60;
                            if (timePerStop > hour) {
                                interval = Math.round(timePerStop / hour);
                                units = "esriTimeUnitsHours";
                            } else {
                                var minute = 1000 * 60;
                                if (timePerStop > minute) {
                                    interval = Math.round(timePerStop / minute);
                                    units = "esriTimeUnitsMinutes";
                                } else {
                                    var second = 1000;
                                    if (timePerStop > second) {
                                        interval = Math.round(timePerStop / second);
                                        units = "esriTimeUnitsSeconds";
                                    } else {
                                        interval = Math.round(timePerStop);
                                        units = "esriTimeUnitsMilliseconds";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    var timeStopInterval = {};
    timeStopInterval.units = units;
    timeStopInterval.interval = interval;
    return timeStopInterval;


}

function toggleTime(timeProperties) {
    if (dojo.byId('timeFloater').style.visibility === 'hidden') {
        //create and display the time slider 
        createTimeSlider(timeProperties);
        dojo.style(dojo.byId("timeFloater"),"top", "0");
        dijit.byId('timeFloater').show();
        dijit.byId('mainWindow').resize();
        resizeMap();
    } else {
        //stop the time slider if its playing then destroy and hide the time slider 
        if (dijit.byId('timeSlider').playing) {
            dijit.byId('timeSlider').pause();
        }
        dijit.byId('timeSlider').destroy();
        map.setTimeExtent(null);
        map.setTimeSlider(null);

        dijit.byId('timeFloater').hide();
        dijit.byId('toggleTimeButton').set('checked', false);
    }
}

function createTimeSlider(timeProperties) {
    var startTime = timeProperties.startTime;
    var endTime = timeProperties.endTime;
    var fullTimeExtent = new esri.TimeExtent(new Date(startTime), new Date(endTime));

    map.setTimeExtent(fullTimeExtent);
    var timeView = dojo.create('div', {
        id: 'timeViewContent'
    });
    dijit.byId('timeFloater').set('content', timeView);

    //create a time slider and a label to hold date details and add to the floating time panel
    var timeSlider = new esri.dijit.TimeSlider({
        style: "width: 100%;",
        id: "timeSlider",
        loop: true
    }, dojo.create('div'));

    var timeSliderLabel = dojo.create('div', {
        id: 'timeSliderLabel'
    }, dojo.byId('timeViewContent'));

    dojo.addClass('timeSliderLabel', 'timeLabel');

    dojo.place(timeSlider.domNode, dojo.byId('timeViewContent'), "last");


    map.setTimeSlider(timeSlider);
    //Set time slider properties 
    timeSlider.setThumbCount(timeProperties.thumbCount);
    timeSlider.setThumbMovingRate(timeProperties.thumbMovingRate);
    //define the number of stops
    if (timeProperties.numberOfStops) {
        timeSlider.createTimeStopsByCount(fullTimeExtent, timeProperties.numberOfStops);
    } else {
        timeSlider.createTimeStopsByTimeInterval(fullTimeExtent, timeProperties.timeStopInterval.interval, timeProperties.timeStopInterval.units);
    }
    //set the thumb index values if the count = 2
    if (timeSlider.thumbCount === 2) {
        timeSlider.setThumbIndexes([0, 1]);
    }

    dojo.connect(timeSlider,"onTimeExtentChange",updateTimeSliderTitle);
    timeSlider.startup();

}
function updateTimeSliderTitle(timeExtent) {
    var slider = this;
    var start = null,
        end = null;

    if (!timeExtent) {
        // startup
        if (slider.thumbCount == 2) {
            start = slider.timeStops[0];
            end = slider.timeStops[1];
        } else {
            start = slider.timeStops[0];
        }
    } else {
        start = timeExtent.startTime;
        if ((timeExtent.endTime.getTime() - timeExtent.startTime.getTime()) > 0) {
            end = timeExtent.endTime;
        }
    }

    var startDatePattern = null;
    var endDatePattern = null;
    var startTimePattern = null;
    var endTimePattern = null;
    if (end && start.getFullYear() == end.getFullYear()) {
        if (start.getMonth() == end.getMonth()) {
            if (start.getDate() == end.getDate()) {
                if (start.getHours() == end.getHours()) {
                    if (start.getMinutes() == end.getMinutes()) {
                        if (start.getSeconds() == end.getSeconds()) {
                            // same second
                            startDatePattern = i18n.tools.time.datePattern;
                            startTimePattern = i18n.tools.time.millisecondTimePattern;
                            endTimePattern = i18n.tools.time.millisecondTimePattern;
                        } else { // same minute
                            startDatePattern = i18n.tools.time.datePattern;
                            startTimePattern = i18n.tools.time.secondTimePattern;
                            endTimePattern = i18n.tools.time.secondTimePattern;
                        }
                    } else { // same hour
                        startDatePattern = i18n.tools.time.datePattern;
                        startTimePattern = i18n.tools.time.minuteTimePattern;
                        endTimePattern = i18n.tools.time.minuteTimePattern;
                    }
                } else { // same day
                    startDatePattern = i18n.tools.time.datePattern;
                    startTimePattern = i18n.tools.time.hourTimePattern;
                    endTimePattern = i18n.tools.time.hourTimePattern;
                }
            } else { // same month
                if (end.getDate() - start.getDate() < 2) {
                    // less than 2 days
                    startDatePattern = i18n.tools.time.datePattern;
                    startTimePattern = i18n.tools.time.hourTimePattern;
                    endDatePattern = i18n.tools.time.datePattern;
                    endTimePattern = i18n.tools.time.hourTimePattern;
                } else {
                    startDatePattern = i18n.tools.time.datePattern;
                    endDatePattern = i18n.tools.time.datePattern;
                }
            }
        } else { // same year
            startDatePattern = i18n.tools.time.datePattern;
            endDatePattern = i18n.tools.time.datePattern;
        }
    } else if (end && end.getFullYear() - start.getFullYear() > 2) {
        startDatePattern = i18n.tools.time.yearPattern;
        endDatePattern = i18n.tools.time.yearPattern;
    } else {
        startDatePattern = i18n.tools.time.datePattern;
        endDatePattern = i18n.tools.time.datePattern;
    }

    var startTime = dojo.date.locale.format(start, {
        datePattern: startDatePattern,
        timePattern: startTimePattern,
        selector: (startDatePattern && startTimePattern) ? null : (startDatePattern ? "date" : "time")
    });
    var endTime = null;
    if (end) {
        endTime = dojo.date.locale.format(end, {
            datePattern: endDatePattern,
            timePattern: endTimePattern,
            selector: (endDatePattern && endTimePattern) ? null : (endDatePattern ? "date" : "time")
        });
    }

    var info;
    if (end) {
        info = dojo.string.substitute(i18n.tools.time.timeRange, {
            start_time: startTime,
            end_time: endTime
        });
    } else {
        info = "" + startTime;
    }
    dojo.byId("timeSliderLabel").innerHTML = info;

}

function createElevationProfileTools() {

    // DO WE HAVE THE MEASURE TOOL ENABLED //
    if (!measure) {
        console.error("This template requires the measure tool to be enabled.");
        return;
    }



    dijit.byId('bottomPane').set('content', '<div id="profileChartPane" dojotype="apl.ElevationsChart.Pane"></div>');

    // GET DEFAULT DISTANCE UNITS BASED ON SCALEBAR UNITS     //
    // IF SCALEBAR IS NOT DISPLAYED THEN USE MILES AS DEFAULT //
    var defaultDistanceUnits = measure.units.esriMiles;
    if (configOptions.displayscalebar === "true" || configOptions.displayscalebar === true) {
        if (configOptions.units === "metric") { //(i18n.viewer.main.scaleBarUnits === 'metric') {
            defaultDistanceUnits = measure.units.esriKilometers;
        }
    }


    // INITIALIZE ELEVATIONS PROFILE CHART WIDGET               //
    //                                                          //
    // @param {esri.Map} map                                    //
    // @param {esri.dijit.Measurement} measure                  //
    // @param {String} defaultDistanceUnits ( Miles || Meters ) //
    // @param {Boolean} showElevationDifference                 //
    dijit.byId('profileChartPane').init({
        map: map,
        measure: measure,
        defaultDistanceUnits: defaultDistanceUnits,
        showElevationDifference: configOptions.showelevationdifference
    });
}


function adjustPopupSize() {
    var box = dojo.contentBox(map.container);

    var width = 270,
        height = 300,
        // defaults
        newWidth = Math.round(box.w * 0.60),
        newHeight = Math.round(box.h * 0.45);
    if (newWidth < width) {
        width = newWidth;
    }

    if (newHeight < height) {
        height = newHeight;
    }

    map.infoWindow.resize(width, height);
}
