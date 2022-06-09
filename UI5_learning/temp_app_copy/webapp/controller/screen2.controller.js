sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "home/model/modelEmp"
], function (Controller, student) {
    'use strict';
    return Controller.extend("home.controller.screen2", {
        onInit: function () {
            //debugger;
            // create model object to 
            var oCSModel = student.studentModel();
            // link model to to view 
            this.getView().setModel(oCSModel);
            // used 3rd property binding technic here for "EMP Skill/Tech" value
            // step 1 get the reference of the screen field.
            var oIdSClass = this.getView().byId("idSClass");
            //setp - 2 : Fill the value with respective path  
            oIdSClass.bindValue("/Student/Class");
            // used 4th property binding technic here for "EMP Location" value
            // step 1 get the reference of the screen field.
            var oIdSLoc = this.getView().byId("idSLoc");
            //setp - 2 : Fill the value with respective path
            //4th type of property binding
            oIdSLoc.bindProperty("value", "/Student/Location");

        },
    });
});

