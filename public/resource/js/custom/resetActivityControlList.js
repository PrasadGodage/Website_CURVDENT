


function resetActivityControlList(){
    let activityId=$('#activity_id').val();
    getActivityControlList(activityId);    
    setActivityControlList(activityControlList);
    $('#control_name').val('');
}