$('#addFlavourForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addFlavourForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'flavour_api',

            type: 'POST',

            headers: {
                "Authorization": etoken
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#addFlavourModal').modal('toggle');

                    let id=response.data.id;
                  
                 
                 flavourList.set(id, response.data);
                 setFlavourList(flavourList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addFlavourBtn').click(function () {
    $('#addFlavourModal').modal('toggle');
    $("#addFlavourForm").trigger("reset");
    $('#id').val('');
    $('#flavour').val('');
    $('.error').text('');
});