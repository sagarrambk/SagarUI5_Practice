sap.ui.define([
    "sap/ui/core/UIComponent",

], function (UIComponent) {
    'use strict';
    return UIComponent.extend("home.Component", {
        init: function () {
            UIComponent.prototype.init.apply(this);
        },

        createContent: function () {
            var oView = sap.ui.view({
                viewName: "home.view.App",
                id: "idAppView",
                type: "XML"
            });
            // assign all views/screens here
            var oInitial = sap.ui.view({
                viewName: "home.view.initial",
                type: "XML",
                id: "idInitial"
            });

            var oLogin = sap.ui.view({
                viewName: "home.view.login",
                type: "XML",
                id: "idLogin"

            });

            var oRegistration = sap.ui.view({
                viewName: "home.view.registration",
                type: "XML",
                id: "idRegistration"

            });
// we had created a App container view which holds / contains all screens to navigate in between screens
// so attach our screens to the App container view
// to attach screen to App container view create a variable for the App container view
            var oAppCon = oView.byId("appCon");
// using App container view + addpage attach the screen like below
            oAppCon.addPage(oInitial);
            oAppCon.addPage(oLogin);
            oAppCon.addPage(oRegistration);
            return oView;
        }
    });
});