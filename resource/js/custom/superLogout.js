
function superSessionLogout(){
    
    
    $.ajax({

        url: base_url+'superUserLogout',

        type: 'POST',

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

               sessionStorage.clear();
                    swal({   
                       title: "Logout!",   
                       text: response.msg,   
                       timer: 1000,   
                       showConfirmButton: false 
                   });
               
               setTimeout(function(){ window.location.replace(base_url+"superLogin"); },1500);
            }

        }

    });
}