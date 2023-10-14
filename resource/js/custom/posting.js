let categoryList = new Map();
let postList = new Map();
let newsLetterList = new Map();

//Submit Category Btn script

$('#addPostForm').on('submit', function (e) {
    e.preventDefault();

    //logic for send mail for blog

    $.ajax({

        url: ebase_url+'newsletter_api',

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
                        if (response.data[i].is_active == 1){
                            newsLetterList.set(response.data[i].id, response.data[i]);

                        }
                       console.log(newsLetterList); 
                    }
                    
                }
          }

        }
        
    });
   
    var emailList=Array.from(newsLetterList.values());
    var jsonString= JSON.stringify(emailList);
    var formdata1 = new FormData();
    formdata1.append("emailDetails",jsonString);

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
                    $('#addPostModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(postList.has(id)){
                    postList.delete(id);   
                 }
                 postList.set(id, response.data);
                 setPostList(postList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'posting');
                } else {

                    swal("Error!", response.msg, "error");

                }

            }

        });
    }
});


//Add Category Btn script -----------------------------------------------------------------
$('#addPostBtn').click(function () {
    $('#addPostModal').modal('toggle');
    $("#addPostForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    $('#otherdpre').attr('src','');
    $('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');

});


// get posting data
function getPostList() {
    $.ajax({

        url: ebase_url+'posting_api',

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
                        postList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setPostList(postList);
                console.log(postList);
            }

        }
        
    });
}
getPostList();


function setPostList(list) {

    $('#postTable').dataTable().fnDestroy();
    $('#postList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let post = list.get(k);
    
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + post.title + `</td>
                <td>` + post.category_name + `</td>
                <td>` + post.is_active + `</td>
                <td>` + post.date + `</td>
                <td> <a href="#" onclick="updatePostDetails(${post.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deletePostDetails(${post.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#postList').html(tblData);
    $('#postTable').DataTable();
    }


// ---------------------- delete data ---------------------------------------------
function deletePostDetails(id) {
    // Show a confirmation dialog using SweetAlert or JavaScript confirm
    // swal({
    //     title: 'Are you sure?',
    //     text: 'You won\'t be able to revert this!',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         // Send an AJAX request to delete the data
            $.ajax({
                url: ebase_url + 'posting_api/' + id, // Replace with your actual delete API endpoint
                type: 'DELETE',
                headers: {
                    "Authorization": etoken
                },
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                      
                        // Show a success message
                        swal("Good job!", response.msg, "success");
                    setTimeout(
                        $(location).attr('href',ebase_url+'posting'),
                         8000
                         )
                } else {

                    swal("Error!", response.msg, "error");

                }
                },
                // error: function () {
                //     // Handle the case where the AJAX request itself fails
                //     swal(
                //         'Error!',
                //         'Something went wrong!',
                //         'error'
                //     );
                // }
            });
        }
//     });
// }

           
// function refreshTable() {
//     $('#postTable').dataTable().fnDestroy();
//     $('#postList').empty();
//     var tblData = '';
//     var index=1;
    
//     for (let k of postList.keys()) {
        
//         let post = postList.get(k);
    
//         tblData += `
//         <tr>
//                 <td>` + index + `</td>
//                 <td>` + post.title + `</td>
//                 <td>` + post.featured + `</td>
//                 <td>` + post.choice + `</td>
//                 <td>` + post.thread + `</td>
//                 <td>` + post.category_name + `</td>
//                 <td>` + post.is_active + `</td>
//                 <td>` + post.date + `</td>
//                 <td> <a href="#" onclick="updatePostDetails(${post.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
//                 <a href="#" onclick="deletePostDetails(${post.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
//                 </td>
                
//         </tr>`;
//         index++;
//     }
    
//     $('#postList').html(tblData);
//     $('#postTable').DataTable();
// }



function updatePostDetails(id) {
    let post = postList.get(id.toString());
    
    // Clear all fields
    $('#id').val('');
    $('#title').val('');
    $('#content').val('');
    $('#featured').val('');
    $('#choice').val('');
    $('#thread').val('');
    $('#id_category').val('');
    $('#is_active').val('');
    $('#date').val('');
    $('#otherdpre').attr('src','');
    
    // Reset the image preview
    $('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');
    
    $('.error').text('');
    
    // Set details
    $('#id').val(post.id);
    $('#title').val(post.title);
    $('#content').val(post.content);
    $('#featured').val(post.featured).change();
    $('#choice').val(post.choice).change();
    $('#thread').val(post.thread).change();
    $('#id_category').val(post.id_category).change();
    $('#is_active').val(post.is_active).change();
    $('#date').val(post.date);
    (post.photo != null) ? $('#otherdpre').attr('src', ebase_url + post.photo) : '';

    // Show the updated post details in a modal
    $('#addPostModal').modal('toggle');
}

 //Get Category List 
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

    //import postingValidation script
var postingValidation = document.createElement('script');
postingValidation.src = ebase_url + 'resource/js/custom/postingValidation.js';
postingValidation.setAttribute("type", "text/javascript");
document.head.appendChild(postingValidation);