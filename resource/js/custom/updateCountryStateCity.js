function updateCountryStateCity(cityid){
    let city = countryStateCityList.get(cityid.toString());
    $('#addCityModal').modal('toggle');
    $("#addCityForm").trigger("reset");
    $('#citystate_id').html('');
    $('#citystate_id').html(`<option value="`+city.state_id+`">`+city.state+`</option>`);
    
    $('#city').val(city.city);
    $('#city_id').val(city.id);
    $('.error').text('');
   
    if(state.is_active==0){
    //    $("#active").prop("checked", false);
     //   $("#inactive").prop("checked", true);
    }
}

