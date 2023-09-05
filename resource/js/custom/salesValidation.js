

$(function() {

    $("#addSalesForm").validate( {

        ignore: [], rules: {

            clientName: {

                required: true

            },
            productName : {

                required: true

            },
            imeiNo : {

                required: true

            },
            contactFirm: {

                required: true,minlength: 10,number:true

            },    
                               
           
        }

        , messages: {

            clientName: {

                required: 'select client'

            },
            productName: {

                required: 'select product'

            },
            imeiNo: {

                required: 'select imeino'

            },
            contactFirm: {

                required: ' Enter Contact Number', minlength: 'please enter valid Number',number:"please provide numbers only" 

            },            

        }

    });

});



