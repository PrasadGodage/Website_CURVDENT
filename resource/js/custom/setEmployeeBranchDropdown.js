function setEmployeeBranchDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
        
    for (let k of list.keys()) {
        
        let branch = list.get(k);
        
          options+=`<option value="`+branch.id+`">`+branch.office_name+`</option>`;
        
        
      }
        
    
    $('#office_branch_id').html(options);
    
}

