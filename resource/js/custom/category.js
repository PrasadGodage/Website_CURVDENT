let categoryList = new Map();

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


// client table show
function setCategoryList(list) {

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
            <td> <a href="#" onclick="updatePostDetails(${category.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
            <a href="" onclick="" title="dalete"><i class="mdi mdi-tooltip-delete" style="font-size: 20px;"></i></a>                   
            </td>
            
    </tr>`            
}

$('#categoryList').html(tblData);
$('#categoryTable').DataTable();
}
