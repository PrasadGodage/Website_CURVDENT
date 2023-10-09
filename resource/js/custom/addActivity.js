$('#addActivityForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addActivityForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'activity',

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
                    $('#addActivityModal').modal('toggle');
                let id=response.data.activity_id;
                  
                 
                 activityList.set(id, response.data);
                 setActivityList(activityList);
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
    setIconDropdown(iconList);
    $("#iconMirror").removeAttr('class');
});