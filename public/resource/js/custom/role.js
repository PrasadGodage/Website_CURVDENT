
let roleList = new Map();


function getRoleList() {
    $.ajax({

        url: base_url+'super/role',

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
                        roleList.set(response.data[i].id, response.data[i]);
                    }
                    setRoleList(roleList);
                }

            }

        }

    });
}
getRoleList();

function setRoleList(list) {
    
    $('#roleTable').dataTable().fnDestroy();
    $('#roleList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let role = list.get(k);
        
               tblData += `
                <tr>
                        <td>` + role.id + `</td>
                        <td>` + role.role + `</td>
                        <td> <a href="#" onclick="updateTabDetails(` + role.id + `)" title="Update Tab" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#roleList').html(tblData);
    $('#roleTable').DataTable();
}


$('#addRoleForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addRoleForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'super/role',

            type: 'POST',

            headers: {
                "Authorization": token
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#addRoleModal').modal('toggle');
                   
                let id=response.data.id;
                  
                 if(roleList.has(id)){
                    roleList.delete(id);   
                 }
                 roleList.set(id, response.data);
                 setRoleList(roleList);
                 swal("Good job!", response.message, "success");
                 setTimeout(
                    $(location).attr('href',base_url+'super/superRole'),
                     8000
                     )
                 
                } else {

                    swal("Good job!", response.message, "error");

                }

            }

        });
    }
});



$('#addRoleBtn').click(function () {
    $('#addRoleModal').modal('toggle');
    $("#addRoleForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    // setIconDropdown(iconList);
    // $("#iconMirror").removeAttr('class');
    // $('#is_subtab').prop('checked',false);
});



function updateTabDetails(id) {
    let role = roleList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#role').val('');
    $('.error').text('');
    //set details
    $('#id').val(role.id);
    $('#role').val(role.role);
    $('#addRoleModal').modal('toggle');
}



//import activityValidation script
var activityValidation = document.createElement('script');
activityValidation.src = base_url + 'resource/js/custom/activityValidation.js';
activityValidation.setAttribute("type", "text/javascript");
document.head.appendChild(activityValidation);