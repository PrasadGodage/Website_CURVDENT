let clientList = new Map();
let productList = new Map();
let inventoryList = new Map();
let salesList = new Map();
let itemMap=new Map();
//add imei btn
$('#addImeiBtn').click(function () {
    $('#addImeiModal').modal('toggle');
    $("#addImeiForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});

// Function to refresh the table with the stored data
function refreshTable() {
    // Clear the existing table content
    $('#dataTable tbody').empty();
            var index=1;
        for (let k of itemMap.keys()) {
            var row = '<tr>' +
                '<td>' + (index++) + '</td>' +
                
                '<td>' + itemMap.get(k).productName + '</td>' +
                // '<td>' + itemMap.get(k).activationDate + '</td>' + 
                '<td>' + itemMap.get(k).imei_no + '</td>' + 
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
$('#addImeiForm').submit(function(e) {
    e.preventDefault();

    // Get form values
       var productName = $('#productName option:selected').text().trim();
    var Product_Id = $('#productName').val().trim();
    var imei_no = $('#imeiNo option:selected').text().trim();
    var IMEINo = $('#imeiNo').val().trim();
   // var activationDate = $('#activationDate').val().trim();
       
    
    var flag;

     if(productName == '' || productName == null){
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
       
        productName:productName ,
        Product_Id:Product_Id ,
        activationDate:activationDate,
        IMEINo:IMEINo,
        imei_no:imei_no,
        
        };
    itemMap.set(itemMap.size+1,formData);
  //clear field value

 

    refreshTable();
    
    
  }
//   $('#productName').val('0').change();
//   $('#imeiNo').val('0').change();
    
   
});



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
                        
                                          
                        option +=`<option value="${response.data[i].id}">${response.data[i].IMEINo}</option>`; 
                        inventoryList.set(response.data[i].id, response.data[i]);
                        
                      
                    }
                   
                }
                $('#imeiNo').html(option);
                //$('#imeiNo').prop('disabled',false);

            }

        }

    });
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

// let productList = new Map();
// let inventoryList = new Map();
// let itemMap=new Map();
// $('#addImeiBtn').click(function () {
//     $('#addproductimeiModal').modal('toggle');
//     $("#addproductimeiForm").trigger("reset");
//     $('#id').val('');
//     $('.error').text('');
// });
// $("#SelectProduct").change(function(){
    
//     var product_id=this.value;
//        $.ajax({

//         url: ebase_url+'inventory_api/'+product_id+ '/0',

//         type: 'GET',

//         async:false,

//         headers: {
//             "Authorization": etoken
//         },

//         dataType: 'json',

//         success: function (response) {
        
         
//             if (response.status == 200) {
//                 let option='<option value="disabled selected hidden>"</option>';
                       
//                 if (response.data.lenght != 0) {
//                     for (var i = 0; i < response.data.length; i++) {
                        
                                          
//                         option +=`<option value="${response.data[i].id}">${response.data[i].IMEINo}</option>`; 
//                         inventoryList.set(response.data[i].id, response.data[i]);
                        
                      
//                     }
                   
//                 }
//                 $('#imei').html(option);
//                 //$('#imeiNo').prop('disabled',false);

//             }

//         }

//     });
// });
   
//   //-----------DropdownList For Product-----------------------
// function setproductDropdown(list) {

//     var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
//     for (let k of list.keys()) {
        
//         let productName = list.get(k);
        
//           options+=`<option value="${productName.id}">${productName.productName}</option>`;
              
//       }
       
//         $('#SelectProduct').html(options);
    
// }

// //--------import product data-------

// function getproductList() {
//     $.ajax({

//         url: ebase_url+'product_api',

//         type: 'GET',

//         async:false,

//         headers: {
//             "Authorization": etoken
//         },

//         dataType: 'json',

//         success: function (response) {
        

//             if (response.status == 200) {

//                 if (response.data.lenght != 0) {
//                     for (var i = 0; i < response.data.length; i++) {
//                         productList.set(response.data[i].id, response.data[i]);
//                     }
//                     setproductDropdown(productList);
//                 }

//             }

//         }

//     });
// }
// getproductList();

// function refreshTable() {
//     // Clear the existing table content
//     $('#dataTable tbody').empty();
//             var index=1;
//         for (let k of itemMap.keys()) {
//             var row = '<tr>' +
//                 '<td>' + (index++) + '</td>' +
//                 '<td>' + itemMap.get(k).productName + '</td>' +
//                 '<td>' + itemMap.get(k).imei_no + '</td>' +
//                 '<td>' + itemMap.get(k).imei_no + '</td>' + 
//                 '<td>' +
//                 '<a href="#" onclick="deleteSalesDetailItems('+k+')"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>' +
//                 '</td>' +
//                 '</tr>';
//            // console.log(data.amount);
//             $('#dataTable tbody').append(row);   
//         }

//         $('#totQty').val(itemMap.size);
//     }
// //----------------Display data in table---------
// $('#addproductimeiForm').submit(function(e) {
//     e.preventDefault();

//     // Get form values
//     var productName = $('#SelectProduct option:selected').text().trim();
//     var Product_Id = $('#SelectProduct').val().trim();
//     var imei_no = $('#imei option:selected').text().trim();
//     var IMEINo = $('#imei').val().trim();
//     var flag;
//       if(productName == '' || productName == null){
//         $('#SelectProduct option:selected').text('Please select pruduct name');
//         flag=false;
//     }else if(IMEINo == '' || IMEINo == null){
//         $('#imei option:selected').val('Please select imei no');
//         flag=false;
//        }
//     else{
//         flag=true;
//     }
//   if(flag){
//    // Create an object to store the form data
//     var formData = {
       
//         productName:productName ,
//         Product_Id:Product_Id ,
//         activationDate:activationDate,
//         IMEINo:IMEINo,
//         imei_no:imei_no,
//             };
//     itemMap.set(itemMap.size+1,formData);
//     //$('#imeiNo').val('0').change();

//     refreshTable();
    
//   }
    
   
// });






