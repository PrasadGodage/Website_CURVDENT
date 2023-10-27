
    let profileActivityList = new Map();

    function getProfileActivityList() {
        profileActivityList.clear();
        $.ajax({

            url: base_url+'super/profileActivity/'+profileid,

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
                            profileActivityList.set(response.data[i].ppermission_id, response.data[i]);
                        }
                        // console.log(profileActivityList);
                        setProfileActivityList(profileActivityList);
                    }
                    
                }

            }

        });
    }
    getProfileActivityList();


    


    