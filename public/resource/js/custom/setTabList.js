function setTabList(list) {
    
    $('#tabTable').dataTable().fnDestroy();
    $('#tabList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let tab = list.get(k);
        
        switch (tab.is_active) {
            case '1':
                status = '<span class="badge badge-pill badge-success">Active</span>';
                break;

            case '0':
                status = '<span class="badge badge-pill badge-danger">Inactive</span>';
                break;

        }

        tblData += `
                <tr>
                        <td>` + tab.id + `</td>
                        <td>` + tab.tab_name + `</td>
                        <td><i class="${tab.icon}" aria-hidden="true" style="font-size:20px;"></i></td>
                        <td>` + status + `</td>
                        <td> <a href="#" onclick="updateTabDetails(` + tab.id + `)" title="Update Tab" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#tabList').html(tblData);
    $('#tabTable').DataTable();
}

