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
