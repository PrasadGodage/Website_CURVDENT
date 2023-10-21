// console.log('purchase Id1:'+id);
let updatepurchaseId=id;
// console.log('purchase Id2:'+updatepurchaseId);
let vendorList = new Map();
let productList = new Map();
let purchaseList = new Map();
let inventoryList=new Map();
let itemMap=new Map();
// let updatePurchaseList = new Map();

const myStyles = `
    #uIMEINoError, #uUIDNo_ICCDENoError, #uSIM1NoError, #uSIM2NoError {
        color: red;
        padding: 10px;
    }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = myStyles;
document.head.appendChild(styleElement);



//Delete purchase item 
function deletePurchaseDetailItems(key){
        if(itemMap.has(key)){
            itemMap.delete(key);
            refreshTable();
        }
}

// Define a function to format the date
// function formatDate(date) {
//     // Extract date components
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
//     const day = String(date.getDate()).padStart(2, '0');
    // const hours = String(date.getHours()).padStart(2, '0');
    // const minutes = String(date.getMinutes()).padStart(2, '0');
    // const seconds = String(date.getSeconds()).padStart(2, '0');
  
    // Create the formatted date string
    //const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//     const formattedDate = `${year}-${month}-${day}`;
  
//     return formattedDate;
//   }
// Function to refresh the table with the stored data
function refreshTable() {
    // Clear the existing table content
    // $('#udataTable tbody').empty();
            var index=1;
        for (let k of itemMap.keys()) {
            var row = '<tr>' +
                '<td>' + (index++) + '</td>' +
                // '<td>' + itemMap.get(k).poid + '</td>' +
                // '<td>' + itemMap.get(k).purchaseDate + '</td>' +
                '<td>' + itemMap.get(k).vendorName + '</td>' +
                '<td>' + itemMap.get(k).productName + '</td>' +
                '<td>' + itemMap.get(k).ActivationDate + '</td>' +
                '<td>' + itemMap.get(k).IMEINo + '</td>' +
                '<td>' +itemMap.get(k).UIDNo_ICCDENo + '</td>' +
                '<td>' + itemMap.get(k).SIM1No + '</td>' +
                '<td>' + itemMap.get(k).SIM2No + '</td>' +
                '<td>' +
                '<a href="#" onclick="deletePurchaseDetailItems('+k+')"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>' +
                '</td>' +
                '</tr>';
           // console.log(data.amount);
            $('#udataTable tbody').append(row);
        }

        $('#utotQty').val(itemMap.size);
    }

//  Remove validation text
    $("#uIMEINo").click(function() {
        $("#uIMEINoError").text("");
    });
    $("#uUIDNo_ICCDENo").click(function() {
        $("#uUIDNo_ICCDENoError").text("");
    });
    $("#uSIM1No").click(function() {
        $("#uSIM1NoError").text("");
    });
    $("#uSIM2No").click(function() {
        $("#uSIM2NoError").text("");
    });

    // Contact length validation 
    $("#uSIM1No").on("input", function() {
        var contactValue = $(this).val().trim();
        var desiredLength = 10;
        
        if (contactValue.length === desiredLength) {
            $("#uSIM1NoError").text(""); // Clear any previous messages
        } else {
            $("#uSIM1NoError").text("SIM1No. must be 10 digits.");
        }
    });

    $("#uSIM2No").on("input", function() {
        var contactValue = $(this).val().trim();
        var desiredLength = 10;
        
        if (contactValue.length === desiredLength) {
            $("#uSIM2NoError").text(""); // Clear any previous messages
        } else {
            $("#uSIM2NoError").text("SIM2No. must be 10 digits.");
        }
    });

// Contact No. space remove
    $("#uSIM1No").on("input", function() {
        var inputValue = $(this).val();
        var newValue = inputValue.replace(/\s/g, ''); // Remove all spaces
        
        $(this).val(newValue);
    });

    $("#uSIM2No").on("input", function() {
        var inputValue = $(this).val();
        var newValue = inputValue.replace(/\s/g, ''); // Remove all spaces
        
        $(this).val(newValue);
    });

    //
    $("#uSIM1No").on("input", function() {
        var sanitizedValue = $(this).val().replace(/\D/g, ''); // Remove non-digits
        $(this).val(sanitizedValue);
    });

    $("#uSIM2No").on("input", function() {
        var sanitizedValue = $(this).val().replace(/\D/g, ''); // Remove non-digits
        $(this).val(sanitizedValue);
    });
   

    // Handle form submission
    $('#updatePurchaseForm').submit(function(e) {
        e.preventDefault();

        // Get form values
        var purchaseOrdId = $('#upurchaseOrdId').text().trim();
        var purchaseDate = $('#upurchaseDate').val().trim();
        var vendorName = $('#uvendorName option:selected').text().trim();
        var VenderId  = $('#uvendorName').val().trim();
        // $("#yourdropdownid option:selected").text();
        var gstin = $('#ugstin').val().trim();
        var contactFirm = $('#ucontactFirm').val().trim();
        var productName = $('#uproductName option:selected').text().trim();
        var Product_Id = $('#uproductName').val().trim();
        var ActivationDate = $('#uActivationDate').val().trim();
        var IMEINo = $('#uIMEINo').val().trim();
        var UIDNo_ICCDENo = $('#uUIDNo_ICCDENo').val().trim();
        var SIM1No = $('#uSIM1No').val().trim();
        var SIM2No = $('#uSIM2No').val().trim();
        // console.log(ActivationDate);
        // var ActivationDate1=formatDate(ActivationDate);
        // console.log(ActivationDate1);
        
        var flag;

        if (IMEINo == '' || IMEINo == null){
            $('#uIMEINoError').text('Please enter IMEINO');
            flag=false;
        }else if(UIDNo_ICCDENo == '' || UIDNo_ICCDENo == null){
            $('#uUIDNo_ICCDENoError').text('Please enter UID/ICCDE Number');
            flag=false;
        }else if(SIM1No == '' || SIM1No == null){
            $('#uSIM1NoError').text('Please enter SIM NO.01');
            flag=false;
        }else if(SIM2No == '' || SIM2No == null){
            $('#uSIM2NoError').text('Please enter SIM NO.02');
            flag=false;
        }
        else{
            flag=true;
        }

       if(flag){
       // Create an object to store the form data
        var formData = {
            poid:purchaseOrdId,
            purchaseDate:purchaseDate,
            vendorName:vendorName,
            VenderId:VenderId ,
            Product_Id:Product_Id,
            gstin:gstin,
            contactFirm:contactFirm,
            productName:productName,
            ActivationDate:ActivationDate,
            IMEINo:IMEINo,
            UIDNo_ICCDENo:UIDNo_ICCDENo,
            SIM1No:SIM1No,
            SIM2No:SIM2No
             };
         
       
        itemMap.set(itemMap.size+1,formData);
             
        $('#uActivationDate').val(' ');
        $('#uIMEINo').val(' ');
        $('#uUIDNo_ICCDENo').val(' ');
        $('#uSIM1No').val(' ');
        $('#uSIM2No').val(' ');
        $('#uvendorName').prop('disabled',true);
        refreshTable();
       
    }
});




//------------ DropdownList For Vendor ----------------------------------------------------------

function setVendorDropdown(list) {

    var options = '<option value="0" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let vendorName = list.get(k);
        
          options+=`<option value="${vendorName.id}">${vendorName.vendorName}</option>`;
               
      }
        
    
    $('#uvendorName').html(options);
    
}

//----------- Import Vendor Data ------------------------------------------------------------

function getVendorList() {
    $.ajax({

        url: ebase_url+'vendor_api',

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
                        vendorList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setVendorDropdown(vendorList);
            }

        }

    });
}
getVendorList();

//set GST and contact field on vendor change event
$("#uvendorName").change(function(){
    var vId=this.value;
    var vendor=vendorList.get(vId);
    // console.log(vendor);
    $("#ugstin").val(vendor.gstin);
    $("#ucontactFirm").val(vendor.contactFirm);
  });

//------------ DropdownList For Product ----------------------------------------------------------

function setProductDropdown(list) {

    var options = '<option value="0" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let productName = list.get(k);
        
          options+=`<option value="${productName.id}">${productName.productName}</option>`;
                
      }   
    
    $('#uproductName').html(options);
    
}

//----------- Import Product Data ------------------------------------------------------------

function getProductList() {
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
                    
                }
                setProductDropdown(productList);
            }

        }

    });
}
getProductList();



//call ajax and send purchase details to the api i.e. purchase_api 
$("#ucallPurchaseAjax").click(function(e){
    
    e.preventDefault();
    
   
    var itemList=Array.from(itemMap.values());

    if(itemList != '' && itemList != null && itemList.length>0)
    {
        var itemTotalAmt = $('#uitemTotalAmt').val().trim();
        var paymentMtd = $('#upaymentMtd').val().trim();
        var jsonString= JSON.stringify(itemList);
        var formdata = new FormData();
        formdata.append("purchaseDetails",jsonString);
        formdata.append("itemTotalAmt",itemTotalAmt);
        formdata.append("paymentMtd",paymentMtd);
        formdata.append("created_by",empdetails.id);

            $.ajax({ 

                url: ebase_url+'purchase_api',

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
                            $(location).attr('href',ebase_url+'purchase'),
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
$('#ucanclePurchasePage').click(function () {

    $(location).attr('href',ebase_url+'purchase');
     
    
 });


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
                    
                }
                // const [firstKey] = purchaseList.keys();
                // var i=isNaN(parseInt(firstKey))?1:parseInt(firstKey)+1;
                // $('#upurchaseOrdId').text('OP-00'+i);
                // //setup current date in purchase date field
                // let currentDate = new Date().toJSON().slice(0,10);
                // document.getElementById("upurchaseDate").value = currentDate;
            }

        }

    });
}
getPurchaseList();


function getUpdatePurchaseList() {
    $.ajax({

        url: ebase_url+'purchase_api/'+updatepurchaseId,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                   // for (var i = 0; i < response.data.length; i++) {
                        // updatePurchaseList.set(response.data);
                        updatePuchase(response.data[0]);
                        
                   // }  
                    
                }
                
            }

        }

    });
}
getUpdatePurchaseList();

function updatePuchase(data){
    console.log(data);
    let productData = data.purchaseDetail;
    let itemData = data.itemDetail;
    // console.log(productData);
    //console.log(itemData);
    $('#upurchaseOrdId').text(data.purchaseOrderNo);
    $('#upurchaseDate').val(data.purchaseDate);
    //$('#uvendorName').val(data.vendor_id).change();
    $('#utotQty').val(data.totalQty);

    $('#udataTable tbody').empty();
    var index=1;
    for (var k=0 ; k<itemData.length ; k++) {
        // console.log(itemData[k]);
        var row = '<tr>' +
            '<td>' + (index++) + '</td>' +
            // '<td>' + itemMap.get(k).poid + '</td>' +
            // '<td>' + itemMap.get(k).purchaseDate + '</td>' +
            '<td>' + itemData[k].vendorName + '</td>' +
            '<td>' + itemData[k].productName + '</td>' +
            '<td>' + itemData[k].ActivationDate + '</td>' +
            '<td>' + itemData[k].IMEINo + '</td>' +
            '<td>' + itemData[k].UIDNo_ICCDENo + '</td>' +
            '<td>' + itemData[k].SIM1No + '</td>' +
            '<td>' + itemData[k].SIM2No + '</td>' +
            '<td>' +
            '<a href="#" onclick="updateItemPurchase('+itemData[k].id+')"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>' +
            '</td>' +
            '</tr>';
       // console.log(data.amount);
       $('#udataTable tbody').append(row);
       
    }
    // $('#uproductName').val(productData.product_id).change();
    // $('#uIMEINo').val(itemData.IMEINo);
    // $('#uActivationDate').val(itemData.ActivationDate);
    // $('#uUIDNo_ICCDENo').val(itemData.UIDNo_ICCDENo);
    // $('#uSIM1No').val(itemData.SIM1No);
    // $('#uSIM2No').val(itemData.SIM2No);
}
function updateItemPurchase(id){
    // var datat=data;
     console.log(id);

    $.ajax({

        url: ebase_url+'inventoryitem_api/'+id,

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

function updateItem(data){

    console.log(data);
     $('#uvendorName').val(data.VenderId).change();
     $('#uproductName').val(data. Product_Id).change();
     $('#uIMEINo').val(data.IMEINo);
    $('#uActivationDate').val(data.ActivationDate);
    $('#uUIDNo_ICCDENo').val(data.UIDNo_ICCDENo);
    $('#uSIM1No').val(data.SIM1No);
    $('#uSIM2No').val(data.SIM2No);
  
}