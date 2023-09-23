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

// Category table show on blog_page
function setCategoryList1(list) {
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

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        categoryList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setCategoryList(categoryList);
                setCategoryList1(categoryList);
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

    $('#data1').empty();
    // $('#heading1').empty();
    // $('#p1').empty();
    // $('#div1').empty();
    // var image = '';
    // var heading = '';
    // var paragraph = '';
    // var date1 = '';
    var data1 = '';

    for (let k of postList.keys()) {

        let post = postList.get(k);


        // heading += `<h5>` + post.title + `</h5>`;

        // date1 += `<i class="fa fa-calendar" aria-hidden="true"></i>`+ post.date +``;

        // image += `<a href="blog_page"><img src= ${post.photo} alt="" style="height: 185px;"></a>`;

        // paragraph += `<p>` + post.content + `</p>`;
        data1 =`
        
            <div class="main_title2"><h6 style=" font-weight:bold;">All News About Blog</h6></div>
            <div class="row">
                <div class="col-md-5 p-4">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <a href="blog_page"><img src= ${post.photo} alt="" style="height: 185px;"></a>
                        </div>
                    </div>
                </div>

                <div class="col-md-7 p-4">
                    <div class="item">
                        <div class="media-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <a  href="blog_page">
                                    <button type="button" class="btn btn-warning">Blog</button></a>
                                </div>
                                <div class="col-sm-4">
                                </div>
                                <div class="col-sm-4">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>`+ post.date +`
                                </div>
                                <div class="col-md-12">
                                    <h5>` + post.title + `</h5>
                                </div>    
                                <div class="col-md-12" href="blog_page">
                                    <p>` + post.content + `</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
    $('#data1').html(data1);


    // $('#div1').html(image);
    // $('#p1').html(paragraph);
    // $('#heading1').html(heading);
    // $('#div2').html(date1);

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