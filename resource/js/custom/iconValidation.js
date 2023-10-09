

$(function() {

    $("#addIconForm").validate( {

        ignore: [], rules: {

            icon_title: {

                required: true, minlength: 2, maxlength: 255

            },
            icon: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            icon_title: {

                required: 'Enter Icon Title', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            icon: {

                required: 'Enter Icon class', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

            

        }

    });

});



