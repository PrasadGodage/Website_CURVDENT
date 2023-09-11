let categoryList = new Map();
let postList = new Map();

// set category data
//Submit Category Btn script

$('#addPostForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addPostForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
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
    }

});


//Add Category Btn script -----------------------------------------------------------------
// $('#btn_Save').click(function () {
//     // $('#addCategoryModal').modal('toggle');
//     $("#addPostForm").trigger("reset");
//     // $('#id').val('');
//     // $('.error').text('');
// });

// $('#addPurchaseForm').submit(function(e) {
//     e.preventDefault();

    // $('#title').val(' ');
    // $('#seo_title').val(' ');
    // $('#content').val(' ');
    // $('#featured').val(' ');
    // $('#choice').val(' ');
    // $('#thread').val(' ');
    // $('#id_category').val(' ');
    // $('#photo').val(' ');
    // $('#is_active').val(' ');
    // $('#date').val(' ');

    $('#btn_Save').click(function () {
        $("#addClientForm").trigger("reset");
        $('#id').val('');
        $('.error').text('');
        $('#title').text('');
        $('#seo_title').text('');
        $('#content').text('');
        $('#featured').text('');
        $('#choice').text('');
        $('#thread').text('');
        $('#content').text('');
        $('#id_category').val(' ');
        $('#is_active').val(' ');
        $('#date').val(' ');
        // $('#featured').val("").change();


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