let categoryList = new Map();
let postList = new Map();

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

                    swal("Good job!", response.msg, "error");

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
    // $('#otherdpre').attr('src', '<?php echo base_url("resource/images/avatar-custom.png"); ?>');

});


// get category data
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

                if (response.data.lenght != 0) {
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
                <td>` + post.featured + `</td>
                <td>` + post.choice + `</td>
                <td>` + post.thread + `</td>
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


    // $('#postTable').on('click', '.mdi-delete-circle', function () {
    //     // Get the parent row of the clicked delete button
    //     var row = $(this).closest('tr');
    //     // Extract the data ID from the row (you can use data attributes)
    //     var postId = row.data('id');

    //     // Perform the delete action (e.g., remove the row from the table)
    //     row.remove();

    //     // You can add an AJAX call here to delete the data from the server
    //     Swal.fire({
    //                 title: 'Are you sure?',
    //                 icon: 'warning',
    //                 showCancelButton: true,
    //                 confirmButtonColor: '#3085d6',
    //                 cancelButtonColor: '#d33',
    //                 confirmButtonText: 'Delete!'
    //                 }).then((result) => {
    //                 if (result.value) {

    //                 $.ajax({
    //                     url: ebase_url+'posting_api' + postId,
    //                     method: 'DELETE',
    //                     success: function (response) {
    //                         if (response.success) {
    //                             row.remove();
    //                             $('#modalPosting').modal('hide');
    //                             Swal.fire({
    //                                 icon: 'success',
    //                                 title: 'Success',
    //                                 showConfirmButton: true
    //                             });
    //                         } 
    //                         // else {
    //                         //     alert('Failed to delete the post.');
    //                         // }
    //                     },
    //                     error: function () {
    //                         // alert('An error occurred while deleting the post.');
    //                         $('#modalPosting').modal('hide');
    //                         Swal.fire({
    //                             icon: 'error',
    //                             title: 'Oops...',
    //                             text: 'Something Happened!',
    //                             showConfirmButton: true
    //                         });
    //                     }
    //                 });
    //             }
    //         });
    //     });
        
    $(document).ready(function () {
        // Attach a click event handler to the delete buttons
        $('#postTable').on('click', '.mdi-delete-circle', function () {
            // Get the parent row of the clicked delete button
            var row = $(this).closest('tr');
            // Extract the data ID from the row (you can use data attributes)
            var postId = row.data('id');
    
            // Show a confirmation dialog using SweetAlert
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete!'
            }).then((result) => {
                if (result.value) {
                    // Send an AJAX request to delete the data from the server
                    $.ajax({
                        url: ebase_url + 'posting_api/' + postId, // Include the postId in the URL
                        method: 'DELETE',
                        success: function (response) {
                            if (response.status == 200) {
                                // Remove the row from the table
                                row.remove();
                                // Close the modal if it's open
                                $('#modalPosting').modal('hide');
                                // Show a success message
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success',
                                    text: 'The post has been deleted.',
                                    showConfirmButton: true
                                });
                            } else {
                                // Handle the case where the server returns an error
                                // Show an error message using Swal or handle it differently
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',
                                    showConfirmButton: true
                                });
                            }
                        },
                        error: function () {
                            // Handle the case where the AJAX request itself fails
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                                showConfirmButton: true
                            });
                        }
                    });
                }
            });
        });
    });

    
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
    // $('#otherdpre').attr('src',base_url+'resource/images/avatar-custom.png');
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
    // $('#photo').attr(post.photo);

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
