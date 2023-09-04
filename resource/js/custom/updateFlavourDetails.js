function updateFlavourDetails(id) {
    let flavour = flavourList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#flavour').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(flavour.id);
    $('#flavour').val(flavour.flavour);
    $('#addFlavourModal').modal('toggle');
}