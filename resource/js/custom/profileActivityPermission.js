function profileActivityPermission(activityId){
    $('#activityId').val(activityId);
    getActivityControlList(activityId);
    
    var data = '';
    
    data +=`<div class="row">`;
    for (let k of activityControlList.keys()) {
        
        let activity = activityControlList.get(k);
        
        
        data += `<div class="col-md-3">
        <input type="checkbox" id="md_checkbox_`+activity.id+`" class="filled-in chk-col-green">
        <label for="md_checkbox_`+activity.id+`">`+activity.control_name+`</label>
        </div>
        `;
    }
     data +=`</div>`;
    $('#activityControlChkList').html(data);
    getProfileActivityControlPermission();
    setProfileActivityControlPermission();
    $('#profileActivityPermissionModal').modal('toggle');
}