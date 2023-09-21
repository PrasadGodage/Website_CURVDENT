let categoryList = new Map();

// category table show
function setBlogList(list) {
    console.log(list); 

// $('#categoryTable').dataTable().fnDestroy();
$('#uiList').empty();
var ulData = '';

for (let k of list.keys()) {
    
    let category = list.get(k);

   
    ulData += `<li>` + category.category_name + `</li>`
}

$('#uiList').html(ulData);
// $('#categoryTable').DataTable();
}



// get category data
function getBlogList() {
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
                setBlogList(categoryList);
                console.log(categoryList);
            }

        }
        
    });
}
getBlogList();