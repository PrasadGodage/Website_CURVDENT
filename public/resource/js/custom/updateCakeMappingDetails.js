function updateCakeMappingDetails(id) {
    let cakedetail = cakedetailList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#price').val('');
    $('#desc').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(cakedetail.id);
    $('#price').val(cakedetail.price);
    $('#cake_id').val(cakedetail.cake_id).change();
    $('#flavour_id').val(cakedetail.flavour_id).change();
    $('#unit_id').val(cakedetail.unit_id).change();
    $('#desc').val(cakedetail.description );
    $('#addCakeDetailModal').modal('toggle');
}