function updateOfficeBranchDetails(id) {
    
    let branch = officeBranchList.get(id.toString());
    //clear all fields
    $("#addOfficeBranchForm").trigger("reset");
    $('.error').text('');
    //set details
    $('#id').val(id);
    $('#office_type_id').val(branch.office_type_id).change();
    $('#office_name').val(branch.office_name);
    $('#hod_id').val(branch.hod_id).change();
    $('#contact_number1').val(branch.contact_number1);
    $('#contact_number2').val(branch.contact_number2);
    $('#email_id').val(branch.email_id);
    $('#country_id').val(branch.country_id).change();
    $('#state_id').val(branch.state_id).change();
    $('#city_id').val(branch.city_id).change();
    $('#address').val(branch.address);
    $('#pincode').val(branch.pincode);
    
    $('#addOfficeBranchModal').modal('toggle');
}