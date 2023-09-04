function updateCountryDetails(id) {
    let country = countryList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#country').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(country.id);
    $('#country').val(country.country);
    $('#addCountryModal').modal('toggle');
}