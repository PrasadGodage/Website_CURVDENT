function updateTabDetails(id) {
    let tab = tabList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#tab_name').val('');
    $("#active").attr('checked', false) ;
     $("#inactive").attr('checked',false);
    $('.error').text('');
    //set details
    $('#id').val(tab.id);
    $('#tab_name').val(tab.tab_name);
    
    (tab.is_active == 1) ? $("#active").attr('checked', 'checked') : $("#inactive").attr('checked', 'checked');
    (tab.is_subtab == 1) ? $("#is_subtab").attr('checked', true) : $("#is_subtab").attr('checked', false);
    $('#icon_id').val(tab.icon_id).change();
    $('#addTabModal').modal('toggle');
}