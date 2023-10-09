$('#addProfileActivityForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addProfileTabForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'profileActivity',

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
                    $('#addProfileActivityModal').modal('toggle');
                    swal("Good job!", response.msg, "success");

                    //setTimeout(function(){ location.reload(); }, 1000);
                    getProfileActivityList();
                    setProfileActivityList(profileActivityList);

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addProfileActivityBtn').click(function () {
    $('#addProfileActivityModal').modal('toggle');
    $("#addProfileActivityForm").trigger("reset");
    $('#p_id').val(profileid);
    $('.error').text('');
});