$('#addCountryForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addCountryForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'country',

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
                    $('#addCountryModal').modal('toggle');

                    let id=response.data.id;
                  
                    if(countryList.has(id)){
                       
                        countryList.delete(id);  
                        
                    }
                    countryList.set(id, response.data);
                    
                    setCountryList(countryList);
                    
                    

                    swal("Good job!", response.msg, "success");
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addCountryBtn').click(function () {
    $('#addCountryModal').modal('toggle');
    $("#addCountryForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
   
});