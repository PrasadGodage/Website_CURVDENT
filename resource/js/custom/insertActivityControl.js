$('#addactivityControlForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addactivityControlForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'activityControl',

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
                    
                    swal("Good job!", response.msg, "success");

                    
                 

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addActivityBtn').click(function () {
    $('#addActivityModal').modal('toggle');
    $("#addActivityForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});