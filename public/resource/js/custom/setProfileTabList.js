
    let profileTabList = new Map();

    function getProfileTabList() {
        // console.log(profileid);
        profileTabList.clear();
        $.ajax({

            url: base_url+'super/profileTab/'+profileid,

            type: 'GET',

            async:false,

            headers: {
                "Authorization": token
            },

            dataType: 'json',

            success: function (response) {
            

                if (response.status == 200) {
                                      
                    if (response.data.lenght != 0) {
                        for (var i = 0; i < response.data.length; i++) {
                            profileTabList.set(response.data[i].ppermission_id, response.data[i]);
                        }
                        
                        setProfileTabList(profileTabList);
                    }
                    
                }else if(response.status==404){
                    $('#profileTabListId').html('');
                }

            }

        });
    }
    getProfileTabList();


    


    



function setProfileTabList(list) {
        
    var data = '';
    
    data +=`<div class="row">`;
    for (let k of list.keys()) {
        
        let tab = list.get(k);
        
        
        data += `<div class="col-md-3 p-10">
        <i class="${tab.icon}" aria-hidden="true" style="font-size:20px;"></i>
        <a href="#" id="ctrl_`+tab.ppermission_id+`" onclick="deleteProfileTab(`+tab.ppermission_id+`)" title="Delete Tab" >`+tab.tab_name+`&nbsp;&nbsp;<i class="fa fa-trash text-danger"></i></a>
        </div>`;

       
       
    }
    data +=`</div>`;
    
$('#profileTabListId').html(data);    

}

