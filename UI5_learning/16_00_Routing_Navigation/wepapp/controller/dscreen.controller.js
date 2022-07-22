sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("home.controller.dscreen", {
        onInit: function () {
            this.Router = this.getOwnerComponent().getRouter();
            this.Router.getRoute("item").attachPatternMatched(this.displayData, this);
        },
        displayData: function (oEvent) {
            debugger;
            var oIndex = oEvent.getParameter("arguments").index;
            var sPath = "/stD/" + oIndex;
            this.getView().bindElement(sPath);
        },
        //        onListItemPress: function (oEvent) {
        //            MessageToast.show("Selected: " + oEvent.getSource().getIntro());
        //        },
    });
});