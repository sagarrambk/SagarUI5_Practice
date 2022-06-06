sap.ui.jsview("home.view.sign", {
    getControllerName: function () {
        return "home.controller.sign"
    },

    createContent: function (oController) {
        var oBtn1 = new sap.m.Button("idBtn1", {
            text: "SignIn",
            icon: "sap-icon://accept",
            press: oController.onSignIn
        });
        var oBtn2 = new sap.m.Button("idBtn2", {
            text: "SignUp",
            icon: "sap-icon://write-new",
            press: oController.onSignUp
        });
        return [oBtn1, oBtn2];
    }
});