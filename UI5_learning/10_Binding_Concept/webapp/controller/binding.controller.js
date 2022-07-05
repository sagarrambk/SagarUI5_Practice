sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    'use strict';
    return Controller.extend("home.controller.binding", {
        onInit: function () {
            var oJsonData = {
                "Person": {
                    "Name": "Sagar",
                    "Id": "007",
                    "City": "Hyderabad",
                    "Pin": "500000",
                    "Contact": "123456",
                    "Edit": false
                }
            }
            var oJsonModel = new JSONModel(oJsonData);
            this.getView().setModel(oJsonModel);
            //Type-3 property Binding 
            // 1st Read the field details using its' id
            var oldCity = this.getView().byId("idCity");
            // Bind the value to the field 
            oldCity.bindValue("/Person/City");

            // 1st Read the field details using its' id
            var oldPin = this.getView().byId("idPin");
            // Bind the value to the field 
            oldPin.bindProperty("value", "/Person/Pin");
        },
    });
});

//We have 4 ways to do property binding.
//1)	Property = {Address / Path} – which we saw in our previous example like “value="{/Employee/EmployeeName}” in the XML view. Before we bind this, we created Model object and attached this model object to the view then we mentioned Address / Path of the model in the view field.
//Example - <Input id="idEname" width="30%" value="{/Employee/EmployeeName}"></Input>

//2)	Property = {path: ‘Address / Path’} - this similar to the above example only, difference is we just mention “path:” based binding before the “Address / Path” and enclose it with “single quote” like below.
//Example - <Input id="idEname" width="30%" value="{path: '/Employee/EmployeeName'}"></Input>

//The other 2 way we mention it in controller section.

//3)	bindValue(“Address / Path”):  - this we need to do it in the controller section, to do this first we need to get the reference of the screen field using this.getView().byId(); and keep it in a variable like below.
//var oIdESkil = this.getView().byId("idESkil");
//then use bindValue(“Address / Path”)  to link the screen field like below.
//oIdESkil.bindValue("/Employee/Skills");
//4)	bindProperty("value", "/company/name") – this is also need to be done in controller section, to do this we need to get the reference of the screen field using this.getView().byId(); and keep it in a variable like below.
//var oIdELoc = this.getView().byId("idELoc"); 
//then use bindProperty("value", "/company/name") to link the screen field like below.
//oIdELoc.bindProperty("value", "/Employee/Location");
