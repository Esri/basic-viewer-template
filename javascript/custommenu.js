   define(["dojo/_base/declare", "dijit/MenuItem"],
    function( declare, MenuItem) {
       var custommenu = declare("utilities.custommenu", [MenuItem], {
            iconSrc: "", 
            _setIconSrcAttr: {node: "iconNode", type: "attribute", attribute: "src" }  
        });
       return custommenu;
    });