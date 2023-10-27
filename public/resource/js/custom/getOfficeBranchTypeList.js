let officeTypeList = new Map();

function getOfficeTypeList() {
    $.ajax({

        url: base_url+'super/officeType',

        type: 'GET',

        async:false,

        caches:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
                    
                    for (var i = 0; i < response.data.length; i++) {
                       
                       options+=`<option value="`+response.data[i].id+`">`+response.data[i].type+`</option>`;
                    }
                   
                   $('#office_type_id').html(options);
                }

            }

        }

    });
}


getOfficeTypeList();



