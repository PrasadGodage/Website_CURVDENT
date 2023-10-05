

$(function() {

    $("#addNewsletterForm").validate( {

        ignore: [], rules: {

            title: {

                required: true, minlength: 2, maxlength: 255

            },

            content: {

                required: true, minlength: 2, maxlength: 255

            },

            PDF: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            title: {

                required: 'Enter Title', minlength: 'please enter more word', maxlength: 'length is exceed'

            },

            content: {

                required: 'Enter Content', minlength: 'please enter more word', maxlength: 'length is exceed'

            },

            PDF: {

                required: 'Choose PDF', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

        }

    });

});



