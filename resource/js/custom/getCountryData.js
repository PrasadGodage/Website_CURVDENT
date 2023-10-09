let countryData = new Map();

function getCountryData() {
    $.ajax({

        url: base_url+'country/'+countryid,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {
                $('#countryInfo').html(response.data.country);
            countryData.set(response.data.id, response.data);
                 
            }

        }

    });
}
getCountryData();





