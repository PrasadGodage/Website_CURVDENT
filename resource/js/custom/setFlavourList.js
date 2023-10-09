function setFlavourList(list) {

    $('#flavourTable').dataTable().fnDestroy();
    $('#flavourList').empty();
    var tblData = '', badge, status;
    
    for (let f of list.keys()) {
        
        let flavour = list.get(f);
        
        

        tblData += `
                <tr>
                        <td>` + flavour.id + `</td>
                        <td>` + flavour.flavour + `</td>
                        <td> <a href="#" onclick="updateFlavourDetails(` + flavour.id + `)" title="Update flavour" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#flavourList').html(tblData);
    $('#flavourTable').DataTable();
}

