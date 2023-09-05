function updateCountryInformation(id){

let country = countryData.get(id);

$('#countryInfo').html(country.country);
}



$('#editCountryBtn').click(function () {
    let country = countryData.get(countryid);
    $('#addCountryModal').modal('toggle');
    $("#addCountryForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    //set details
    $('#id').val(countryid);
    $('#country').val(country.country);
    
});