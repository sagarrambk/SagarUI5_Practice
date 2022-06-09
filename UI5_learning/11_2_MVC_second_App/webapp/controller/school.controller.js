sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/model/dataModel"
], function (Controller, dataModel) {
    'use strict';
    return Controller.extend("home.controller.school", {
        onInit: function () {
            var oControllerSchoolModel = dataModel.schoolModel();
            this.getView().setModel(oControllerSchoolModel);
        }
    });
});
