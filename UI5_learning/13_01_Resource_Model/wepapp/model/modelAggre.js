sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    'use strict';
    return {
        createJSONModel: function (sPath) {
            // create a JSONModel Model
            var stModel = new JSONModel();
            // set / load model data
            stModel.loadData(sPath);
            return stModel;
        }
    }
});