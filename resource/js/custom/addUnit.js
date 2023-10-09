$('#addUnitForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addUnitForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'unit_api',

            type: 'POST',

            headers: {
                "Authorization": etoken
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#addUnitModal').modal('toggle');

                    let id=response.data.id;
                  
                 
                 unitList.set(id, response.data);
                 setUnitList(unitList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addUnitBtn').click(function () {
    $('#addUnitModal').modal('toggle');
    $("#addUnitForm").trigger("reset");
    $('#id').val('');
    $('#unit').val('');
    $('.error').text('');
});