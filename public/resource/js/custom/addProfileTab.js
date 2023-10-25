$('#addProfileTabForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addProfileTabForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'super/profileTab',

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
                    $('#addProfileTabModal').modal('toggle');
                    swal("Good job!", response.msg, "success");

                    
                    getProfileTabList();

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addProfileTabBtn').click(function () {
    $('#addProfileTabModal').modal('toggle');
    $("#addProfileTabForm").trigger("reset");
    $('#id').val('');
    $('#profile_id').val(profileid);
    $('.error').text('');
});