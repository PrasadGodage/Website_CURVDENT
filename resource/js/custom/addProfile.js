$('#addProfileForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addProfileForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'profile',

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
                    $('#addProfileModal').modal('toggle');

                    let id=response.data.profile_id;
                  
                 
                 profileList.set(id, response.data);
                 setProfileList(profileList);
                 
                 
                    swal("Good job!", response.msg, "success");

                    
                 

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addProfileBtn').click(function () {
    $('#addProfileModal').modal('toggle');
    $("#addProfileForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});