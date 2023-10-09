function updateActivityDetails(id) {
    let activity = activityList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#activity_title').val('');
    $('#url').val('');
    $("#active").attr('checked', false) ;
     $("#inactive").attr('checked',false);
    $('.error').text('');
    //set details
    $('#id').val(activity.activity_id);
    $('#tab_id').val(activity.tab_id);
    $('#activity_title').val(activity.activity_title);
    $('#url').val(activity.url);
    $('#icon_id').val(activity.icon_id).change();
    (activity.actIsActive == 1) ? $("#active").attr('checked', 'checked') : $("#inactive").attr('checked', 'checked');
    $('#addActivityModal').modal('toggle');
}