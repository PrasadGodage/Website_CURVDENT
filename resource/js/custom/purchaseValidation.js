
$(function() {

    $("#addPurchaseForm").validate( {

        ignore: [], rules: {

            vendorName: {

                required: true

            },
            gstin: {

                required: true

            },
            contactFirm: {

                required: true,minlength: 10,number:true

            },
            productName: {

                required: true

            // },
            // IMEINo: {

            //     required: true

            // },
            // ActivationDate: {

            //     required: true

            // },
            // UIDNo_ICCDENo: {

            //     required: true

            // },
            // SIM1No: {

            //     required: true,minlength: 10,number:true
            // },
            // SIM2No: {

            //     required: true,minlength: 10,number:true

            }
            
        }

        , messages: {

            vendorName: {

                required: 'Select Vendor Name'

            },
            gstin: {

                required: 'Enter GSTIN'

            },
            contactFirm: {

                required: ' Enter Contact Number', minlength: 'please enter 10 Digit',number:"please provide numbers only" 

            },
            productName: {

                required: 'Select Product Name'

            // },
            // IMEINo: {

            //     required: 'Enter IMEI No'

            // },
            // ActivationDate: {

            //     required: 'Select Activation Date'
            // },
            // UIDNo_ICCDENo: {

            //     required: 'Enter ICCDE No'

            // },
            // SIM1No: {

            //     required: ' Enter Contact Number', minlength: 'please enter 10 Digit',number:"please provide numbers only"

            // },
            // SIM2No: {

            //     required: ' Enter Contact Number', minlength: 'please enter 10 Digit',number:"please provide numbers only"

            }

        }

    });

});



