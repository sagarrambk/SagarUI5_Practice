sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.registration", {
        init: function () {

        },
        onSubmit: function () {
            this.getView().getParent().to("idLogin");
        }
    });
});