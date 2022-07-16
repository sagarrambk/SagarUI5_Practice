sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    'use strict';
    return Controller.extend("home.controller.login", {
        init: function () {
        },
        onRegister: function () {
            this.getView().getParent().to("idRegister");
        },
        onSubmit: function () {
            var msg = 'Login Successful';
            MessageToast.show(msg);
            this.getView().getParent().to("idData");
        },
    });
});