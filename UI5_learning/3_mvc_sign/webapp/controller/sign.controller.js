sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.sign", {
        onSignIn: function () {
            alert("SigIn Success");
        },
        onSignUp: function () {
            alert("SigUp Success");
        },
    });
});