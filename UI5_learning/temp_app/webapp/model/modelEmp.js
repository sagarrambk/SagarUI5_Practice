sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    'use strict';

    return {
        employeeModel: function () {
            //Step - 1 : Create Model object 
            var oEmpModel = new JSONModel(); //Skeleton / carrier 
            //debugger;
            //Step - 2 : Set / load - mock data (JSON / XML / JS / HTML)
            oEmpModel.loadData("model/modelData/employeeInfo.json");
            return oEmpModel;
        },
        studentModel: function () {
            var oStudentModel = new JSONModel();
            oStudentModel.loadData("model/modelData/student.json");
            return oStudentModel;
        }
    }
});
