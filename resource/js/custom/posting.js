let postList = new Map();

$('#addPostBtn').click(function () {

    $(location).attr('href',ebase_url+'addPost');
     
    
 });

function getClientList() {
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
            }

        }

    });
}
getClientList();


// client table show
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
            
            </td>
            
    </tr>`;
    index++;
}

$('#postList').html(tblData);
$('#postTable').DataTable();
}


// Updte Posting Details----------------------------------------------------------------------------------------
function updatePostDetails(id) {
   
         $(location).attr('href',ebase_url+'addPost');


      // Updte Posting Details----------------------------------------------------------------------------------------
// function updatePostDetails(id) {
    let post = postList.get(id.toString());
    //clear all fields
    if (post) {
    $('#id').val('');
    $('#title').val('');
    $('#featured').val('');
    $('#choice').val('');
    $('#thread').val('');
    $('#category_name').val('');
    $('#is_active').val('');
    $('#date').val('');
    $('#photo').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(post.id);
    $('#title').val(post.title);
    $('#featured').val(post.featured);
    $('#choice').val(post.choice);
    $('#thread').val(post.thread);
    $('#category_name').val(post.category_name);
    $('#is_active').val(post.is_active);
    $('#date').val(post.date);
    $('#photo').val(post.photo);
    // $('#addCategoryModal').modal('toggle');
} else {
    console.error('Post not found with ID: ' + id);
}
}
         
// success: function (response) {
//     let post=response.data[0];
     
//     if (response.status == 200) {
//         $('#id').val('');
//             $('#title').val('');
//             $('#featured').val('');
//             $('#choice').val('');
//             $('#thread').val('');
//             $('#category_name').val('');
//             $('#is_active').val('');
//             $('#date').val('');
//             $('#photo').val('');
//             $('.error').text('');
    
//         //set details
//         $('#id').val(post.id);
//             $('#title').val(post.title);
//             $('#featured').val(post.featured);
//             $('#choice').val(post.choice);
//             $('#thread').val(post.thread);
//             $('#category_name').val(post.category_name);
//             $('#is_active').val(post.is_active);
//             $('#date').val(post.date);
//             $('#photo').val(post.photo);
//             $('#addCategoryModal').modal('toggle');

        // $('#name').html(client.salutation + ` ` + client.firstName + ` ` + client.lastName);
        // console.log(client.industryId);
        // $('#industryId').val(client.industryId).change();
        

        //  (client.status == 1) ? $("#active").attr('checked', 'checked') : $("#inactive").attr('checked', 'checked');
        // $('#addClientModal').modal('toggle');
        
        //setClientList(clientList);
//     }

// }

// }

//Submit
$("#btn_save").click(function(e){

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

                    swal("ERROR!", response.msg, "error");

                }

            }

        });
    }
});