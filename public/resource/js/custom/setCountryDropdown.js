function setCountryDropdown(list) {

    var options = '';
    
    for (let k of list.keys()) {
        
        let country = list.get(k);
        
          options+=`<option value="`+country.id+`">`+country.country+`</option>`;
        
        
      }
        
    
    $('#country_id').html(options);
    
}

setCountryDropdown(countryList);