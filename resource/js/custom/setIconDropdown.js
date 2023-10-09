function setIconDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let icon = list.get(k);
        
          options+=`<option value="${icon.id}">${icon.icon_title}</option>`;
        
        
      }
        
    
    $('#icon_id').html(options);
    
}

setIconDropdown(iconList);


$('#icon_id').change(function(){
    let icon = iconList.get(this.value);
    $("#iconMirror").removeAttr('class');
    $('#iconMirror').addClass(icon.icon);
});