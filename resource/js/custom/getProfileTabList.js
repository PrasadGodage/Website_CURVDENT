
    let profileTabList = new Map();

    function getProfileTabList() {
        profileTabList.clear();
        $.ajax({

            url: base_url+'profileTab/'+profileid,

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
                            profileTabList.set(response.data[i].ppermission_id, response.data[i]);
                        }
                        
                    }
                    
                }

            }

        });
    }
    getProfileTabList();


    


    