

$(function() {

    $("#addSubscriberForm").validate( {

        ignore: [], rules: {

            email: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            email: {

                required: 'Enter Email Address', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

        }

    });

});



