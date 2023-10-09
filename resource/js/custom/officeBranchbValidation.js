

$(function() {

    $("#addOfficeBranchForm").validate( {

        ignore: [], rules: {

            office_type_id: {

                required: true

            },
            hod_id: {

                required: true

            },
            country_id: {

                required: true

            },
            state_id: {

                required: true

            },
            city_id: {

                required: true

            },
            office_name: {

                required: true,minlength: 2, maxlength: 255

            },
            contact_number1: {

                required: true,minlength: 10,number:true

            },
            email_id: {

                required: true,minlength: 2,maxlength: 255

            },
            pincode: {

                required: true,minlength: 6,

            }
            
        }

        , messages: {

            office_type_id: {

                required: 'Please Select Type'

            },
            hod_id: {

                required: 'Please Select Head of Dept'

            },
            country_id: {

                required: 'Please Select Country'

            },
            state_id: {

                required: 'Please Select State'

            },
            city_id: {

                required: 'Please Select City'

            },
            office_name: {

                required: 'Please Enter Branch Name', minlength: 'please enter more word', maxlength: 'length is exceed'

            },
            contact_number1: {

                required: 'Please Enter Contact Number', minlength: 'please enter valid Number',number:"please provide numbers only" 

            },
            pincode: {

                required: 'Please Enter Pincode', minlength: 'please enter valid Pincode', 

            },
            email_id: {

                required: 'Please Enter Email id', minlength: 'please enter more word',maxlength: 'length is exceed' 

            }

            

        }

    });

});



