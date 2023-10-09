$(function() {

    $("#addInventoryForm").validate( {

        ignore: [], rules: {

            productName: {

                required: true, 

            },
            imeino: {

                required: true, minlength: 2, maxlength: 15

            }
            ,
            uidno: {

                required: true, minlength: 2, maxlength: 15

            }
            ,
            simno1: {

                required: true, minlength: 2, maxlength: 12

            }
            ,
            simno2: {

                required: true, minlength: 2, maxlength: 12

            }
            ,
            sktStatus: {

                required: true,

            },
            purchaseDate: {

                required: true,

            },
            purchCreatedBy: {

                required: true,

            },
            vendorName: {

                required: true,

            },
            purchaseId: {

                required: true,

            }

            
            
        }

        , messages: {

            firstName: {

                required: 'Enter First Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            lastName: {

                required: 'Enter Last Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            address1: {

                required: 'Enter Address1', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            postcode: {

                required: 'Enter Post Code', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            openOutstanding: {

                required: 'Enter Openning Outstanding', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            ,
            outstanding: {

                required: 'Enter Outstanding', minlength: 'please enter more word', maxlength: 'length is exceed'

            }
            
            
            

            

        }

    });

});



