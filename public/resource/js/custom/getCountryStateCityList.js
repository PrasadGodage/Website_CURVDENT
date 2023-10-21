
    let countryStateCityList = new Map();

    function getcountryStateCityList() {
        countryStateCityList.clear();
        $.ajax({

            url: base_url+'city/'+countryid,

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
                            countryStateCityList.set(response.data[i].id, response.data[i]);
                        }
                        setCountryStateCityList(countryStateList);
                    }
                    
                }

            }

        });
    }
    getcountryStateCityList();


    


    