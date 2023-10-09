function setIconList(list) {

    $('#iconTable').dataTable().fnDestroy();
    $('#iconList').empty();
    var tblData = '';
    
    for (let k of list.keys()) {
        
        let icon = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>${icon.id}</td>
                        <td>${icon.icon_title}</td>
                        <td><span><i class="${icon.icon}" aria-hidden="true" style="font-size:20px;"></i></span></td>
                        <td> <a href="#" onclick="updateIconDetails(${icon.id})" title="Update Icon" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#iconList').html(tblData);
    $('#iconTable').DataTable();
}

setIconList(iconList);