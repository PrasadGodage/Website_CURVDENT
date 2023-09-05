function setEmployeeRoleDropdown(list) {
    
    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let role = list.get(k);
        if(type=='master'){
          options+=`<option value="`+role.id+`">`+role.role+`</option>`;
        }else if(type=='employee'){
          for(let temp of rolePermission){
            if(temp.role_id==role.id){
              options+=`<option value="`+role.id+`">`+role.role+`</option>`;
              break;
            }
          }
        }
        
        
        
      }
        
    
    $('#role_id').html(options);
    
}

