sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    'use strict';
    return {
        personModelData: function () {
            var oPersonModel = new JSONModel();
            oPersonModel.loadData("model/modelData/personDetails.json");
            return oPersonModel;
        },
    }
});