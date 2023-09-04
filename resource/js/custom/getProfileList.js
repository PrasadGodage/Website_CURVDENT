
    let profileList = new Map();

    function getProfileList() {
        $.ajax({

            url: base_url+'profile',

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
                            profileList.set(response.data[i].profile_id, response.data[i]);
                        }
                        
                    }

                }

            }

        });
    }
    getProfileList();


    


    