$(function() {

    $("#addappointmentForm").validate( {

        ignore: [], rules: {

            fullName: {

                required: true, minlength: 2, maxlength: 255

            },

            address: {

                required: true, minlength: 2, maxlength: 255

            },
            
            contactNo: {

                required: true, minlength: 10, number:true, maxlength: 10

            },
            
            date: {

                required: true, 

            },

            time: {

                required: true, 

            },

            email: {

                required: true, 

            }
            
            
        }

        , messages: {

            fullName: {

                required: 'Enter Full Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },

            address: {

                required: 'Please enter valid address', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            
            contactNo: {

                required: ' Enter Contact Number', minlength: 'please enter 10 Digit',number:"please provide numbers only" 

            },
            
            date: {

                required: 'Please select valid date', 
                 
            },

            time: {

                required: 'Please select valid time',    

            },
            
            email: {

                required: 'please enter mail', 

            }
            
            
            

            

        }

    });

});



