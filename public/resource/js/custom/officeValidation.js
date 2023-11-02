

$(function() {

    $("#addOfficeTypeForm").validate( {

        ignore: [], rules: {

            type: {

                required: true, minlength: 2, maxlength: 255

            },
                        
        }

        , messages: {
                    
            
            type: {

                required: 'Please Enter type Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
                      

        }

    });

});



