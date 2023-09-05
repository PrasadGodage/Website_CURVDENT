function setEmployeeList(list) {

    $('#employeeTable').dataTable().fnDestroy();
    $('#employeeList').empty();
    var tblData = '', badge, status,verify;
    var image = '';
    for (let k of list.keys()) {
        
        let employee = list.get(k);
        switch (employee.is_active) {
            case '1':
                status = '<span class="badge badge-pill badge-success">Active</span>';
                break;

            case '0':
                status = '<span class="badge badge-pill badge-danger">Inactive</span>';
                break;

        }

        switch (employee.is_verified) {
            case '1':
                verify = '<span class="badge badge-pill badge-success "><i class="glyphicon glyphicon-ok"></i></span>';
                break;

            case '0':
                verify = '<span class="badge badge-pill badge-danger "><i class="glyphicon glyphicon-remove"></i></span>';
                break;

        }
        (employee.profile_image != null) ? (image = base_url + employee.profile_image) : (image = base_url + 'resource/images/avatar-custom.png');
        

        tblData += `
                <tr>
                        <td>${employee.id}</td>
                        <td>
                        <a class="avatar avatar-lg ` + ((employee.is_active == 1) ? `status-success` : `status-danger`) + `" href="#">
                                                        <img src="${image}" alt="` + employee.name + `">
                                                    </a>
                        </td>
                        
                        <td>${employee.office_name}<br>(${employee.role})</td>
                        <td width="80%">
                        
                        <div class="media align-items-center">


                                                    
                                                    <div class="media-body">
                                                        <p>
                                                            <a href="#"><strong class="h6">${employee.name}</strong></a>
                                                            <span class="badge badge-pill badge-info"><strong class="">Userid:-</strong>${employee.userid}</span>
                                                        </p>
                                                        
                                                        <p><strong class="">Address:-</strong>${employee.address}</p>
                                                        <p><strong class="">Country:-</strong>${employee.country} <strong class="">State:-</strong>${employee.state} <strong class="">City:-</strong>${employee.city}</p>
                                                        <p><strong class="">Contact No.1:-</strong> ${employee.contact_number1} | <strong>Contact No.2:-</strong>${employee.contact_number2}</p>
                                                        <p> <strong class="">Email:</strong>${employee.email_id}</p>
                                                        <p> <strong class="">Status:</strong>${status}&nbsp;&nbsp;<strong class="">Document Verified:</strong>${verify}</p>
                                                  </div>
                        
                        </td>
                        <td width="20%">${employee.created_at}</td>
                        <td> <a href="#" onclick="updateEmployeeDetails(${employee.id})" title="Update Employee" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                        
                        </td>
                </tr>
                `;
    }
    
    $('#employeeList').html(tblData);
    $('#employeeTable').DataTable();
}

