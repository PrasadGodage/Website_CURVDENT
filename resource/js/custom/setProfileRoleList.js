function setProfileRoleList(list) {
        
    var data = '';
    
    data +=`<div class="row">`;
    for (let k of list.keys()) {
        
        let role = list.get(k);
        
        
        data += `<div class="col-md-3 p-10">
        
        <a href="#" id="ctrl_`+role.ppermission_id+`" onclick="deleteProfileRole(`+role.ppermission_id+`)" title="Delete Tab" >`+role.role+`&nbsp;&nbsp;<i class="fa fa-trash text-danger"></i></a>
        </div>`;

       
       
    }
    data +=`</div>`;
    
$('#profileRoleListId').html(data);    

}

