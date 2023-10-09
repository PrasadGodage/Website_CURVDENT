function updateOfficeTypeDetails(id) {
    let offType = officeTypeList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#type').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(offType.id);
    $('#type').val(offType.type);
    $('#addOfficeTypeModal').modal('toggle');
}