$('#loginForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#loginForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: 'superUserLogin',

            type: 'POST',

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    swal("Good job!", response.msg, "success");
                    sessionStorage.setItem("url", response.url);
                    sessionStorage.setItem("type", response.type);
                    sessionStorage.setItem("token", response.token);

                 window.location.replace("superDashboard");
                 
                } else if(response.status == 400){

                    swal("Login Error!", response.msg, "error");

                }

            }

        });
    }
});
