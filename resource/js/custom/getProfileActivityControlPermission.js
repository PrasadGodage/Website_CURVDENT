    let profileActPermission = new Map();

    function getProfileActivityControlPermission() {
        profileActPermission.clear();
        $.ajax({

            url: base_url+'profileActivityPermissions/'+profileid,

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
                            profileActPermission.set(response.data[i].id, response.data[i]);
                        }
                        
                    }

                }

            }

        });
    }
    


    


    