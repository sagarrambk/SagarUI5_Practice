sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.screen1", {
        init: function () {

        },

        goToScreen2: function () {
            // to navigate to another
            // first we need to get the parent view / container in our case App.view.xml
            //var oConApp = this.getView().getParent();
            // from parent container we can go to other screen, we need to use screen ID which we defined in component.js in our case we gave "idScreen2" for screen2 
            //oConApp.to("idScreen2");

            // we can write above complete code in single line like below.
            this.getView().getParent().to("idScreen2");

        }
    });
});