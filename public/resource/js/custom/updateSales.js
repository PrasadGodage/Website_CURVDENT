//console.log('sales id='+id);
let updatesalesId=id;
let clientList = new Map();
let productList = new Map();
let inventoryList = new Map();
let salesList = new Map();
let itemMap=new Map();
//let updateSalesList = new Map();

//Delete purchase item 
function deleteSalesDetailItems(key){
    if(itemMap.has(key)){
        itemMap.delete(key);
        refreshTable();
    }
}

function changeDateFormat(activationDate) {
    // Split the input date into day, month, and year
    var dateParts = activationDate.split("-");
    
    // Create a Date object in the original format (month - 1 because months are 0-based)
    var originalDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    
    // Get the new date in yyyy-mm-dd format
    var activationDate = originalDate.getFullYear() + "-" +
                  ('0' + (originalDate.getMonth() + 1)).slice(-2) + "-" +
                  ('0' + originalDate.getDate()).slice(-2);
    
    return activationDate;
  }
// Function to refresh the table with the stored data
function refreshTable() {
    // Clear the existing table content
    $('#dataTable tbody').empty();
            var index=1;
        for (let k of itemMap.keys()) {
            var row = '<tr>' +
                '<td>' + (index++) + '</td>' +
                // '<td>' + itemMap.get(k).poid + '</td>' +
                // '<td>' + itemMap.get(k).purchaseDate + '</td>' +
                '<td>' + itemMap.get(k).clientName + '</td>' +
                '<td>' + itemMap.get(k).productName + '</td>' +
                '<td>' + itemMap.get(k).activationDate + '</td>' + 
                '<td>' + itemMap.get(k).imei_no + '</td>' + 
                '<td>' + itemMap.get(k).serialNumber + '</td>' +
                '<td>' + itemMap.get(k).simno1 + '</td>' +
                '<td>' + itemMap.get(k).simno2 + '</td>' +
                '<td>' +
                '<a href="#" onclick="deleteSalesDetailItems('+k+')"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>' +
                '</td>' +
                '</tr>';
           // console.log(data.amount);
            $('#dataTable tbody').append(row);   
        }

        $('#totQty').val(itemMap.size);
    }
//----------------Display data in table---------
$('#updateSalesForm').submit(function(e) {
    e.preventDefault();

    // Get form values
    var salesOrdId = $('#usalesOrdId').text().trim();
    var salesDate = $('#usalesDate').val().trim();
    var clientName = $('#uclientName option:selected').text().trim();
    var clientId = $('#uclientName').val().trim();
    var address = $('#uaddress').val().trim();
    var email = $('#uemail').val().trim();
    var productName = $('#uproductName option:selected').text().trim();
    var Product_Id = $('#uproductName').val();
    var imei_no = $('#uimeiNo option:selected').text().trim();
    var IMEINo = $('#uimeiNo').val().trim();
    var activationDate = $('#uactivationDate').val().trim();
    var serialNumber = $('#userialNumber').val().trim();
    var simno1 = $('#usimno1').val().trim();
    var simno2 = $('#usimno2').val().trim();
    
    
    var flag;

    if (clientName == '' || clientName == null){
        $('#uclientName option:selected').text('Please Select Client Name');
        flag=false;
    }else if(productName == '' || productName == null){
        $('#uproductName option:selected').text('Please select pruduct name');
        flag=false;
    }else if(IMEINo == '' || IMEINo == null){
        $('#uimeiNo option:selected').val('Please select imei no');
        flag=false;
    // }else if(serialNumber == '' || serialNumber == null){
    //     $('#UIDNo_ICCDENoError').text('Please enter UID/ICCDE Number');
    //     flag=false;
    // }else if(simno1 == '' || simno1 == null){
    //     $('#SIM1NoError').text('Please enter SIM NO.01');
    //     flag=false;
    // }else if(simno2 == '' || simno2 == null){
    //     $('#SIM2NoError').text('Please enter SIM NO.02');
    //     flag=false;
    }
    else{
        flag=true;
    }
  if(flag){
   // Create an object to store the form data
    var formData = {
        soid:salesOrdId,
        salesDate:salesDate,
        clientName:clientName,
        clientId:clientId,
        address:address,
        email:email,
        productName:productName ,
        Product_Id:Product_Id ,
        activationDate:activationDate,
        IMEINo:IMEINo,
        imei_no:imei_no,
        serialNumber:serialNumber,
        simno1:simno1,
        simno2:simno2
        };
    itemMap.set(itemMap.size+1,formData);
  //clear field value

  $('#userialNumber').val(' ');
  $('#usimno1').val(' ');
  $('#usimno2').val(' ');
  $('#uactivationDate').val(' ');
  //$('#imeiNo').val('0').change();

    refreshTable();
    
  }
    
   
});



$("#uproductName").change(function(){
    
    var product_id=this.value;
       $.ajax({

        url: ebase_url+'inventory_api/'+product_id+ '/0',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        
         
            if (response.status == 200) {
                let option='<option value="disabled selected hidden>"</option>';
                       
                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        if(response.data[i].StkStatus == 'Sales'){
                                          
                        option +=`<option value="${response.data[i].id}">${response.data[i].IMEINo}</option>`; 
                        inventoryList.set(response.data[i].id, response.data[i]);
                        }
                      
                    }
                   
                }
                $('#uimeiNo').html(option);
                //$('#imeiNo').prop('disabled',false);

            }

        }

    });
});
   
//*******for fetch client details

$("#uimeiNo").change(function(){
    var productData = inventoryList.get(this.value);
    $('#uactivationDate').val(productData.ActivationDate);
    $('#userialNumber').val(productData.UIDNo_ICCDENo); 
    $('#usimno1').val(productData.SIM1No);
    $('#usimno2').val(productData.SIM2No); 
  });


  //-----------DropdownList For client-----------------------
function setclientDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let clientName = list.get(k);
        
          options+=`<option value="${clientName.id}">${clientName.firstName} ${clientName.lastName}</option>`;
              
      }
       
        $('#uclientName').html(options);
    
}
  //--------import client data-------

function getclientList() {
    $.ajax({

        url: ebase_url+'client_api',

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
                        clientList.set(response.data[i].id, response.data[i]);
                    }
                    setclientDropdown(clientList);
                }

            }

        }

    });
}
getclientList();

  //*******for fetch client details

$("#uclientName").change(function(){
    var clientData = clientList.get(this.value);
    $('#uaddress').val(clientData.address1);
    $('#uemail').val(clientData.email); 
  });

  //*******for fetch IMEI details
  $("#uIMEINo").change(function(){
    var clientData = clientList.get(this.value);
    $('#uaddress').val(clientData.address1);
    $('#uemail').val(clientData.email); 
  });

  //-----------DropdownList For Product-----------------------
function setproductDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let productName = list.get(k);
        
          options+=`<option value="${productName.id}">${productName.productName}</option>`;
              
      }
       
        $('#uproductName').html(options);
    
}

//--------import product data-------

function getproductList() {
    $.ajax({

        url: ebase_url+'product_api',

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
                        productList.set(response.data[i].id, response.data[i]);
                    }
                    setproductDropdown(productList);
                }

            }

        }

    });
}
getproductList();

  //call ajax and send purchase details to the api i.e. purchase_api 
$("#ucallSalesAjax").click(function(e){
    
    e.preventDefault();
    
   
    var itemList=Array.from(itemMap.values());
    if(itemList != '' && itemList != null && itemList.length>0)
    {
        var itemTotalAmt = $('#uitemTotalAmt').val().trim();
        var paymentMtd = $('#upaymentMtd').val().trim();
        var jsonString= JSON.stringify(itemList);
        var formdata = new FormData();
        formdata.append("salesDetails",jsonString);
        formdata.append("itemTotalAmt",itemTotalAmt);
        formdata.append("paymentMtd",paymentMtd);
        formdata.append("created_by",empdetails.id);

        $.ajax({

            url: ebase_url+'sales_api',

            type: 'POST',

            headers: {
                "Authorization": etoken
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    swal("Good job!", response.msg, "success");
                        setTimeout(
                            $(location).attr('href',ebase_url+'sales'),
                             8000
                             )
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }else{
        swal({   
            title: "Alert!",   
            text: "Please add at least one record.",   
            timer: 2000,   
            showConfirmButton: false 
        });
    }
    
  });
  $('#ucancleSalesPage').click(function () {

    $(location).attr('href',ebase_url+'sales');
     
    
 });

  // Get sales List ------------------------------------------------------------------------------------------------

function getsalesList() {
    $.ajax({

        url: ebase_url+'sales_api/'+updatesalesId,

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
                        salesList.set(response.data[i].id, response.data[i]);
                    }
                    
                    
                }
                // const [firstKey] = salesList.keys();
                // var i=isNaN(parseInt(firstKey))?1:parseInt(firstKey)+1;
                // $('#salesOrdId').text('SO-00'+i);
                // //setup current date in purchase date field
                // let currentDate = new Date().toJSON().slice(0,10);
                // document.getElementById("salesDate").value = currentDate;
                // document.getElementById("activationDate").value = currentDate;

            }

        }

    });
}
getsalesList();

function getUpdateSalesList() {
    $.ajax({

        url: ebase_url+'sales_api/'+updatesalesId,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    //for (var i = 0; i < response.data.length; i++) {
                        //updateSalesList.set(response.data[i].id, response.data[i]);
                        updateSales(response.data[0]);
                        
                  //  }  
                    
                    
                }
                
            }

        }

    });
}
getUpdateSalesList();

function updateSales(data){
    // $('#upurchaseOrdId').val(list.purchaseOrderNo);

// let updateList = JSON.stringify(list);
let salesData = data.salesDetail;
let itemData = data.itemDetail;

    $('#usalesOrdId').text(data.salesOrderNo);
    $('#usalesDate').val(data.salesDate);
   
    $('#utotQty').val(data.totalQty);
   
    $('#udataTable tbody').empty();
    var index=1;
    for (var k=0 ; k<itemData.length ; k++) {
        // console.log(itemData[k]);
        var row = '<tr>' +
            '<td>' + (index++) + '</td>' +
            // '<td>' + itemMap.get(k).poid + '</td>' +
            // '<td>' + itemMap.get(k).purchaseDate + '</td>' +
            '<td>' + itemData[k].firstName +' '+itemData[k].lastName+ '</td>' +
            '<td>' + itemData[k].productName + '</td>' +
            '<td>' + itemData[k].ActivationDate + '</td>' +
            '<td>' + itemData[k].IMEINo + '</td>' +
            '<td>' + itemData[k].UIDNo_ICCDENo + '</td>' +
            '<td>' + itemData[k].SIM1No + '</td>' +
            '<td>' + itemData[k].SIM2No + '</td>' +
            '<td>' +
            '<a href="#" onclick="updateItemSales('+itemData[k].id+')"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>' +
            '</td>' +
            '</tr>';
       // console.log(data.amount);
        $('#udataTable tbody').append(row);
    }
    
}
function updateItemSales(id){
    // var datat=data;
    console.log(id);
    $.ajax({

        url: ebase_url+'inventorysalesitem_api/'+id,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        
         
            if (response.status == 200) {
                //let option='<option value="disabled selected hidden>"</option>';
                       
                if (response.data.length != 0) {
                   //for (var i = 0; i < response.data.length; i++) {
                        
                                          
                       // option +=`<option value="${response.data[i].id}">${response.data[i].IMEINo}</option>`; 
                       // inventoryList.set(response.data[i].id, response.data[i]);
                       updateItem(response.data[0]);
                      
                 //  }
                   
                }
                

            }

        }

    });
    
}
//*******for fetch client details

$("#uclientName").change(function(){
    var clientData = clientList.get(this.value);
    $('#uaddress').val(clientData.address1);
    $('#uemail').val(clientData.email); 
  });

  
function updateItem(data){

    console.log(data);
     $('#uclientName').val(data.ClientId).change();
     $('#uproductName').val(data.Product_Id).change();   
    $('#uimeiNo').val(data.id).change();
    // $('#activationDate').val(data.ActivationDate);
    // $('#userialNumber').val(data.UIDNo_ICCDENo);
    // $('#usimno1').val(data.SIM1No);
    // $('#usimno2').val(data.SIM2No);
  
}