sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "home/model/modelAggre"
], function (Controller, JSONModel, modelAggre) {
    'use strict';
    return Controller.extend("home.controller.aggregation", {
        onInit: function () {
            var ocModel = modelAggre.createJSONModel("model/modelData/studentData.json");
            this.getView().setModel(ocModel);
        }
    });
});