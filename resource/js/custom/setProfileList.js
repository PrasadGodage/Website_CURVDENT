
    let profileList = new Map();

    function getProfileList() {
        $.ajax({

            url: base_url+'profile',

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
                            profileList.set(response.data[i].profile_id, response.data[i]);
                        }
                        
                    }
                    setProfileList(profileList);
                }

            }

        });
    }
    getProfileList();


    


    




function setProfileList(list) {
    
    $('#profileTable').dataTable().fnDestroy();
    $('#profileList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let profile = list.get(k);
        
        switch (profile.is_active) {
            case '1':
                status = '<span class="badge badge-pill badge-success">Active</span>';
                break;

            case '0':
                status = '<span class="badge badge-pill badge-danger">Inactive</span>';
                break;

        }

        tblData += `
                <tr>
                        <td>` + profile.profile_id + `</td>
                        <td>` + profile.role + `</td>
                        <td>` + profile.profile + `</td>
                        <td>` + status + `</td>
                        <td> <a href="`+base_url+`profileDetails/`+profile.profile_id+`" title="Update Profile" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                        
                        </td>
                        
                </tr>
                `;
    }
    
    $('#profileList').html(tblData);
    $('#profileTable').DataTable();
}

