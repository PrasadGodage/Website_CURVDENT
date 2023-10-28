
$("#state_id").change(function() {
    var countryid=this.value;
    $('#city_id').html('');
    $.ajax({

        url: base_url+'super/statecity/'+countryid,

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
                        option +=`<option value="${response.data[i].id}">${response.data[i].city}</option>`;
                    }
                    
                }
                $('#city_id').html(option);
                $('#city_id').prop('disabled',false);
            }

        }

    });
});