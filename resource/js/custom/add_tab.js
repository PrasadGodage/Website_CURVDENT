
$('#addTabForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addTabForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'tab',

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
                    $('#addTabModal').modal('toggle');
                   
                let id=response.data.id;
                  
                 if(tabList.has(id)){
                    tabList.delete(id);   
                 }
                 tabList.set(id, response.data);
                 setTabList(tabList);
                 swal("Good job!", response.msg, "success");
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addTabBtn').click(function () {
    $('#addTabModal').modal('toggle');
    $("#addTabForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    setIconDropdown(iconList);
    $("#iconMirror").removeAttr('class');
    $('#is_subtab').prop('checked',false);
});