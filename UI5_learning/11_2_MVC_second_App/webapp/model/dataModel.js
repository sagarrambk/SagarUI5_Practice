sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    'use strict';
    return {
        studentModel: function () {
            var oStudent = new JSONModel();
            oStudent.loadData("model/modelData/student.json");
            return oStudent;
        },

        schoolModel: function () {
            var oSchool = new JSONModel ();
            oSchool.loadData("model/modelData/school.json");
            return oSchool;
        }

    }
});
