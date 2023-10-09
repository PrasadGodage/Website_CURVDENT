$('#addRoleForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addRoleForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'role',

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
                    $('#addRoleModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(roleList.has(id)){
                    roleList.delete(id);   
                 }
                 roleList.set(id, response.data);
                 setRoleList(roleList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addRoleBtn').click(function () {
    $('#addRoleModal').modal('toggle');
    $("#addTabForm").trigger("reset");
    $('#id').val('');
    $('#role').val('');
    $('.error').text('');
});