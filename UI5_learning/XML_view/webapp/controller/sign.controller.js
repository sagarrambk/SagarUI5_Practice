sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.sign", {
        onSignIn: function () {
            alert("Signin is successful");
        },
        onSignUp: function () {
            alert("Please do the SignUp");
        },
    });
});