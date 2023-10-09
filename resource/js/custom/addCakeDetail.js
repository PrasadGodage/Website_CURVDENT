$('#addCakeDetailForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addCakeDetailForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'cakemappingdetail_api',

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
                    $('#addCakeDetailModal').modal('toggle');

                    let id=response.data.id;
                  
                 
                 cakedetailList.set(id, response.data);
                 setCakeDetailList(cakedetailList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addCakeDetailBtn').click(function () {
    $('#addCakeDetailModal').modal('toggle');
    $("#addTabForm").trigger("reset");
    $('#id').val('');
    $('#price').val('');
    $('.error').text('');
    //first commit
});