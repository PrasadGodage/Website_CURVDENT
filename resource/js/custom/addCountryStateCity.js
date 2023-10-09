$('#addCityForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addCityForm").valid();
    var formdata = new FormData(this);
    formdata.append("country_id",countryid)
    if (returnVal) {
        $.ajax({

            url: base_url+'city',

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
                    $('#addCityModal').modal('toggle');
                    swal("Good job!", response.msg, "success");

                   
                        getcountryStateCityList()
                        setCountryStateCityList(countryStateList); 
                   
                 

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addCityBtn').click(function () {
    $('#addCityModal').modal('toggle');
    $("#addCityForm").trigger("reset");
    $('#city_id').val('');
    $('.error').text('');
    setCountryStateDropdown(countryStateList);
});