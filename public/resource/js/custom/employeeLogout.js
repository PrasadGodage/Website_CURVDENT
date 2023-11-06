function employeeLogout(){
    
    
                sessionStorage.clear();
                    swal({   
                       title: "Logout!",   
                       text: "Logout Successful!!!",   
                       timer: 1000,   
                       showConfirmButton: false 
                   });
               
               setTimeout(function(){ window.location.replace(ebase_url+'super/employeeLogin'); },1500);
           
}