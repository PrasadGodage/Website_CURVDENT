let categoryList = new Map();
let postList = new Map();

// set category data
//Submit Category Btn script

// $("#callPostAjax").click(function(e){
    
//     e.preventDefault();

//     var title = $('#title').val().trim();
//     var content = $('#content').val().trim();
//     var featured = $('#featured option:selected').text().trim();
//     var choice = $('#choice option:selected').text().trim();
//     var thread = $('#thread option:selected').text().trim();
//     var id_category = $('#id_category option:selected').text().trim();
//     // var photo = $('#photo option:selected').val().trim();
//     var is_active = $('#is_active').val().trim();

//     var formdata = {
//         title:title,
//         content:content,
//         featured:featured,
//         choice:choice,
//         thread:thread ,
//         id_category:id_category ,
//         photo:photo,
//         is_active:is_active
    
//         };

//     // var returnVal = $("#addPostForm").valid();
//     // var formdata = new formData(this);
//     // if (returnVal) {
//         $.ajax({

//             url: ebase_url+'posting_api',

//             type: 'POST',

//             headers: {
//                 "Authorization": etoken
//             },

//             data: formdata,

//             cache: false,

//             contentType: false,

//             processData: false,

//             dataType: 'json',

//             success: function (response) {
//                 if (response.status == 200) {
//                     swal("Good job!", response.msg, "success");
                       
//                 } else {

//                     swal("Good job!", response.msg, "error");

//                 }

//             }

//         });
//     // }else{
//     //     swal({   
//     //         title: "Alert!",   
//     //         text: "Please add at least one record.",   
//     //         timer: 2000,   
//     //         showConfirmButton: false 
//     //     })
//     });


//submit
$('#addPostForm').on('submit', function (e) {

    e.preventDefault();

    var title = $('#title').val().trim();
        var content = $('#content').val().trim();
        var featured = $('#featured option:selected').text().trim();
        var choice = $('#choice option:selected').text().trim();
        var thread = $('#thread option:selected').text().trim();
        var id_category = $('#id_category option:selected').text().trim();
        // var photo = $('#photo option:selected').val().trim();
        var is_active = $('#is_active').val().trim();

    var formdata = {
                title:title,
                content:content,
                featured:featured,
                choice:choice,
                thread:thread ,
                id_category:id_category ,
                // photo:photo,
                is_active:is_active
            
                };

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
                                       
                     } else {
                
                        swal("Good job!", response.msg, "error");
                
                 }

            }

        });
    }
});




  
  $('#cancleaddPostPage').click(function () {

    $(location).attr('href',ebase_url+'addPost');
     
    
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



