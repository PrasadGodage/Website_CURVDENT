let categoryList = new Map();
let postList = new Map();
console.log("baseUrl"+ebase_url);

// category table show
function setCategoryList(list) {
    console.log(list);

    $('#uiList').empty();
    var ulData = '';

    for (let k of list.keys()) {

        let category = list.get(k);

        ulData += `<li>` + category.category_name + `</li>`;
    }

    $('#uiList').html(ulData);
}

// get category data
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

                if (response.data.length != 0) {
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
                        // $('#paragraph1').text(response.data[i].content);
                    }
                    
                }
                setPostList(postList);
                console.log(postList);
            }

        }
        
    });
}
getPostList();

function setPostList(postList){

    console.log(postList);

    $('#div1').empty();
    var divData = '';

    for (let k of postList.keys()) {

        let post = postList.get(k);

        divData += `<a href="blog_page"><img src= ${post.photo} alt="" style="height: 185px;">`;
    }

    $('#div1').html(divData);


   /* $('#p1').empty();
    var heading = '';

    for (let k of postList.keys()) {

        let post = postList.get(k);

        heading += `<h5>` + post.title + `</h5>`;
    }
    
    for (let k of postList.keys()) {

        let post = postList.get(k);

        paragraph += `<p>` + post.content + `</p>`;
    }

    $('#p1').html(paragraph);*/
}