sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'home/model/datamodel'
], function (Controller, datamodel) {
    'use strict';
    return Controller.extend("home.controller.student", {
        onInit: function () {
            var oCntStudent = datamodel.studentModel();
            this.getView().setModel(oCntStudent);
        }
    });
});