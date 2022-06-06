sap.ui.jsview("home.view.screen1", {
    getControllerName: function () {
        return "home.controller.screen1"
    },
    createContent: function (oController) {
        var oBtn1 = new sap.m.Button("idBtn1", {
            text: "Save",
            icon: "sap-icon://save",
            press: oController.onSave
        });

        var oBtn2 = new sap.m.Button("idBtn2", {
            text: "Delete",
            icon: "sap-icon://delete",
            press: oController.onDelete
        });
        return [oBtn1, oBtn2];
    }
});

