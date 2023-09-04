let countryList = new Map();

function getEmployeeCountryList() {
    $.ajax({

        url: base_url+'country',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        countryList.set(response.data[i].id, response.data[i]);
                    }
                    setEmployeeCountryDropdown(countryList);
                }

            }

        }

    });
}






