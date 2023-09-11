

$(function() {

    $("#addCategoryForm").validate( {

        ignore: [], rules: {

            categoryName: {

                required: true, minlength: 2, maxlength: 255

            },
            slug: {

                required: true, minlength: 2, maxlength: 255

            },is_active: {

                required: true, minlength: 2, maxlength: 255

            }
            
        }

        , messages: {

            categoryName: {

                required: 'Enter Category Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            slug: {

                required: 'Enter Slug', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            is_active: {

                required: 'Select Active Or Not', minlength: 'please enter more word', maxlength: 'length is exceed'

            }

        }

    });

});



