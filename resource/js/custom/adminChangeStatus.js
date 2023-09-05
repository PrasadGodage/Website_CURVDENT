
const adminChangeStatus2=(orderid)=> {

    $('#orderIdStatus').val(orderid);
    $('#adminStausModal').modal('toggle');
}



$('#adminChangeStatusForm').on('submit', function (e) {

    e.preventDefault();

    var formdata = new FormData(this);
    
        $.ajax({

            url: ebase_url+'updateAdminStatus_api',

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
                    
                    swal("Good job!", response.msg, "success");
                    location.reload();

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    
});
