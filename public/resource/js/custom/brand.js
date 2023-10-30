let brandList = new Map();

//Submit Brand Btn script

$('#addBrandForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addBrandForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'brand_api',

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
                    $('#addBrandModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(brandList.has(id)){
                    brandList.delete(id);   
                 }
                 brandList.set(id, response.data);
                 setBrandList(brandList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



//Add Brand Btn script -----------------------------------------------------------------
$('#addBrandBtn').click(function () {
    $('#addBrandModal').modal('toggle');
    $("#addBrandForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


//Set BrandList ---------------------------------------------------
function setBrandList(list) {

    $('#brandTable').dataTable().fnDestroy();
    $('#brandList').empty();
    var tblData = '';
    
    for (let k of list.keys()) {
        
        let brand = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>${brand.id}</td>
                        <td>${brand.brandName}</td>
                        <td> <a href="#" onclick="updateBrandDetails(${brand.id})" title="Update Brand" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#brandList').html(tblData);
    $('#brandTable').DataTable();
}



// Updte Brand Details----------------------------------------------------------------------------------------
function updateBrandDetails(id) {
    let brand = brandList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#brandName').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(brand.id);
    $('#brandName').val(brand.brandName);
    $('#addBrandModal').modal('toggle');
}




// Get Brand List ------------------------------------------------------------------------------------------------


function getBrandList() {
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

                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        brandList.set(response.data[i].id, response.data[i]);
                    }
                    setBrandList(brandList);
                }

            }

        }

    });
}
getBrandList();



//import brandValidation script
var brandValidation = document.createElement('script');
brandValidation.src = ebase_url + 'resource/js/custom/brandValidation.js';
brandValidation.setAttribute("type", "text/javascript");
document.head.appendChild(brandValidation);
