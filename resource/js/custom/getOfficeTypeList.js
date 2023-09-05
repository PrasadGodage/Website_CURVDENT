let officeTypeList = new Map();

function getOfficeTypeList() {
    $.ajax({

        url: base_url+'officeType',

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
                        officeTypeList.set(response.data[i].id, response.data[i]);
                    }
                    setOfficeTypeList(officeTypeList);
                }

            }

        }

    });
}
getOfficeTypeList();





