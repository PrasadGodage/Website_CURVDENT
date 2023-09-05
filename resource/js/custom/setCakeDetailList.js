function setCakeDetailList(list) {

    $('#cakedetailTable').dataTable().fnDestroy();
    $('#cakedetailList').empty();
    var tblData = '', badge, status;
    
    for (let cd of list.keys()) {
        
        let cakedetail = list.get(cd);
        
        

        tblData += `
                <tr>
                        <td>` + cakedetail.id + `</td>
                        <td>` + cakedetail.title + `</td>
                        <td>` + cakedetail.flavour + `</td>
                        <td>` + cakedetail.unit + `</td>
                        <td>` + cakedetail.price + `</td>
                        <td> <a href="#" onclick="updateCakeMappingDetails(` + cakedetail.id + `)" title="Update Cake Detail" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> &nbsp;&nbsp;
                        <a href="#" onclick="uploadCakeImages(`+cakedetail.id+ `)" title="Upload Cake Image" ><i class="fa fa-upload" style="font-size: 20px;"></i></a>
                        </td>
                </tr>
                `;
    }
    
    $('#cakedetailList').html(tblData);
    $('#cakedetailTable').DataTable();
}

