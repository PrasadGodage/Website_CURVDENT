let categoryList = new Map();
let postList = new Map();


console.log(id);

function getPostData(){
    
    $.ajax({
        
        url: ebase_url+'blogpage_api/'+id,

        type: 'GET',
        
        async:false,
        
        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.length != 0) {
                    // for (var i = 0; i < response.data.length; i++) {
                        setPostList1(response.data[0]);
                        // $('#paragraph1').text(response.data[i].content);
                        // }
                        
                    }
                // setPostList(postList);
                // setPostList1(postList);
                // console.log(postList);
            }
            
        }
        
    });
}
getPostData();

function getAllPostList() {
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
                setAllPostList(postList);
                // setPostList1(postList);
                // console.log(postList);
            }

        }
        
    });
}
getAllPostList();


function setAllPostList(list){
    $('#data4').empty();
    var data4 = '';
    
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc1 = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc2 = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc3 = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc4 = ebase_url + '/uiAssets/img/dummy.jpg';
    
    data4 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';

    let firstKey = null;

        for (let temp of list.keys()) {
            firstKey = temp;
            break; // Exit the loop after the first iteration
        }
        // console.log(lastKey);
        let firstPost = list.get(firstKey);

    data4 += `<div class="row">`;

    data4 += `<div class="col-md-12 p-4">
                <div class="item">
                    <div class="media-body">
                        <div class="row">
                            <div class="col-sm-6">
                            <a href="#" onclick="postDetails(${firstPost.id})">
                                <button type="button" class="btn btn-warning">Latest Blog</button></a>
                            </div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-6">
                                <i class="fa fa-calendar" aria-hidden="true"></i>${firstPost.date}
                            </div>
                            <div class="col-md-12">
                                <h5>${firstPost.title}</h5>
                            </div>    
                            <div class="col-md-12 content">
                                <p>${firstPost.content}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    `;

    let firstFourKeys = [];
        let count = 0;

        for (let temp of postList.keys()) {
            firstFourKeys.push(temp);
            count++;

            if (count === 4) {
                break;
            }
        }
        const firsKey = firstFourKeys[0];
        const secondKey = firstFourKeys[1];
        const thirdKey = firstFourKeys[2];
        const fourthKey = firstFourKeys[3];
        // for (let i = 0; i < firstFourKeys.length; i++) {
        //     const fourKeys = firstFourKeys[i];
        //     console.log('Key:', fourKeys);
        // }
        
        let firsPost = postList.get(firsKey);
        let secondPost = postList.get(secondKey);
        let thirdPost = postList.get(thirdKey);
        let fourthPost = postList.get(fourthKey);

        if (firsPost.photo!='') {
            imageSrc1 = ebase_url+firsPost.photo;
        }
        if (secondPost.photo!='') {
            imageSrc2 = ebase_url+secondPost.photo;
        }
        if (thirdPost.photo!='') {
            imageSrc3 = ebase_url+thirdPost.photo;
        }
        if (fourthPost.photo!='') {
            imageSrc4 = ebase_url+fourthPost.photo;
        }


    data4 +=`<div class="main_title2"><h6 style="font-weight:bold;">Trending Now</h6></div>`;
    // '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';
    data4 +=`<div class="row">`;
    
    data4 +=`<div class="col-md-12 p-4">
                <div class="item">
                    <div class="media-body">
                        <div class="row owl-carousel owl-theme">
                        <div class="box mb-0">
                        <div class="col-md-12 ">
                            <img src="${imageSrc1}" alt="Default Image" style="width: 150px; height: 150px; object-fit: cover;  image-rendering: pixelated; filter: none;">
                        </div>
                        <div class="col-md-12 content1">
                            <h5>${firsPost.title}</h5>
                        </div>
                    </div>
                    <div class="box mb-0">
                        <div class="col-md-12 ">
                                <img src="${imageSrc2}" alt="Default Image" style="width: 150px; height: 150px; object-fit: cover;  image-rendering: pixelated; filter: none;">
                        </div>
                        <div class="col-md-12 content1">
                            <h5>${secondPost.title}</h5>
                        </div>
                    </div>
                    <div class="box mb-0">
                        <div class="col-md-12 ">
                                <img src="${imageSrc3}" alt="Default Image" style="width: 150px; height: 150px; object-fit: cover;  image-rendering: pixelated; filter: none;">
                        </div>
                        <div class="col-md-12 content1">
                            <h5>${thirdPost.title}</h5>
                        </div>    
                    </div>
                    <div class="box mb-0">
                        <div class="col-md-12 ">
                                <img src="${imageSrc4}" alt="Default Image" style="width: 150px; height: 150px; object-fit: cover;  image-rendering: pixelated; filter: none;">
                        </div>
                        <div class="col-md-12 content1">
                            <h5>${fourthPost.title}</h5>
                        </div>    
                    </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
    
        `;

    data4 += `  <div class="main_title2"><h6 style=" font-weight:bold;">-- Skin/Hair Treatments --</h6></div>`;
  
    data4 += `  <div class="betty-sidebar-part">
                <div class="betty-sidebar-block betty-sidebar-block-categories">
                <div class="betty-sidebar-block-content">
        `;
    // data4 +=`<h6>-- Skin/Hair Treatments --</h6>`;
    data4 +=`           <ul class="ul1" id="uiList">

                        </ul>
                    </div>
                </div>
            </div>
        `;

    $('#data4').html(data4);

}

function setPostList1(postList) {
    console.log(postList.photo);
    
    $('#data3').empty();

    var data3 = '';
    
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';

    // Add the title section outside the loop
    data3 += '<div class="main_title2"><h6 style="font-weight:bold;">All News About Blog</h6></div>';
    
        data3 +=`<div class="row">`;

        // Check if post.photo is not empty or falsy
        if (postList.photo!='') {
            imageSrc = ebase_url+postList.photo;
        }
            // If post.photo is empty, provide a default image
            data3 += `
                    <div class="col-md-12 p-4 betty-about-img">
                        <div class="item">
                            <div class="position-re o-hidden img">
                                <img src= "${imageSrc}" alt="" style="height: 400px;">
                            </div>
                        </div>
                    </div>
                </div>
            `;
        

        data3 += `<div class="row">`;
        data3 += `
                <div class="col-md-12 p-4">
                    <div class="item">
                        <div class="media-body">
                            <div class="row">
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>${postList.date}
                                </div>

                                <div class="col-md-12">
                                    <h5>${postList.title}</h5>
                                </div>  
                                <div class="col-md-12">
                                    <p>${postList.content}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

        `;

    $('#data3').html(data3);
}

// category table show
function setCategoryList(list) {
    // console.log(list);

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
                console.log(categoryList);
            }

        }
        
    });
}
getCategoryList();

function goHome(){
    $(location).attr('href',ebase_url+'home');
}
function goService(){
    $(location).attr('href',ebase_url+'services');
}
function goBlog(){
    $(location).attr('href',ebase_url+'blog');
}
function goLogin(){
    $(location).attr('href',ebase_url+'employeeLogin');
}

$(function () {
    "use strict";

    /* owl-carousel SLIDER */
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			responsiveClass: true,
			autoplay: true,
			responsive: {
			  0: {
				items: 1,
				nav: false
			  },
			  600: {
				items: 3,
				nav: false
			  },
			  1000: {
				items: 2,
				nav: true,
				margin: 20
			  }
			}
		});
	
  }); // End of use strict