

$(function() {

    $("#addCategoryForm").validate( {

        ignore: [], rules: {

            category_name: {

                required: true, minlength: 2, maxlength: 255

            },
            slug: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            category_name: {

                required: 'Enter Category Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            slug: {

                required: 'Enter Slug', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

        }

    });

});



