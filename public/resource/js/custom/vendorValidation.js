$(function() {

    $("#addVendorForm").validate( {

        ignore: [], rules: {

            vendorName: {

                required: true, minlength: 2, maxlength: 255

            },
            
            contactFirm: {

               required:true, minlength: 10, maxlength: 10 ,number: true

           },
           pincode: {

                 minlength: 6, maxlength: 6

            }
            
            
            
            
        }

        , messages: {

            vendorName: {

                required: 'Enter Vendor Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            
            contactFirm: {

               required:'Please enter contact', minlength: 'please enter 10 digits', maxlength: 'please enter 10 digits' ,number: 'please enter only nos'

           },
            
           pincode: {

               minlength: 'please enter more digits', maxlength: 'length is exceed'

            }
            
            
            
            

            

        }

    });

});



