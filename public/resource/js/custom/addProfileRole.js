$('#addProfileRoleForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addProfileRoleForm").valid();
    var formdata = new FormData(this);
    formdata.append("profile_id",profileid)
    if (returnVal) {
        $.ajax({

            url: base_url+'super/profileRole',

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
                    $('#addProfileRoleModal').modal('toggle');
                    swal("Good job!", response.message, "success");

                    //setTimeout(function(){ location.reload(); }, 1000);
                    getProfileRoleList();
                   setProfileRoleList(profileRoleList);

                } else {

                    swal("Good job!", response.message, "error");

                }

            }

        });
    }
});


$('#addProfileRoleBtn').click(function () {
    $('#addProfileRoleModal').modal('toggle');
    $("#addProfileRoleForm").trigger("reset");
    
});