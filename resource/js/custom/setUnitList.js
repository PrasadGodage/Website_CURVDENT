function setUnitList(list) {

    $('#unitTable').dataTable().fnDestroy();
    $('#unitList').empty();
    var tblData = '', badge, status;
    
    for (let u of list.keys()) {
        
        let unit = list.get(u);
        
        

        tblData += `
                <tr>
                        <td>` + unit.id + `</td>
                        <td>` + unit.unit + `</td>
                        <td> <a href="#" onclick="updateUnitDetails(` + unit.id + `)" title="Update Unit" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#unitList').html(tblData);
    $('#unitTable').DataTable();
}

