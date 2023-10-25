
    function setProfileData() {
        $.ajax({

            url: base_url+'super/profile/'+profileid,

            type: 'GET',

            async:false,

            headers: {
                "Authorization": token
            },

            dataType: 'json',

            success: function (response) {
            

                if (response.status == 200) {
                    
                    switch (response.data.is_active) {
                        case '1':
                            
                            $("#statusInfo").removeClass("badge badge-pill badge-danger");
                            $("#statusInfo").addClass("badge badge-pill badge-success");
                            $("#statusInfo").html('Active');
                            break;
            
                        case '0':
                            $("#statusInfo").removeClass("badge badge-pill badge-success");
                            $("#statusInfo").addClass("badge badge-pill badge-danger");
                            $("#statusInfo").html('Inactive');
                            break;
            
                    }
                    $('#roleInfo').html(response.data.role);
                    $('#profileInfo').html(response.data.profile);
                    
                    profileData.set(response.data.profile_id, response.data);
                    

                }

            }

        });
    }
    setProfileData();

    


    



