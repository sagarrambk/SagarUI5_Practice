sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "home/model/modelAggre",
    'sap/m/MessageToast',
], function (Controller, JSONModel, modelAggre, MessageToast) {
    'use strict';
    return Controller.extend("home.controller.aggregation", {
        onInit: function () {
            var ocModel = modelAggre.createJSONModel("model/modelData/studentData.json");
            this.getView().setModel(ocModel);
        },
        onSearch: function (oEvent) {
            // get search information 
            var oQuery = oEvent.getParameter("query");
            // get list data using ref
            var oListData = this.getView().byId("idList");
        },
        onListItemPress: function (oEvent) {
            MessageToast.show("Selected: " + oEvent.getSource().getTitle());
        },
    });
});