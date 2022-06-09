sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/model/modelEmp"
], function (Controller, modelEmp) {
    'use strict';
    return Controller.extend("home.controller.screen1", {
        onInit: function () {
            //debugger;
            // create model object to 
            var oCEModel = modelEmp.employeeModel();
            // link model to to view 
            this.getView().setModel(oCEModel);
            // used 3rd property binding technic here for "EMP Skill/Tech" value
            // step 1 get the reference of the screen field.
            var oIdESkil = this.getView().byId("idESkil");
            //setp - 2 : Fill the value with respective path  
            oIdESkil.bindValue("/Employee/Skills");
            // used 4th property binding technic here for "EMP Location" value
            // step 1 get the reference of the screen field.
            var oIdELoc = this.getView().byId("idELoc");
            //setp - 2 : Fill the value with respective path
            //4th type of property binding
            oIdELoc.bindProperty("value", "/Employee/Location");

        },
    });
});

