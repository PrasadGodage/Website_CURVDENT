function updateCountryState(stateid){
    let state = countryStateList.get(stateid.toString());
    $('#addStateModal').modal('toggle');
    $("#addStateForm").trigger("reset");
    $('#country_id').val(countryid);
    $('#state_id').val(stateid.toString());
    $('#state').val(state.state);
    $('.error').text('');
   
    if(state.is_active==0){
        $("#active").prop("checked", false);
        $("#inactive").prop("checked", true);
    }
}





