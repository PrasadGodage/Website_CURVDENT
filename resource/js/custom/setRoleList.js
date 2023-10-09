function setRoleList(list) {

    $('#roleTable').dataTable().fnDestroy();
    $('#roleList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let role = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>` + role.id + `</td>
                        <td>` + role.role + `</td>
                        <td> <a href="#" onclick="updateRoleDetails(` + role.id + `)" title="Update Role" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#roleList').html(tblData);
    $('#roleTable').DataTable();
}

