
    let countryStateList = new Map();

    function getcountryStateList() {
        countryStateList.clear();
        $.ajax({

            url: base_url+'state/'+countryid,

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
                            countryStateList.set(response.data[i].id, response.data[i]);
                        }
                        //console.log(countryStateList);
                        setCountryStateList(countryStateList);
                    }
                    
                }

            }

        });
    }
    getcountryStateList();


    


    