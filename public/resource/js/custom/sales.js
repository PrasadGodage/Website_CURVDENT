let saleList = new Map();
let inventoryList = new Map();

//Add Purchase Btn script -----------------------------------------------------------------

$('#addSalesBtn').click(function () {

    $(location).attr('href',ebase_url+'addSales');
     
    
 });

 //Set SalesList ---------------------------------------------------
function setSalesList(list) {
    //console.log(list);
    $('#salesTable').dataTable().fnDestroy();
    $('#salesList').empty();
    var tblData = '';
    var index=1;
    for (let k of list.keys()) {
        
        let sales = list.get(k);

        tblData += `
                <tr>
                <td>` + index + `</td>
                <td>` + sales.salesOrderNo + `</td>
                <td>` + sales.salesDate + `</td>
                <td>` + sales.firstName + `</td>
                <td>` + sales.totalQty + `</td>
                <td>` + sales.itemTotalAmt + `</td>
                <td>` + sales.paymentMtd + `</td>
                <td>` + sales.created_at + `</td>
                <td> <a href="#" onclick="viewSalesDetails(${sales.id})" title="Views"><i class="mdi mdi-eye-outline" style="font-size: 20px;"></i></a>
                <a href="#" onclick="updateSalesDetails(${sales.id})" title="Update Views"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>                   
                </td>
            </tr>`;
            index++;
    }  
    $('#salesList').html(tblData);
    $('#salesTable').DataTable();
}

// Get sales List ------------------------------------------------------------------------------------------------

function getsalesList() {
    $.ajax({

        url: ebase_url+'sales_api',

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
                        saleList.set(response.data[i].id, response.data[i]);
                    }
                    setSalesList(saleList);
                }

            }

        }

    });
}
getsalesList();

function updateSalesDetails(id)
{
   
    $(location).attr('href',ebase_url+'updateSales/'+id);
    

}

function viewSalesDetails(id){

    let sales = saleList.get(id.toString());
    var salesDetailsList = sales.salesDetail;
    var itemDetailsList = sales.itemDetail;
    $('#salesOrdIdView').text(sales.salesOrderNo);
    $('#salesDateView').text(sales.salesDate);
    $('#clientNameView').text(sales.firstName);
    $('#addressView').text(sales.address1);
    $('#emailView').text(sales.email);
    $('#createdByView').text(sales.name);

    setSalesDetailList(salesDetailsList);
    setItemDetailList(itemDetailsList);

    $('#viewSalesModal').modal('toggle');

}

function setSalesDetailList(list){

 
    $('#salesTableView').dataTable().fnDestroy();
    $('#salesListView').empty();
    var tblData = '';
    var index=1;

    for (let i=0; i < list.length; i++) {
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
 
    $('#salesListView').html(tblData);
    $('#salesTableView').DataTable();
}

function setItemDetailList(itemList){
    console.log(itemList);
   
    $('#itemTableView').dataTable().fnDestroy();
    $('#itemListView').empty();
    var tblData = '';
    var index=1;
    //console.log(list);
    for (let i=0; i<itemList.length; i++) {

        tblData += `
        <tr>
            <td>` + index + `</td>
            <td>` + itemList[i].productName + `</td>
            <td>` + itemList[i].IMEINo + `</td>
            <td>` + itemList[i].SIM1No + `</td>
            <td>` + itemList[i].SIM2No + `</td>
            <td>` + itemList[i].StkStatus + `</td> 
            <td>` + itemList[i].salesDate + `</td> 
        </tr>`;
        index++;

    }
    $('#itemListView').html(tblData); 
    $('#itemTableView').DataTable();
}