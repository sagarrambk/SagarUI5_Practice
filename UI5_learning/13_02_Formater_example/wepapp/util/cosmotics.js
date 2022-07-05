sap.ui.define([
    "sap/ui/core/format/NumberFormat"
],
    function (NumberFormat, DateFormat) {
        'use strict';
        return {
            convertUpperCase: function (inp) {
                if (inp) {
                    return inp.toUpperCase();
                }
            },
            formatCurrency: function (amount, currency) {
                // Create object for number format
                var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                    currencyCode: false
                });

                // format currency
                return oCurrencyFormat.format(amount, currency);
            },
            //            formatDate: function() {
            //                var oDate = new Date(Date.UTC(2021, 11, 24, 13, 37));
            //            }
            statusOfStudent: function (status) {
                switch (status) {
                    case 'P':
                        return "Promotted";
                        break;
                    case 'A':
                        return "Studying";
                        break;
                    case 'N':
                        return "Not Available";
                        break;
                    default:
                        break;
                }
            },

            statusColor: function (status) {

                switch (status) {
                    case 'P':
                        return "Success";
                        break;
                    case 'A':
                        return "Information";
                        break;
                    case 'N':
                        return "Error";
                        break;
                    default:
                        break;
                }
            },

        };

    });