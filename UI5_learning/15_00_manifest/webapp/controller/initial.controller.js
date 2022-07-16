sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.initial", {
        init: function () {
        },
        onRegister: function () {
            this.getView().getParent().to("idRegister");
        },

        onLogin: function () {
            this.getView().getParent().to("idLogin");
        },
    });
});