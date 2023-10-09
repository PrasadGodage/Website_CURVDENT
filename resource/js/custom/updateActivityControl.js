function updateActivityControl(id) {
let control=activityControlList.get(id.toString());
$('#c_name').val(control.control_name);
 $('#control_id').val(id);
    $('#editActivityControlModal').modal('toggle');
}

////////////////////////////////-------------------------------------

$('#editActivityControlForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#editActivityControlForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'updateActivityControl',

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
                    $('#editActivityControlModal').modal('toggle');
                    swal("Good job!", response.msg, "success");
                    resetActivityControlList();
                    
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



