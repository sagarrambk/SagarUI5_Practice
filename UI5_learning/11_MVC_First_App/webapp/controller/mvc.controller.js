sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/model/modelData/modelAdapter"
], function (Controller, modelData) {
    'use strict';
    return Controller.extend("home.controller.mvc", {

        onInit: function () {
            // create model object
            var oPerModel = modelData.personModelData();
            this.getView().setModel("oPerModel");
        }
    });
});