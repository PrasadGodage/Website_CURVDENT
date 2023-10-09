

$(function() {

    $("#addVendorForm").validate( {

        ignore: [], rules: {

            vendorName: {

                required: true, minlength: 2, maxlength: 255

            },
            contactFirm: {

              minlength: 10,number:true

            },
            
           
            pincode: {

                minlength: 6, number:true

            },
            
            
            
        }

        , messages: {

            name: {

                required: 'Enter vendor name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            contact_Firm: {

             minlength: 'please enter valid Number',number:"please provide numbers only" 

            },
            
           
            pincode: {

                minlength: 'please enter valid Pincode', 

            },
               

        }

    });

});



