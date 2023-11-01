$('#addEmployeeForm').on('submit', function (e) {

    e.preventDefault();
    var createdBy;
    if(type=='employee'){
        createdBy=empdetails.id;
    }else if(type=='master'){
        createdBy=1;
    }
    var returnVal = $("#addEmployeeForm").valid();
    var formdata = new FormData(this);
    formdata.append("created_by",createdBy);
    if (returnVal) {
        $.ajax({

            url: base_url+'super/employee',

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
                    $('#addEmployeeModal').modal('toggle');
                    
                    let id=response.data.id;
                    
                    if(employeeList.has(id)){
                        
                        employeeList.delete(id); 
                        
                    }
                    employeeList.set(id, response.data);
                    
                    setEmployeeList(employeeList);
                    swal("Good job!", response.message, "success");
                    setTimeout(
                        $(location).attr('href',base_url+'super/superEmployee'),
                         8000
                        )
                        
                    } else {
                        
                        swal("Good job!", response.message, "error");
                        setTimeout(
                            $(location).attr('href',base_url+'super/superEmployee'),
                             8000
                            )

                }

            }

        });
    }
});


$('#addEmployeeBtn').click(function () {
    $('#addEmployeeModal').modal('toggle');
    $("#addEmployeeForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    $('#profile_id').prop('disabled',true);
    $("#passwordData").show();
    $('#otherdpre').attr('src','');
    $('#otherdpre').attr('src',base_url+'resource/images/avatar-custom.png');
    setEmployeeCountryDropdown(countryList);
    $('#state_id').html('');
    $('#city_id').html('');
    
});