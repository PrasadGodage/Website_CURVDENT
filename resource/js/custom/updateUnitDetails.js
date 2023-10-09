function updateUnitDetails(id) {
    let unit = unitList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#unit').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(unit.id);
    $('#unit').val(unit.unit);
    $('#addUnitModal').modal('toggle');
}