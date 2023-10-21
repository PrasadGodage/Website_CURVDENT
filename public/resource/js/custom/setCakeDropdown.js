function setCakeDropdown() {
    $.ajax({

        url: ebase_url+'cake_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {
               var option='<option selected disabled required>Select cake</option>';
                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        option +=`<option value="${response.data[i].id}">${response.data[i].title}</option>`;
                    }
                    $('#cake_id').html(option);
                }


            }

        }

    });
}





