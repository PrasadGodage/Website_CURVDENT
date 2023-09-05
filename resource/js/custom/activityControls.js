function activityControls(id) {
    
     $('#activity_id').val(id);
     getActivityControlList(id);
     setActivityControlList(activityControlList);
    $('#activeControlModal').modal('toggle');
}