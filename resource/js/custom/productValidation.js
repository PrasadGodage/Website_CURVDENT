$(function() {

    $("#addproductForm").validate( {

        ignore: [], rules: {

            productName: {

                required: true, minlength: 2, maxlength: 255

            },
            SelectName: {

                required: true

            },
            availableStock: {

                required: true,digits:true

            }
            

            
  }

        , messages: {

            productName: {

                required: 'Enter Product Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            SelectName: {

                required: ' Select Brand Name '

            },
            availableStock: {

                required: 'Enter Available Stock'

            }
           

            

        }

    });

});

