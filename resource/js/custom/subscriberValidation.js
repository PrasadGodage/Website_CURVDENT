

$(function() {

    $("#addSubscriberForm").validate( {

        ignore: [], rules: {

            email: {

                required: true, 

            }
            
        }

        , messages: {

            email: {

                required: 'please enter mail', 

            }

        }

    });

});



