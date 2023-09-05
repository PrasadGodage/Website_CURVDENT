let clientList = new Map();

function getClientList() {
    $.ajax({

        url: ebase_url+'getClient_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        clientList.set(response.data[i].id, response.data[i]);
                    }
                    setClientList(clientList);
                }

            }

        }

    });
}
getClientList();





