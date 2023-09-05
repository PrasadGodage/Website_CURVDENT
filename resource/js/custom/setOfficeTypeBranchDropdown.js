

function setOfficeTypeBranchDropdownField(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let type = list.get(k);
        
          options+=`<option value="`+type.id+`">`+type.type+`</option>`;
        
        
      }
        
    
    $('#office_type_id').html(options);
    
}

//setOfficeTypeBranchDropdown(officeTypeList);