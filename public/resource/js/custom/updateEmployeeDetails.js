function updateEmployeeDetails(employeeid){
    let employee = employeeList.get(employeeid.toString());

    // console.log(base_url + employee.profile_image);
    // console.log(base_url);
    $('#otherdpre').attr('src',base_url+'resource/images/avatar-custom.png');
    // (employee.profile_image != null) ? $('#otherdpre').attr('src', base_url + employee.profile_image) : '';
    (employee.profile_image != null) ? $('#otherdpre').attr('src', base_url + employee.profile_image.replace(/\\/g, '/')) : '';
    $('#addEmployeeModal').modal('toggle');
    $("#addEmployeeForm").trigger("reset");
    $('#office_branch_id').val(employee.office_branch_id).change();
    $('#role_id').val(employee.role_id).change();
    $('#profile_id').val(employee.profile_id).change();
    $('#country_id').val(employee.country_id).change();
    $('#state_id').val(employee.state_id).change();
    $('#city_id').val(employee.city_id).change();
    $('#name').val(employee.name);
    $('#age').val(employee.age);
    $('#gender').val(employee.gender).change();
    $('#aadhar_no').val(employee.aadhar_no);
    $('#pancard').val(employee.pancard);
    $('#password').val(employee.password);
    $('#contact_number1').val(employee.contact_number1);
    $('#contact_number2').val(employee.contact_number2);
    $('#email_id').val(employee.email_id);
    $('#address').val(employee.address);
    $('#pincode').val(employee.pincode);
    $('#dob').val(employee.dob);
    $('#id').val(employeeid);
    $('.error').text('');
   
    if(employee.is_active==0){
        $("#active").prop("checked", false);
        $("#inactive").prop("checked", true);
    }
    if(employee.is_verified==1){
        $("#is_verified").prop("checked", true);
    }
     //$("#passwordData").hide();
}





