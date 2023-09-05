
function setActivityList(list) {
    
    $('#activityTable').dataTable().fnDestroy();
    $('#activityList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let activity = list.get(k);
        
        switch (activity.actIsActive) {
            case '1':
                status = '<span class="badge badge-pill badge-success">Active</span>';
                break;

            case '0':
                status = '<span class="badge badge-pill badge-danger">Inactive</span>';
                break;

        }

        tblData += `
                <tr>
                        <td>` + activity.activity_id + `</td>
                        <td>` + activity.tab_name + `</td>
                        <td>` + activity.activity_title + `</td>
                        <td>` + activity.url + `</td>
                        <td><i class="${activity.icon}" aria-hidden="true" style="font-size:20px;"></i></td>
                        <td>` + status + `</td>
                        <td> <a href="#" onclick="updateActivityDetails(` + activity.activity_id + `)" title="Update Activity" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                        <a href="#" onclick="activityControls(` + activity.activity_id + `)" title="Show Access" ><i class="fa fa-user-secret" style="font-size: 20px;"></i></a>
                        </td>
                        
                </tr>
                `;
    }
    
    $('#activityList').html(tblData);
    $('#activityTable').DataTable();
}

