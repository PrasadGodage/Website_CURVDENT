
$("#country_id").change(function() {
    var countryid=this.value;
    $('#state_id').html('');
    $.ajax({

        url: base_url+'super/state/'+countryid,

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
                        option +=`<option value="${response.data[i].state_id}">${response.data[i].state}</option>`;
                        // console.log(response.data[i].state_id);
                     }
                    }
                    
                }
                $('#state_id').html(option);
                $('#city_id').html('');
                $('#state_id').prop('disabled',false);
                $('#city_id').prop('disabled',true);

            }

        }

    });
});