$(function() {

    $("#addappointmentForm").validate( {

        ignore: [], rules: {

            name: {

                required: true, minlength: 2, maxlength: 255

            },
            address: {

                required: true, minlength: 2, maxlength: 255

            }
            ,
            contact: {

                 minlength: 10, maxlength: 10

            }
            ,
            date: {

                required: true, 

            }
            ,
            email: {

                required: true, 

            }
            
            
        }

        , messages: {

            name: {

                required: 'Enter Full Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            address: {

                required: 'Please enter valid address', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            contact: {

               minlength: 'please enter valid number', maxlength: 'length is exceed'

            }
            ,
            date: {

                required: 'Please select valid date', 
                 

            }
            ,
            email: {

                required: 'please enter mail', 

            }
            
            
            

            

        }

    });

});



