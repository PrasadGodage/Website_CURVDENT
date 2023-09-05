function setClientList(list) {

    $('#clientTable').dataTable().fnDestroy();
    $('#clientList').empty();
    var tblData = '', badge, status;
    
    for (let clientid of list.keys()) {
        
        let client = list.get(clientid);
        
        

        tblData += `
                <tr>
                        <td>${client.id}</td>
                        <td>${client.firstName} ${client.lastName}</td>
                        <td>${client.emailid}</td>
                        <td>${client.phone}</td>
                        <td>${client.address1}</td>
                        <td>${client.address2}</td>
                        <td>${client.city}</td>
                        <td>${client.state}</td>
                        <td>${client.country}-${client.postcode}</td>
                        
                </tr>
                `;
            
    }
    
    $('#clientList').html(tblData);
    $('#clientTable').DataTable();
}

