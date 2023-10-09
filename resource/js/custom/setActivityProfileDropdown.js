function setActivityProfileDropdown(list) {

    var options = '';
    
    for (let k of list.keys()) {
        
        let activity = list.get(k);
        if(activity.actIsActive==1){
          options+=`<option value="`+activity.activity_id+`">`+activity.activity_title+`</option>`;
        }
        
      }
        
    
    $('#activity_id').html(options);
    
}

setActivityProfileDropdown(activityList);