sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    'use strict';
    return {
        studentModel: function () {
            var oStudent = new JSONModel();
            oStudent.loadData("model/modeldata/student.json");
            return oStudent;
        }
        
    }
});