function setProfileActivityList(list) {
        
    var data = '';
    
    data +=`<div class="row">`;
    for (let k of list.keys()) {
        
        let activity = list.get(k);
        
        
        data += `<div class="col-md-3 p-10">
        
        <a href="#" id="act_`+activity.ppermission_id+`" onclick="profileActivityPermission(`+activity.activity_id+`)" title="Activity Permission" >`+activity.activity_title+`<i class="fa fa-cogs text-success"></i></a>
        <a href="#" id="act_`+activity.ppermission_id+`" onclick="deleteProfileActivity(`+activity.activity_id+`)" title="Delete Tab" ><i class="fa fa-trash text-danger"></i></a>
        </div>`;

       
       
    }
    data +=`</div>`;
    
$('#profileActivityListId').html(data);    

}

