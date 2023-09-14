let categoryList = new Map();

// set category data
//Submit Category Btn script

$('#addCategoryForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addCategoryForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'category_api',

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
                    $('#addCategoryModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(categoryList.has(id)){
                    categoryList.delete(id);   
                 }
                 categoryList.set(id, response.data);
                 setCategoryList(categoryList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'category');
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



//Add Category Btn script -----------------------------------------------------------------
$('#addCategoryBtn').click(function () {
    $('#addCategoryModal').modal('toggle');
    $("#addCategoryForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


// category table show
function setCategoryList(list) {
    console.log(list); 

$('#categoryTable').dataTable().fnDestroy();
$('#categoryList').empty();
var tblData = '';

for (let k of list.keys()) {
    
    let category = list.get(k);

   
    tblData += `
    <tr>
            <td>` + category.id + `</td>
            <td>` + category.category_name + `</td>
            <td>` + category.slug + `</td>
            <td>` + category. is_active + `</td>
            <td> <a href="#" onclick="updateCategoryDetails(${category.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
            <a href="" onclick="" title="dalete"><i class="mdi mdi-tooltip-delete" style="font-size: 20px;"></i></a>                   
            </td>
            
    </tr>`            
}

$('#categoryList').html(tblData);
$('#categoryTable').DataTable();
}




// Updte Category Details----------------------------------------------------------------------------------------
function updateCategoryDetails(id) {
    let category = categoryList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#category_name').val('');
    $('#slug').val('');
    $('#is_active').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(category.id);
    $('#category_name').val(category.category_name);
    $('#slug').val(category.slug);
    $('#is_active').val(category.is_active);
    $('#addCategoryModal').modal('toggle');
}



// get category data
function getCategoryList() {
    $.ajax({

        url: ebase_url+'category_api',

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
                        categoryList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setCategoryList(categoryList);
                console.log(categoryList);
            }

        }
        
    });
}
getCategoryList();


//import categoryValidation script
var categoryValidation = document.createElement('script');
categoryValidation.src = ebase_url + 'resource/js/custom/categoryValidation.js';
categoryValidation.setAttribute("type", "text/javascript");
document.head.appendChild(categoryValidation);
