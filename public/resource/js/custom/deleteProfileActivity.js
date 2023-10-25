function deleteProfileActivity(profileactivityid){
    swal({
        title: "Are you sure ??",
        text: "You want to delete this Activity", 
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
         deleteActivity(profileactivityid);
        
      } else {
        
      }
    });

    
}

function deleteActivity(activityid){
    
    $.ajax({

        url: base_url+'super/profileActivityDelete/'+activityid+'/'+profileid,

        type: 'GET',

        async: false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
            if (response.status == 200) {
                
                swal(response.msg, {
                    icon: "success",
                  });
                  //setTimeout(function(){ location.reload(); }, 1000);
                  getProfileActivityList();
                  setProfileActivityList(profileActivityList);
            } else {

                swal(response.msg, {
                    icon: "error",
                  });

            }

        }

    });
    
    
}