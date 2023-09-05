$('#addCakeForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addCakeForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'cake_api',

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
                    $('#addCakeModal').modal('toggle');

                    let id=response.data.id;
                  
                 
                 cakeList.set(id, response.data);
                 setCakeList(cakeList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addCakeBtn').click(function () {
    $('#addCakeModal').modal('toggle');
    $("#addTabForm").trigger("reset");
    $('#id').val('');
    $('#role').val('');
    $('.error').text('');
});