let clientList = new Map();
let productList = new Map();
let inventoryList = new Map();
let salesList = new Map();
let itemMap=new Map();

//Delete purchase item 
function deleteSalesDetailItems(key){
    if(itemMap.has(key)){
        itemMap.delete(key);
        refreshTable();
    }
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
$('#addSalesForm').submit(function(e) {
    e.preventDefault();

    // Get form values
    var salesOrdId = $('#salesOrdId').text().trim();
    var salesDate = $('#salesDate').val().trim();
    var clientName = $('#clientName option:selected').text().trim();
    var clientId = $('#clientName').val().trim();
    var productName = $('#productName option:selected').text().trim();
    var Product_Id = $('#productName').val().trim();
    var imei_no = $('#imeiNo option:selected').text().trim();
    var IMEINo = $('#imeiNo').val().trim();
    var activationDate = $('#activationDate').val().trim();
    var serialNumber = $('#serialNumber').val().trim();
    var simno1 = $('#simno1').val().trim();
    var simno2 = $('#simno2').val().trim();
    
    
    var flag;

    if (clientName == '' || clientName == null){
        $('#clientName option:selected').text('Please Select Client Name');
        flag=false;
    }else if(productName == '' || productName == null){
        $('#productName option:selected').text('Please select pruduct name');
        flag=false;
    }else if(IMEINo == '' || IMEINo == null){
        $('#imeiNo option:selected').val('Please select imei no');
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

  $('#serialNumber').val(' ');
  $('#simno1').val(' ');
  $('#simno2').val(' ');
  $('#activationDate').val(' ');
  //$('#imeiNo').val('0').change();

    refreshTable();
    
  }
    
   
});


//Add Sales Btn script -----------------------------------------------------------------
/*
$('#addSalesBtn').click(function () {
    $("#addSalesForm").trigger("reset");
    let currentDate = new Date().toJSON().slice(0,10);
    $('#addSalesModal').modal('toggle');
    document.getElementById("salesDate").value = currentDate;
    const [firstKey] = salesList.keys();
    var i=isNaN(parseInt(firstKey))?1:parseInt(firstKey)+1;
    $('#salesOrdId').text('SO-00'+i);
    $('#id').val('');
    $('.error').text('');
    
});
*/
$("#productName").change(function(){
    
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
                        if(response.data[i].StkStatus == 'Purchase'){
                                          
                        option +=`<option value="${response.data[i].id}">${response.data[i].IMEINo}</option>`; 
                        inventoryList.set(response.data[i].id, response.data[i]);
                        }
                      
                    }
                   
                }
                $('#imeiNo').html(option);
                //$('#imeiNo').prop('disabled',false);

            }

        }

    });
});
   
//*******for fetch client details

$("#imeiNo").change(function(){
    var productData = inventoryList.get(this.value);
    $('#activationDate').val(productData.ActivationDate);
    $('#serialNumber').val(productData.UIDNo_ICCDENo); 
    $('#simno1').val(productData.SIM1No);
    $('#simno2').val(productData.SIM2No); 
  });


  //-----------DropdownList For client-----------------------
function setclientDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let clientName = list.get(k);
        
          options+=`<option value="${clientName.id}">${clientName.firstName} ${clientName.lastName}</option>`;
              
      }
       
        $('#clientName').html(options);
    
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

$("#clientName").change(function(){
    var clientData = clientList.get(this.value);
    $('#address').val(clientData.address1);
    $('#email').val(clientData.email); 
  });


  //-----------DropdownList For Product-----------------------
function setproductDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let productName = list.get(k);
        
          options+=`<option value="${productName.id}">${productName.productName}</option>`;
              
      }
       
        $('#productName').html(options);
    
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
$("#callSalesAjax").click(function(e){
    
    e.preventDefault();
    
   
    var itemList=Array.from(itemMap.values());
    if(itemList != '' && itemList != null && itemList.length>0)
    {
        var itemTotalAmt = $('#itemTotalAmt').val().trim();
        var paymentMtd = $('#paymentMtd').val().trim();
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
                        salesList.set(response.data[i].id, response.data[i]);
                    }
                    
                    
                }
                const [firstKey] = salesList.keys();
                var i=isNaN(parseInt(firstKey))?1:parseInt(firstKey)+1;
                $('#salesOrdId').text('SO-00'+i);
                //setup current date in purchase date field
                let currentDate = new Date().toJSON().slice(0,10);
                document.getElementById("salesDate").value = currentDate;

            }

        }

    });
}
getsalesList();