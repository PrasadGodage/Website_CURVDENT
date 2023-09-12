let categoryList = new Map();
let postList = new Map();

// set category data
//----------Submit Category Btn script--------------------------

$('#addPostForm').on('submit', function (e) {

    e.preventDefault();

     // Get form values
    var title = $('#title').text().trim();
    // var seo_title = $('#seo_title').text('').trim();
    var content = $('#content').text().trim();
    var featured = $('#featured option:selected').text().trim();
    var choice = $('#choice option:selected').text().trim();
    var thread = $('#thread option:selected').text().trim();
    // var id_category = $('#id_category option:selected').text().trim();
    // var category_id = $('#id_category').val().trim();
    var is_active = $('#is_active option:selected').text().trim();
    var photo = $('#photo option:selected').val().trim();
    var date = $('#date').val().trim();

    var formdata = {
        title:title,
        content:content,
        featured:featured,
        choice:choice,
        thread:thread ,
        // id_category:id_category ,
        // category_id:category_id,
        is_active:is_active,
        photo:photo,
        date:date
        };

        $.ajax({

            url: ebase_url+'posting_api',

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
                        $(location).attr('href',ebase_url+'posting'),
                         8000
                         )
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    });



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
                    setCategoryDropdown(categoryList);
                }

            }

        }

    });
}
getCategoryList();

function setCategoryDropdown(list){

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let categoryName = list.get(k);
        
          options+=`<option value="${categoryName.id}">${categoryName.category_name}</option>`;
              
      }
       
        $('#id_category').html(options);

}



//import addPostValidation script
var addPostValidation = document.createElement('script');
addPostValidation.src = ebase_url + 'resource/js/custom/addPostValidation.js';
addPostValidation.setAttribute("type", "text/javascript");
document.head.appendChild(addPostValidation);