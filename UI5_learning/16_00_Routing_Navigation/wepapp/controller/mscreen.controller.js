sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("home.controller.mscreen", {
        onInit: function () {
            this.Router = this.getOwnerComponent().getRouter();

        },
        onListItemPress: function (oEvent) {
            //            debugger;
            MessageToast.show("Selected: " + oEvent.getSource().getIntro());
        },
        onSelect: function (oEvent) {
            debugger;
            //this.router.navTo("item");
            var oSelRecord = oEvent.getParameter("listItem").getBindingContextPath().split("/")[2];
            this.Router.navTo("item", {
                index: oSelRecord
            });
        }
    });
});