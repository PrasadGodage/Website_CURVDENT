$(function() {

    $("#addproductimeiForm").validate( {

        ignore: [], rules: {

            SelectProduct: {

                required: true

            },
            imei: {

                required: true

            },
            
            

            
  }

        , messages: {

            SelectProduct: {

                required: 'Select Product Name'
            },
            imei: {

                required: 'Enter imei no '

            },
                      

            

        }

    });

});

