function setTabActivityList(list) {

    var options = '';
    
    for (let k of list.keys()) {
        
        let tab = list.get(k);
        if(tab.is_active==1){
          options+=`<option value="`+tab.id+`">`+tab.tab_name+`</option>`;
        }
        
      }
        
    
    $('#tab_id').html(options);
    
}

