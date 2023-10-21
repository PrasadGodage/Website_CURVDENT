$(function() {

    $("#addClientForm").validate( {

        ignore: [], rules: {

            firstName: {

                required: true, minlength: 2, maxlength: 255

            },
            lastName: {

                required: true, minlength: 2, maxlength: 255

            }
            ,
            phone: {

               required:true, minlength: 10, maxlength: 10 ,number: true

           },
            postcode: {

                 minlength: 6, maxlength: 6

            }
            ,
            openOutstanding: {

                  maxlength: 255, number: true

            }
            ,
            outstanding: {

                  maxlength: 255, number:true

            }
            
            
        }

        , messages: {

            firstName: {

                required: 'Enter First Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            lastName: {

                required: 'Enter Last Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            phone: {

               required:'Please enter contact', minlength: 'please enter 10 digits', maxlength: 'please enter 10 digits' ,number: 'please enter only nos'

           },
            
            postcode: {

               minlength: 'please enter more digits', maxlength: 'length is exceed'

            }
            ,
            openOutstanding: {

                 minlength: 'please enter more digits', maxlength: 'length is exceed', number: 'Please enter only nos'

            }
            ,
            outstanding: {

                minlength: 'please enter more digits', maxlength: 'length is exceed', number: 'Please enter only nos'

            }
            
            
            

            

        }

    });

});



