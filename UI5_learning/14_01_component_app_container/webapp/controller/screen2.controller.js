sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.screen2", {
        init: function () {

        },
        goToScreen1: function () {
            this.getView().getParent().to("idScreen1");
        }
    });
});