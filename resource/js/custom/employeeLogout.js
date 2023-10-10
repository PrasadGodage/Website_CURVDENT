function employeeLogout(){
    
    
    $.ajax({

        url: ebase_url+'employeeLogout',

        type: 'POST',

        async:false,

        caches:false,

        headers: {
            "Authorization": etoken
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
               
               setTimeout(function(){ window.location.replace(ebase_url+'employeeLogin'); },1500);
            }

        }

    });
}

$(window).on('unload', function() {
    // Send an AJAX request to the server to invalidate the session.
    $.ajax({

        url: ebase_url+'employeeLogout',

        type: 'POST',

        async:false,

        caches:false,

        headers: {
            "Authorization": etoken
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
               
               setTimeout(function(){ window.location.replace(ebase_url+'employeeLogin'); },1500);
            }

        }

    });
});