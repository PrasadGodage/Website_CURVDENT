function setFlavourDropdown() {
    $.ajax({

        url: ebase_url+'flavour_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {
                var option='<option selected disabled required>Select Flavour</option>';

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        option +=`<option value="${response.data[i].id}">${response.data[i].flavour}</option>`;
                    }
                    $('#flavour_id').html(option);
                }

            }

        }

    });
}





