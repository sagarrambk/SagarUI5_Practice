sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "home/model/modelAggre",
    "home/util/cosmotics"
], function (Controller, JSONModel, modelAggre, cosmotics) {
    'use strict';
    return Controller.extend("home.controller.aggregation", {
        change: cosmotics,
        onInit: function () {
            var ocModel = modelAggre.createJSONModel("model/modelData/studentData.json");
            this.getView().setModel(ocModel);
        },
        onRowSelectionChange: function (oEvent) {
            var onSelect = oEvent.getParameter("rowContext");
            var oSelectRecodPath = onSelect.getPath();
            var oSimpleForm = this.getView().byId("idSimpleForm");
            oSimpleForm.bindElement(oSelectRecodPath);
        },
        deleteRow: function (oEvent) { 
            var oModel = sap.ui.getCore().getModel();
            var oData = oModel.getProperty("/stD");
            debugger;
        },
    });
});