function deleteCountryState(stateid){
    swal({
        title: "Are you sure ??",
        text: "You want to delete this State", 
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
         deleteState(stateid);
        
      } else {
        
      }
    });

    
}

function deleteState(id){
    
    $.ajax({

        url: base_url+'stateDelete/'+id,

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
                  getcountryStateList();
                  setCountryStateList(countryStateList);
            } else {

                swal(response.msg, {
                    icon: "error",
                  });

            }

        }

    });
    
    
}