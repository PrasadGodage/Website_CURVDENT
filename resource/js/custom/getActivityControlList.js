
    let activityControlList = new Map();

    function getActivityControlList(id) {
        activityControlList.clear();
        $.ajax({

            url: base_url+'activityControl/'+id,

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
                            activityControlList.set(response.data[i].id, response.data[i]);
                        }
                        
                    }

                }

            }

        });
    }
    


    


    