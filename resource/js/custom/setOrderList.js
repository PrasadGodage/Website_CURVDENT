function setOrderList(list) {

    $('#orderTable').dataTable().fnDestroy();
    $('#orderList').empty();
    var tblData = '', badge, status;
    
    for (let orderid of list.keys()) {
        
        let order = list.get(orderid);
        
        

        tblData += `
                <tr>
                        <td>#0171-${order.id}</td>
                        <td><a href="#" onclick="showClientDetail2('${order.clientid}');">${order.clientName}</a></td>
                        <td>${order.totalItem}</td>
                        <td>${order.totalCost}</td>
                        <td>${order.status}</td>
                        <td>${order.remark}</td>
                        <td>${order.createdAt}</td>
                        <td>
                         <a href="#" onclick="showOrderDetails(` + order.id + `)" title="show Order Detail" ><i class="fa fa-bandcamp" style="font-size: 20px;"></i></a>`;
                         if(order.status !='Order Rejected'){
                        tblData += ` &nbsp;&nbsp;&nbsp;&nbsp;<a href="#" onclick="adminChangeStatus2(` + order.id + `)" title="Change Status" ><i class="fa fa-superpowers" style="font-size: 20px;"></i></a>`;
                         }
                        tblData += ` </td>
                </tr>
                `;
            
    }
    
    $('#orderList').html(tblData);
    $('#orderTable').DataTable();
}

