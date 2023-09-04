function setRoleProfileDropdown(list) {

    var options = '';
    
    for (let k of list.keys()) {
        
        let role = list.get(k);
        
          options+=`<option value="`+role.id+`">`+role.role+`</option>`;
        
        
      }
        
    
    $('#role_id1').html(options);
    
}

setRoleProfileDropdown(roleList);