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

        url: ebase_url+'blog_api',

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

        url: ebase_url+'blogpage_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.length != 0) {
                    // for (var i = 0; i < response.data.length; i++) {
                        postList.set(response.data[0].id, response.data[0]);
                        // $('#paragraph1').text(response.data[i].content);
                    // }
                    
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

    $('#heading1').empty();
    $('#p1').empty();
    $('#div1').empty();
    var image = '';
    var heading = '';
    var paragraph = '';
    var date1 = '';

    for (let k of postList.keys()) {

        let post = postList.get(k);


        heading += `<h5>` + post.title + `</h5>`;

        date1 += `<i class="fa fa-calendar" aria-hidden="true"></i>`+ post.date +``;

        image += `<a href="blog_page"><img src= ${post.photo} alt="" style="height: 185px;"></a>`;

        paragraph += `<p>` + post.content + `</p>`;
    }


    $('#div1').html(image);
    $('#p1').html(paragraph);
    $('#heading1').html(heading);
    $('#div2').html(date1);

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