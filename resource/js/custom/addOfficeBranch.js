$('#addOfficeBranchForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addOfficeBranchForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'officeBranch',

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
                    $('#addOfficeBranchModal').modal('toggle');
                    swal("Good job!", response.msg, "success");

                    let id=response.data.id;
                  
                
                 officeBranchList.set(id, response.data);
                 
                    setOfficeBranchList(officeBranchList);

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addOfficeBranchBtn').click(function () {
    $('#addOfficeBranchModal').modal('toggle');
    $("#addOfficeBranchForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});