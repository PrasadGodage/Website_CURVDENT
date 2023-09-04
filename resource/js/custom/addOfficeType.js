$('#addOfficeTypeForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addOfficeTypeForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'officeType',

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
                    $('#addOfficeTypeModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(officeTypeList.has(id)){
                    officeTypeList.delete(id);   
                 }
                 officeTypeList.set(id, response.data);
                 setOfficeTypeList(officeTypeList);


                    swal("Good job!", response.msg, "success");
                

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addOfficeTypeBtn').click(function () {
    $('#addOfficeTypeModal').modal('toggle');
    $("#addOfficeTypeForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});