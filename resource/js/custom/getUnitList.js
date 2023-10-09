let unitList = new Map();

function getUnitList() {
    $.ajax({

        url: ebase_url+'unit_api',

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
                        unitList.set(response.data[i].id, response.data[i]);
                    }
                    setUnitList(unitList);
                }

            }

        }

    });
}
getUnitList();





