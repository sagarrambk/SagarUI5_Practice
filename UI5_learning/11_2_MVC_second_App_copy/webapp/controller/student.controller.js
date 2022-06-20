sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "home/model/dataModel"
], function (Controller, JSONModel, dataModel) {
    'use strict';
    return Controller.extend("home.controller.student", {
        onInit: function () {
            //Default Model
            // Load / Set model &
            var oCModel = dataModel.createJSONModel("model/modelData/student.json");
            // Make aware of model to View
            this.getView().setModel(oCModel);


            //Named Model 
            var oCModel = dataModel.createJSONModel("model/modelData/school.json");
            // Make aware of model to View
            this.getView().setModel(oCModel, "school");
        }
    });
});