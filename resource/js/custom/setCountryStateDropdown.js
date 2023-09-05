function setCountryStateDropdown(list) {

    var options = '';
    
    for (let k of list.keys()) {
        
        let state = list.get(k);
        if(state.is_active==1){
          options+=`<option value="`+state.id+`">`+state.state+`</option>`;
        }
        
      }
        
    
    $('#citystate_id').html(options);
    
}

setCountryStateDropdown(countryStateList);