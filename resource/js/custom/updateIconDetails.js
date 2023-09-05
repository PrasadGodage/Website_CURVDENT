function updateIconDetails(id) {
    let icon = iconList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#icon_title').val('');
    $('#icon').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(icon.id);
    $('#icon_title').val(icon.icon_title);
    $('#icon').val(icon.icon);
    $("#iconMirror").addClass(icon.icon);
    $('#addIconModal').modal('toggle');
}