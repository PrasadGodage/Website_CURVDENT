function updateRoleDetails(id) {
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