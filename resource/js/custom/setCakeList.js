function setCakeList(list) {

    $('#cakeTable').dataTable().fnDestroy();
    $('#cakeList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let cake = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>` + cake.id + `</td>
                        <td>` + cake.title + `</td>
                        <td> <a href="#" onclick="updateCakeDetails(` + cake.id + `)" title="Update Cake" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#cakeList').html(tblData);
    $('#cakeTable').DataTable();
}

