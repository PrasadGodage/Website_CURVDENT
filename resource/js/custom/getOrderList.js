let orderList = new Map();

function getOrderList() {
    $.ajax({

        url: ebase_url+'shoppingCard_api',

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
                        orderList.set(response.data[i].id, response.data[i]);
                    }
                    setOrderList(orderList);
                }

            }

        }

    });
}
getOrderList();





