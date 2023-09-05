
    let profileRoleList = new Map();

    function getProfileRoleList() {
        profileTabList.clear();
        $.ajax({

            url: base_url+'profileRole/'+profileid,

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
                            profileRoleList.set(response.data[i].ppermission_id, response.data[i]);
                        }
                        setProfileRoleList(profileRoleList);
                    }
                    
                }

            }

        });
    }
    getProfileRoleList();


    


    