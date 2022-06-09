sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/model/dataModel"
], function (Controller, dataModel) {
    'use strict';
    return Controller.extend("home.controller.student", {
        onInit: function () {
            var oControllerStudentModel = dataModel.studentModel();
            this.getView().setModel(oControllerStudentModel);
        }
    });
});