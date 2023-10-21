$('#addIconForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addIconForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'icon',

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
                    $('#addIconModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(iconList.has(id)){
                    iconList.delete(id);   
                 }
                 iconList.set(id, response.data);
                 setIconList(iconList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addIconBtn').click(function () {
    $('#addIconModal').modal('toggle');
    $("#addIconForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


$('#icon').keyup(function(e) { 
   // $("#iconMirror").addClass('');
    $("#iconMirror").removeAttr('class');
    $("#iconMirror").addClass(this.value);
})