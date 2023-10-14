let categoryList = new Map();
let postList = new Map();
let updatepostId=id;
//  console.log('post Id2:'+updatepostId);
 console.log('post id='+id);




$('#addPostForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addPostForm").valid();
    var formdata = new FormData(this);
     console.log(formdata);
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

                console.log(response);

                if (response.status == 200) {
                    $('#addPostForm').modal('toggle');

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


function setPostList(list){
    console.log(list);
}
  

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



