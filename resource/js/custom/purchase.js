let purchaseList = new Map();
let inventoryList = new Map();

//Add Purchase Btn script -----------------------------------------------------------------

$('#addPurchaseBtn').click(function () {

   $(location).attr('href',ebase_url+'addPurchase');
    
   
});

//Set PurchaseList ---------------------------------------------------
function setPurchaseList1(list) {
 
    $('#purchaseTable').dataTable().fnDestroy();
    $('#purchaseList').empty();
    var tblData = '';
    var index=1;
    for (let k of list.keys()) {
        
        let purchase = list.get(k);        
        // console.log(k);
        // console.log(purchase);

        tblData += `
                <tr>
                    <td>` + index + `</td>
                    <td>` + purchase.purchaseOrderNo + `</td>
                    <td>` + purchase.vendorName + `</td>
                    <td>` + purchase.totalQty + `</td>
                    <td>` + purchase.itemTotalAmt + `</td>
                    <td>` + purchase.paymentMtd + `</td>
                    <td> <a href="#" onclick="viewPurchaseDetails(${purchase.id})" title="view"><i class="mdi mdi-eye-outline" style="font-size: 20px;"></i></a>
                         <a href="#" onclick="updatePurchaseDetails(${purchase.id})" title="update"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                    
                    </td>
                </tr>`;
                index++;
    }
    $('#purchaseList').html(tblData);
    $('#purchaseTable').DataTable();
}

// Get Purchase List ------------------------------------------------------------------------------------------------

function getPurchaseList() {
    $.ajax({

        url: ebase_url+'purchase_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        purchaseList.set(response.data[i].id, response.data[i]);                        
                    }
                       setPurchaseList1(purchaseList);
                }

            }

        }

    });
}
getPurchaseList();
function updatePurchaseDetails(id){
    let purchase = purchaseList.get(id.toString());
    
    $(location).attr('href',ebase_url+'updatePurchase');
    
}
function viewPurchaseDetails(id){
    
    // var productData = inventoryList.get(this.value);
    let purchase = purchaseList.get(id.toString());
    var purchaseDetailList = purchase.purchaseDetail;
    var itemDetailList = purchase.itemDetail;
    $('#purchaseOrdIdView').text(purchase.purchaseOrderNo);
    $('#purchaseDateView').text(purchase.purchaseDate);
    $('#vendorNameView').text(purchase.vendorName);
    $('#gstinView').text(purchase.gstin);
    $('#contactFirmView').text(purchase.contactFirm);
    $('#createdByView').text(purchase.name);
    
    setPurchaseDetailList(purchaseDetailList);
    setItemDetailList(itemDetailList);


    
    $('#viewPurchaseModal').modal('toggle');
}

function setPurchaseDetailList(list){

 
    $('#purchaseTableView').dataTable().fnDestroy();
    $('#purchaseListView').empty();
    var tblData = '';
    var index=1;
  //console.log(list);
    for (let i=0; i<list.length; i++) {
        //console.log(k);
        // let purchaseDetail = list.get(k);        

        tblData += `
                <tr>
                    <td>` + index + `</td>
                    <td>` + list[i].productName + `</td>
                    <td>` + list[i].totalQty + `</td>
                </tr>`;
                index++;
    }
    $('#purchaseListView').html(tblData);
    $('#purchaseTableView').DataTable();
}


function setItemDetailList(itemList){

    $('#itemDetailTableView').dataTable().fnDestroy();
    $('#itemDetailListView').empty();
    var tblData = '';
    var index=1;
    //console.log(list);
    for (let i=0; i<itemList.length; i++) {
        //console.log(k);
        // let purchaseDetail = list.get(k);        

        tblData += `
                <tr>
                    <td>` + index + `</td>
                    <td>` + itemList[i].productName + `</td>
                    <td>` + itemList[i].IMEINo + `</td>
                    <td>` + itemList[i].UIDNo_ICCDENo + `</td>
                    <td>` + itemList[i].SIM1No + `</td>
                    <td>` + itemList[i].SIM2No + `</td>
                    <td>` + itemList[i].StkStatus + `</td> 
                    <td>` + itemList[i].purchaseDate + `</td> 
                </tr>`;
                index++;
    }
    $('#itemDetailListView').html(tblData); 
    $('#itemDetailTableView').DataTable();

}