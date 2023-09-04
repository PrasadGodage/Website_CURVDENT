function deleteProfileTab(profiletabid){
    swal({
        title: "Are you sure ??",
        text: "You want to delete this Tab", 
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
         deleteTab(profiletabid);
        
      } else {
        
      }
    });

    
}

function deleteTab(id){
    
    $.ajax({

        url: base_url+'deleteProfileTab/'+id,

        type: 'GET',

        async: false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
            if (response.status == 200) {
                
                
                
                getProfileTabList();
        swal(response.msg, {
            icon: "success",
          });
       
            } else {

                swal(response.msg, {
                    icon: "error",
                  });

            }

        }

    });
    
    
}