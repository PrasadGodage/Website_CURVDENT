//Add Product Button
let brandList = new Map();
let productList = new Map();

$('#addproductForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addproductForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'product_api',

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
                    $('#addproductModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(productList.has(id)){
                    productList.delete(id);   
                 }
                 productList.set(id, response.data);
                 setProductList(productList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});
$('#addproductBtn').click(function () {
    $('#addproductModal').modal('toggle');
    $("#addproductForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});

//get client data
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
                setProductList(productList);
            }

        }

    });
}
getProductList();

function setProductList(list) {

    $('#productTable').dataTable().fnDestroy();
    $('#productList').empty();
    var tblData = '';
    
    for (let k of list.keys()) {
        
        let product = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>${product.id}</td>
                        <td>${product.brandName}</td>
                        <td>${product.productName}</td>
                        
                      
        <td> <a href="#" onclick="updateproductDetails(${product.id})" title="Update product" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#productList').html(tblData);
    $('#productTable').DataTable();
}
function updateproductDetails(id) {
    let product = productList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#productName').val('');
    $('#SelectName').val('');
    $('#availableStock').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(product.id);
    $('#productName').val(product.productName);
    $('#SelectName').val(product.brand_id).change();
    $('#availableStock').val(product.availableStock);
    $('#addproductModal').modal('toggle');
    
}



//--------import Brand data-------

function getbrandList() {
    $.ajax({

        url: ebase_url+'brand_api',

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
                        brandList.set(response.data[i].id, response.data[i]);
                    }
                    setbrandDropdown(brandList);
                }

            }

        }

    });
}
getbrandList();

//-----------DropdownList For brands-----------------------
function setbrandDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let brandName = list.get(k);
        
          options+=`<option value="${brandName.id}">${brandName.brandName}</option>`;
        
        
      }
        
    
    $('#SelectName').html(options);
    
}





//form validation script
var productValidation = document.createElement('script');
productValidation.src = ebase_url + 'resource/js/custom/productValidation.js';
productValidation.setAttribute("type", "text/javascript");
document.head.appendChild(productValidation);








