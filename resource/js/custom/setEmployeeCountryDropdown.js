function setEmployeeCountryDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let country = list.get(k);
        
          options+=`<option value="`+country.id+`">`+country.country+`</option>`;
        
        
      }
        
    
    $('#country_id').html(options);
    $('#state_id').prop('disabled',true);
    $('#city_id').prop('disabled',true);
}

