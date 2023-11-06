
function superSessionLogout(){
    
    
    

               sessionStorage.clear();
                    swal({   
                       title: "Logout!",   
                       text: "Logout Successful!!!",   
                       timer: 1000,   
                       showConfirmButton: false 
                   });
               
               setTimeout(function(){ window.location.replace(base_url+"super/login"); },1500);
            

      
}