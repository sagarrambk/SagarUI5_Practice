sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    'use strict';
    return {
        createJSONModel: function (sPath) {
            // create a JSONModel Model
            var oModel = new JSONModel();
            // set / load model data
            oModel.loadData(sPath);
            return oModel;
        }
    }
});