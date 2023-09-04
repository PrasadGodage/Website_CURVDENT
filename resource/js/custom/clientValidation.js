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
            postcode: {

                 minlength: 2, maxlength: 255

            }
            ,
            openOutstanding: {

                 minlength: 2, maxlength: 255

            }
            ,
            outstanding: {

                 minlength: 2, maxlength: 255

            }
            
            
        }

        , messages: {

            firstName: {

                required: 'Enter First Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            lastName: {

                required: 'Enter Last Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            postcode: {

               minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            openOutstanding: {

                 minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            outstanding: {

                minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            
            
            

            

        }

    });

});



