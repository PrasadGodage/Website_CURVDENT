$('#addStateForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addStateForm").valid();
    var formdata = new FormData(this);
    formdata.append("country_id",countryid);
    if (returnVal) {
        $.ajax({

            url: base_url+'state',

            type: 'POST',

            headers: {
                "Authorization": token
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#addStateModal').modal('toggle');
                    swal("Good job!", response.msg, "success");

                   
                   let id=response.data.id;
                  
                    
                    countryStateList.set(id, response.data);
                    
                    setCountryStateList(countryStateList);
                    setCountryStateCityList(countryStateList);

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addStateBtn').click(function () {
    $('#addStateModal').modal('toggle');
    $("#addStateForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
   
});