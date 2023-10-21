function setOfficeBranchList(list) {

    $('#officeBranchTable').dataTable().fnDestroy();
    $('#officeBranchList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let branch = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>${branch.id}</td>
                        <td>${branch.type}</td>
                        <td width="100%">
                        
                        <div class="media align-items-center">


                                                    
                                                    <div class="media-body">
                                                        <p>
                                                            <a href="#"><strong class="h6">${branch.office_name}</strong></a>
                                                            
                                                        </p>
                                                        <p><strong class="">Address:-</strong>${branch.address}</p>
                                                        <p><strong class="">Country:-</strong>${branch.country} <strong class="">State:-</strong>${branch.state} <strong class="">City:-</strong>${branch.city}</p>
                                                        <p><strong class="">Contact No.1:-</strong> ${branch.contact_number1} | <strong>Contact No.2:-</strong>${branch.contact_number2}</p>
                                                        <p> <strong class="">Email:</strong>${branch.email_id}</p>
                                                  </div>
                        
                        </td>
                        <td>${branch.created_at}</td>
                        <td> <a href="#" onclick="updateOfficeBranchDetails(${branch.id})" title="Update Branch" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                        
                        </td>
                </tr>
                `;
    }
    
    $('#officeBranchList').html(tblData);
    $('#officeBranchTable').DataTable();
}

