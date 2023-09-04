let iconList = new Map();

function getIconList() {
    $.ajax({

        url: base_url+'icon',

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
                        iconList.set(response.data[i].id, response.data[i]);
                    }
                    
                }

            }

        }

    });
}
getIconList();





