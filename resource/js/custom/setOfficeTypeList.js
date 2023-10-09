function setOfficeTypeList(list) {

    $('#officeTypeTable').dataTable().fnDestroy();
    $('#officeTypeList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let offType = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>` + offType.id + `</td>
                        <td>` + offType.type + `</td>
                        <td> <a href="#" onclick="updateOfficeTypeDetails(` + offType.id + `)" title="Update Office Type" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#officeTypeList').html(tblData);
    $('#officeTypeTable').DataTable();
}

