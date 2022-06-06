sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    'use strict';
    return Controller.extend("home.controller.screen", {
        onSave: function () {
            alert("Data Saved");
        },
        onDelete: function () {
            alert("Data Deleted");
        },
    });

});
