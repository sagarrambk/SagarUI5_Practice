sap.ui.define([
    "sap/ui/core/UIComponent",
], function (UIComponent) {
    'use strict';
    return UIComponent.extend("home.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            UIComponent.prototype.init.apply(this);
        },
        createContent: function () {
            var oView = sap.ui.view({
                viewName: "home.view.App",
                type: "XML",
                id: "idAppView"
            });
            var oInitial = sap.ui.view({
                viewName: "home.view.initial",
                type: "XML",
                id: "idInitial"
            });
            var oRegister = sap.ui.view({
                viewName: "home.view.register",
                type: "XML",
                id: "idRegister"
            });
            var oLogin = sap.ui.view({
                viewName: "home.view.login",
                type: "XML",
                id: "idLogin"
            });
            var oData = sap.ui.view({
                viewName: "home.view.data",
                type: "XML",
                id: "idData"
            });

            var oAppCon = oView.byId("appCon");
            // using App container view + addpage attach the screen like below
            oAppCon.addPage(oInitial);
            oAppCon.addPage(oData);
            oAppCon.addPage(oLogin);
            oAppCon.addPage(oRegister);

            return oView;
        },

    });
});