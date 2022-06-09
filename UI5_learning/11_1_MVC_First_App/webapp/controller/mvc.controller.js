sap.ui.define([
    "sap/ui/core/mvc/Controller",
   "home/model/modelData/modelAdapter"
], function (Controller, modelAdapter) {
    'use strict';
    return Controller.extend("home.controller.mvc", {

        onInit: function () {
            // create model object
            var oPerModel = modelAdapter.personModelData();
            // link model to to view 
            this.getView().setModel(oPerModel);
        }
    });
});