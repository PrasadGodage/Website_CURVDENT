let activityList = new Map();

function getActivityList() {
    $.ajax({

        url: base_url+'activity',

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
                        activityList.set(response.data[i].activity_id, response.data[i]);
                    }
                    
                }

            }

        }

    });
}
getActivityList();





