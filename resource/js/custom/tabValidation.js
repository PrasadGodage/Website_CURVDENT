

$(function() {

    $("#addTabForm").validate( {

        ignore: [], rules: {

            tab_name: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            tab_name: {

                required: 'Enter Tab Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

            

        }

    });

});



