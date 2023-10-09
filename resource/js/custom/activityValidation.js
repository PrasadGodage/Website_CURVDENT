

$(function() {

    $("#addActivityForm").validate( {

        ignore: [], rules: {

            activity_title: {

                required: true, minlength: 2, maxlength: 255

            },
            url: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            activity_title: {

                required: 'Enter Activity Title', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            url: {

                required: 'Enter Url', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

            

        }

    });

});



