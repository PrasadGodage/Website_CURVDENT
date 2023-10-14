$(function() {

    $("#contactForm").validate( {

        ignore: [], rules: {

            fname: {

                required: true, minlength: 2, maxlength: 255

            },
            mail: {

                required: true, minlength: 2, maxlength: 255

            }
            ,
            mobile: {

               required:true, minlength: 10, maxlength: 10 ,number: true

           },
           sub: {

                required: true, minlength: 2, maxlength: 255

            }
            ,
            msg: {

                required: true, minlength: 2, maxlength: 1000

            }
                        
            
        }

        , messages: {

            fname: {

                required: 'Enter Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            mail: {

                required: 'Enter Email', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            mobile: {

               required:'Please enter contact', minlength: 'please enter 10 digits', maxlength: 'please enter 10 digits' ,number: 'please enter only nos'

           },
            
           sub: {

                required: 'Enter Subject', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            msg: {

                required: 'Enter Message', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
                        

        }

    });

});



