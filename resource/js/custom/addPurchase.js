let vendorList = new Map();
let productList = new Map();
let purchaseList = new Map();
let itemMap=new Map();

const myStyles = `
    #IMEINoError, #UIDNo_ICCDENoError, #SIM1NoError, #SIM2NoError {
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
            $('#dataTable tbody').append(row);
        }

        $('#totQty').val(itemMap.size);
    }

//  Remove validation text
    $("#IMEINo").click(function() {
        $("#IMEINoError").text("");
    });
    $("#UIDNo_ICCDENo").click(function() {
        $("#UIDNo_ICCDENoError").text("");
    });
    $("#SIM1No").click(function() {
        $("#SIM1NoError").text("");
    });
    $("#SIM2No").click(function() {
        $("#SIM2NoError").text("");
    });

    // Contact length validation 
    $("#SIM1No").on("input", function() {
        var contactValue = $(this).val().trim();
        var desiredLength = 10;
        
        if (contactValue.length === desiredLength) {
            $("#SIM1NoError").text(""); // Clear any previous messages
        } else {
            $("#SIM1NoError").text("SIM1No. must be 10 digits.");
        }
    });

    $("#SIM2No").on("input", function() {
        var contactValue = $(this).val().trim();
        var desiredLength = 10;
        
        if (contactValue.length === desiredLength) {
            $("#SIM2NoError").text(""); // Clear any previous messages
        } else {
            $("#SIM2NoError").text("SIM2No. must be 10 digits.");
        }
    });

// Contact No. space remove
    $("#SIM1No").on("input", function() {
        var inputValue = $(this).val();
        var newValue = inputValue.replace(/\s/g, ''); // Remove all spaces
        
        $(this).val(newValue);
    });

    $("#SIM2No").on("input", function() {
        var inputValue = $(this).val();
        var newValue = inputValue.replace(/\s/g, ''); // Remove all spaces
        
        $(this).val(newValue);
    });

    //
    $("#SIM1No").on("input", function() {
        var sanitizedValue = $(this).val().replace(/\D/g, ''); // Remove non-digits
        $(this).val(sanitizedValue);
    });

    $("#SIM2No").on("input", function() {
        var sanitizedValue = $(this).val().replace(/\D/g, ''); // Remove non-digits
        $(this).val(sanitizedValue);
    });
   

    // Handle form submission
    $('#addPurchaseForm').submit(function(e) {
        e.preventDefault();

        // Get form values
        var purchaseOrdId = $('#purchaseOrdId').text().trim();
        var purchaseDate = $('#purchaseDate').val().trim();
        var vendorName = $('#vendorName option:selected').text().trim();
        var VenderId  = $('#vendorName').val().trim();
        // $("#yourdropdownid option:selected").text();
        var gstin = $('#gstin').val().trim();
        var contactFirm = $('#contactFirm').val().trim();
        var productName = $('#productName option:selected').text().trim();
        var Product_Id = $('#productName').val().trim();
        var ActivationDate = $('#ActivationDate').val().trim();
        var IMEINo = $('#IMEINo').val().trim();
        var UIDNo_ICCDENo = $('#UIDNo_ICCDENo').val().trim();
        var SIM1No = $('#SIM1No').val().trim();
        var SIM2No = $('#SIM2No').val().trim();

        
        
        var flag;

        if (IMEINo == '' || IMEINo == null){
            $('#IMEINoError').text('Please enter IMEINO');
            flag=false;
        }else if(UIDNo_ICCDENo == '' || UIDNo_ICCDENo == null){
            $('#UIDNo_ICCDENoError').text('Please enter UID/ICCDE Number');
            flag=false;
        }else if(SIM1No == '' || SIM1No == null){
            $('#SIM1NoError').text('Please enter SIM NO.01');
            flag=false;
        }else if(SIM2No == '' || SIM2No == null){
            $('#SIM2NoError').text('Please enter SIM NO.02');
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
             
        $('#ActivationDate').val(' ');
        $('#IMEINo').val(' ');
        $('#UIDNo_ICCDENo').val(' ');
        $('#SIM1No').val(' ');
        $('#SIM2No').val(' ');
        $('#vendorName').prop('disabled',true);
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
        
    
    $('#vendorName').html(options);
    
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
$("#vendorName").change(function(){
    var vId=this.value;
    var vendor=vendorList.get(vId);
    $("#gstin").val(vendor.gstin);
    $("#contactFirm").val(vendor.contactFirm);
  });

//------------ DropdownList For Product ----------------------------------------------------------

function setProductDropdown(list) {

    var options = '<option value="0" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let productName = list.get(k);
        
          options+=`<option value="${productName.id}">${productName.productName}</option>`;
                
      }   
    
    $('#productName').html(options);
    
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
$("#callPurchaseAjax").click(function(e){
    
    e.preventDefault();
    
   
    var itemList=Array.from(itemMap.values());

    if(itemList != '' && itemList != null && itemList.length>0)
    {
        var itemTotalAmt = $('#itemTotalAmt').val().trim();
        var paymentMtd = $('#paymentMtd').val().trim();
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
$('#canclePurchasePage').click(function () {

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
                const [firstKey] = purchaseList.keys();
                var i=isNaN(parseInt(firstKey))?1:parseInt(firstKey)+1;
                $('#purchaseOrdId').text('OP-00'+i);
                //setup current date in purchase date field
                let currentDate = new Date().toJSON().slice(0,10);
                document.getElementById("purchaseDate").value = currentDate;
            }

        }

    });
}
getPurchaseList();
