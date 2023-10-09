

$(function() {

    $("#addCountryForm").validate( {

        ignore: [], rules: {

            country: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            country: {

                required: 'Enter Country', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

            

        }

    });

});



