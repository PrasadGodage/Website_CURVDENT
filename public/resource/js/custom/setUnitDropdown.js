function setUnitDropdown() {
    $.ajax({

        url: ebase_url+'unit_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {
               var option='<option selected disabled required>Select Unit</option>';
                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        option +=`<option value="${response.data[i].id}">${response.data[i].unit}</option>`;
                    }
                    $('#unit_id').html(option);
                }

            }

        }

    });
}





