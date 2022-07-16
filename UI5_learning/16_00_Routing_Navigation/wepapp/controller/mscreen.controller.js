sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("home.controller.mscreen", {
        onInit: function () {

        },
        //      onListItemPress: function (oEvent) {
        //        MessageToast.show("Selected: " + oEvent.getSource().getIntro());
        //  },
    });
});