function setHeadOfDeptDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
        options += '<option value="0">Self</option>';
    for (let k of list.keys()) {
        
        let hod = list.get(k);
        
          options+=`<option value="`+hod.id+`">`+hod.office_name+`</option>`;
        
        
      }
        
    
    $('#hod_id').html(options);
    
}

