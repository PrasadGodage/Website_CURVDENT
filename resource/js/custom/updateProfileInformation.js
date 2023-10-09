
function updateProfileInformation(id){
let profile = profileData.get(id);

$('#roleInfo').html(profile.role);
$('#profileInfo').html(profile.profile);

if(profile.is_active=="1"){
    $("#statusInfo").removeClass("badge badge-pill badge-danger");
    $("#statusInfo").addClass("badge badge-pill badge-success");
    $('#statusInfo').html("Active");
}else{
    $("#statusInfo").addClass("badge badge-pill badge-danger");
    $('#statusInfo').html("Inactive");
}

}



$('#editProfileBtn').click(function () {
    
    let profile = profileData.get(profileid);
    
    $('#addProfileModal').modal('toggle');
    $("#addProfileForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    //
    $('#role_id').val(profile.role_id);
    $('#profile').val(profile.profile);
    $('#id').val(profile.profile_id);
    if(profile.is_active == "1") {
        $("#active").attr('checked', true);
        $("#inactive").attr('checked', false);
    }else{ 
        $("#active").attr('checked', false);
        $("#inactive").attr('checked', true);
    }
});


