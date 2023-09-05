function showOrderDetails(id) {
    let order = orderList.get(id.toString());
    let orderData='';
    orderData+=`
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
          `;
          order.orderDetails.forEach(detail => {
           // console.log(detail)
           orderData+=`<tr>
            <td>
            
                    <img src="${detail.img}" alt="" class="img-thumbnail" width="50px" height="50px">

                
                    <span>${detail.cakecat}-${detail.flavour}</span>
                    
        
            </td>
            <td>
                                
                       <span>Qty.${detail.qty}</span>
                  
            </td>
            <td><span>Rs.`+(detail.price)+`</span></td>
            <td><span>Rs.`+(detail.qty*detail.price)+`</span></td>
            
        </tr>`;
          });

          orderData +=`
        </tbody>
    </table>
`;

    $('#orderDetailList').html(orderData);
    $('#orderDetailModal').modal('toggle');
}