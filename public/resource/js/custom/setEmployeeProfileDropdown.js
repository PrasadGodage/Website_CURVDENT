
$("#role_id").change(function() {
    var roleid=this.value;
    $('#profile_id').html('');
    $.ajax({

        url: base_url+'super/profileByRole/'+roleid,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        
         
            if (response.status == 200) {
                let option='<option value="" disabled selected hidden>Please Choose...</option>';
                       
                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        if(response.data[i].is_active==1){
                        option +=`<option value="${response.data[i].profile_id}">${response.data[i].profile}</option>`;
                     }
                    }
                    
                }
                $('#profile_id').html(option);
                
                $('#profile_id').prop('disabled',false);
                

            }

        }

    });
});