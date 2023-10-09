

$(function() {

    $("#addBrandForm").validate( {

        ignore: [], rules: {

            brandName: {

                required: true, minlength: 2, maxlength: 255

            }
           
            
        }

        , messages: {

            brandName: {

                required: 'Enter Brand Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

        }

    });

});



