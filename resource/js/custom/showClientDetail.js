const showClientDetail2=(clientid)=>{

    $.ajax({

        url: ebase_url+'getClient_api/'+clientid,

        type: 'GET',

        headers: {
            "Authorization": etoken
        },

        
        async:false,

        dataType: 'json',

        success: function (response) {

            console.log(response);
            if (response.status == 200) {
               $('#fname').val(response.data.firstName);
               $('#lname').val(response.data.lastName);
               $('#eemail').val(response.data.emailid);
               $('#ephone').val(response.data.phone);
               $('#eaddr1').html(response.data.address1);
               $('#eaddr2').html(response.data.address2);
               $('#ecity').val(response.data.city);
               $('#estate').val(response.data.state);
               $('#ecountry').val(response.data.country);
               $('#epostalcode').val(response.data.postcode);
               $('#enote').val(response.data.orderNote);
               
                
            } else {

                

            }

        }

    });
    $('#clientDetailModal').modal('toggle');   
}