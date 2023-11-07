

$(function() {

    $("#addPostForm").validate( {

        ignore: [], rules: {

            title: {

                required: true, minlength: 2, maxlength: 255

            },

            content: {

                required: true, minlength: 2, maxlength: 255

            },

            id_category: {

                required: true, 

            },

            photo: {

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

            id_category: {

                required: 'Select Category',

            },

            photo: {

                required: 'Choose Photo', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

        }

    });

});



