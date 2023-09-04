function setProfileActivityControlPermission(){
    for (let k of profileActPermission.keys()) {
        
        let permission = profileActPermission.get(k);

        if (permission.permission==1){
            $('#md_checkbox_'+permission.aac_id).prop('checked', true);
        }
        
    }
}

