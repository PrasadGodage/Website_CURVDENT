function getPermissions(activityId) {
    getActivityControlList(activityId);
    var data = [];
    var i=0;
    for (let k of activityControlList.keys()) {
        let activity = activityControlList.get(k);
        var permission=0;

        if ($('#md_checkbox_'+activity.id).is(":checked"))
            {
            // it is checked
                permission=1;
            }
        data[i++]={
            profile_id:profileid,
            aac_id:activity.id,
            activity_id:activityId,
            permission:permission
        };
    }
    return data;
}




$('#saveActivityControlPermissionbtn').click( function (e) {

    e.preventDefault();
    
    //var returnVal = $("#saveActivityControlPermissionbtn").valid();
    var activityId=$('#activityId').val();
    var permissionData=getPermissions(activityId);
    var jsonString= JSON.stringify(permissionData);
    var formdata = new FormData();
    formdata.append("activity_id",activityId);
    formdata.append("profile_id",profileid);
    formdata.append("permissionArr",jsonString);
    if (true) {
        $.ajax({

            url: base_url+'super/profileActivityPermissions',

            type: 'POST',

            headers: {
                "Authorization": token
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#profileActivityPermissionModal').modal('toggle');
                    
                    swal("Good job!", response.msg, "success");
                                     

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addProfileBtn').click(function () {
    $('#addProfileModal').modal('toggle');
    $("#addProfileForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});