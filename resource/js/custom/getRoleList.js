    let roleList = new Map();

    function getRoleList() {
        $.ajax({

            url: base_url+'role',

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
                            roleList.set(response.data[i].id, response.data[i]);
                        }
                        setRoleList(roleList);
                    }

                }

            }

        });
    }
    getRoleList();


    


    