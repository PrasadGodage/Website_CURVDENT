let cakeList = new Map();

function getCakeList() {
    $.ajax({

        url: ebase_url+'cake_api',

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
                        cakeList.set(response.data[i].id, response.data[i]);
                    }
                    setCakeList(cakeList);
                }

            }

        }

    });
}
getCakeList();





