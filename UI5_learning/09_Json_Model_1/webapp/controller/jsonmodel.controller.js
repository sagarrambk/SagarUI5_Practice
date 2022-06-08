sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    'use strict';
    return Controller.extend("home.controller.jsonmodel", {
        onInit: function () {
            // here we are creating JSON payload 
            var oJsonData = {

                "Person": {
                    "Name": "Sagar",
                    "Id": "007",
                    "City": "Hyderabad",
                    "Pin": "500000",
                    "Contact": "123456",
                    "edit": false
                }
            }
            // now we need to creae model and link above payload to the model
            var oJsonModel = new JSONModel(oJsonData);
            // link model datat to the view
            this.getView().setModel(oJsonModel);
        },
    });
});