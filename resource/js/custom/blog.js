let categoryList = new Map();
let postList = new Map();

const numberPerPage = 5;
const currentPage = 1;
const listArray = [];
// console.log("baseUrl"+ebase_url);


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
                setPaginator(postList);
                // setPostList1(postList);
                // console.log(postList);
            }

        }
        
    });
}
getPostList();

function setPostList(postList) {
    // console.log(postList);

    $('#data1').empty();
    $('#data2').empty();
    var data1 = '';
    var data2 = '';
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc1 = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc2 = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc3 = ebase_url + '/uiAssets/img/dummy.jpg';
    var imageSrc4 = ebase_url + '/uiAssets/img/dummy.jpg';
    
    // Add the title section outside the loop
  
    
    
    for (let k of postList.keys()) {
        let post = postList.get(k);

        data1 += '<div class="row">';
        
        // Check if post.photo is not empty or falsy
        if (post.photo) {
            data1 += `
                <div class="col-md-5 p-4 betty-about-img">
                    <div class="item">
                        <div class="position-re o-hidden img">
                            <a href="#" onclick="postDetails(${post.id})">
                            <img src="${post.photo}" alt="" style="width: 230px; height: 180px; object-fit: cover; image-rendering: pixelated; filter: none;">
                            </a>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // If post.photo is empty, provide a default image
            data1 += `
                <div class="col-md-5 p-4 betty-about-img">
                    <div class="item">
                        <div class="position-re o-hidden img">
                            <a href="#" onclick="postDetails(${post.id})">
                                <img src="${imageSrc}" alt="Default Image" style="width: 230px; height: 180px; object-fit: cover;  image-rendering: pixelated; filter: none;">
                            </a>
                        </div>                    
                    </div>
                </div>
            `;
        }
    
        data1 += `
            <div class="col-md-7 p-4">
                <div class="item">
                    <div class="media-body">
                        <div class="row">
                            <div class="col-sm-4">
                            </div>
                            <div class="col-sm-4">
                            </div>
                            <div class="col-sm-4">
                                <i class="fa fa-calendar" aria-hidden="true"></i> ${post.date}
                            </div>
                            <div class="col-md-12">
                                <h5>${post.title}</h5>
                            </div>    
                            <div class="col-md-12 content">
                                <p>${post.content}</p>
                            </div>
                            <div class="col-sm-4">
                            <a href="#" onclick="postDetails(${post.id})">
                                <button type="button" class="btn btn-warning" style="margin-top : 10px;">Read More</button></a>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>`;
        
           
    }
   
        data2 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';
        let firstKey = null;

        for (let temp of postList.keys()) {
            firstKey = temp;
            break; // Exit the loop after the first iteration
        }
        // console.log(lastKey);
        let firstPost = postList.get(firstKey);

        data2 += `<div class="row">`;

        data2 += `<div class="col-md-12 p-4">
                    <div class="item">
                        <div class="media-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <a href="#" onclick="postDetails(${firstPost.id})">
                                    <button type="button" class="btn btn-warning" style="margin-top : 10px;">Latest Blog</button></a>
                                </div>
                                <div class="col-sm-2"></div>
                                <div class="col-sm-4">
                                    <i class="fa fa-calendar" aria-hidden="true">${firstPost.date}
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
        

        data2 +=`<div class="main_title2"><h6 style="font-weight:bold;">Trending Now</h6></div>`;
        // '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';
        data2 +=`<div class="row">`;
        
        data2 +=`<div class="col-md-12 p-4">
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



            `;

        data2 += `  <div class="main_title2"><h6 style=" font-weight:bold;">-- Skin/Hair Treatments --</h6></div>`;
        // data2 +=`<h6>-- Skin/Hair Treatments --</h6>`;
        
        data2 += `  <div class="betty-sidebar-part">
                    <div class="betty-sidebar-block betty-sidebar-block-categories">
                    <div class="betty-sidebar-block-content">
            `;
        
        data2 +=`           <ul class="ul1" id="uiList">

                            </ul>
                        </div>
                    </div>
                </div>
            `;
        

    // $('#data1').html(data1);
    $('#data2').html(data2);
    // setPaginator(data1);

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
                // console.log(categoryList);
            }

        }
        
    });
}
getCategoryList();

function postDetails(id){
    
    $(location).attr('href',ebase_url+'blog_page/'+id);
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


 
//Paginator script
function setPaginator(postList){
   //Get total number of pages
   var data1 = '';
   var count = 0;
   for (let k of postList.keys()) {
       let post = postList.get(k);
        if(count == 0 || count==5) {
       data1 += '<div class="main_title2"><h6 style="font-weight:bold;">All News About Blog</h6></div>';
        }
        count++;
       data1 += '<div class="row">';
       
       // Check if post.photo is not empty or falsy
       if (post.photo) {
           data1 += `
               <div class="col-md-5 p-4 betty-about-img">
                   <div class="item">
                       <div class="position-re o-hidden img">
                           <a href="#" onclick="postDetails(${post.id})">
                           <img src="${post.photo}" alt="" style="width: 230px; height: 180px; object-fit: cover; image-rendering: pixelated; filter: none;">
                           </a>
                       </div>
                   </div>
               </div>
           `;
       } else {
           // If post.photo is empty, provide a default image
           data1 += `
               <div class="col-md-5 p-4 betty-about-img">
                   <div class="item">
                       <div class="position-re o-hidden img">
                           <a href="#" onclick="postDetails(${post.id})">
                               <img src="${imageSrc}" alt="Default Image" style="width: 230px; height: 180px; object-fit: cover;  image-rendering: pixelated; filter: none;">
                           </a>
                       </div>                    
                   </div>
               </div>
           `;
       }
   
       data1 += `
           <div class="col-md-7 p-4">
               <div class="item">
                   <div class="media-body">
                       <div class="row">
                           <div class="col-sm-4">
                           </div>
                           <div class="col-sm-4">
                           </div>
                           <div class="col-sm-4">
                               <i class="fa fa-calendar" aria-hidden="true"></i> ${post.date}
                           </div>
                           <div class="col-md-12">
                               <h5>${post.title}</h5>
                           </div>    
                           <div class="col-md-12 content">
                               <p>${post.content}</p>
                           </div>
                           <div class="col-sm-4">
                           <a href="#" onclick="postDetails(${post.id})">
                               <button type="button" class="btn btn-warning" style="margin-top : 10px;">Read More</button></a>
                           </div>
                       </div> 
                   </div>
               </div>
               
           </div>
       </div>`;
       
       listArray.push(data1); 
       data1 = '';
   }
   
  

console.log(listArray)

// State
// Number of products
const numberOfItems = listArray.length
console.log(numberOfItems);

// Number of pages
numberOfPages = Math.ceil(numberOfItems/numberPerPage)
buildPage(1)
    buildPagination(currentPage)

    $('.paginator').on('click', 'button', function() {
        var clickedPage = parseInt($(this).val())
        buildPagination(clickedPage)
        console.log(`Page clicked on ${clickedPage}`)
        buildPage(clickedPage)
    });

}
function accomodatePage(clickedPage) {
    if (clickedPage <= 1) { return clickedPage + 1}
    if (clickedPage >= numberOfPages) { return clickedPage -1}
    return clickedPage
}
function buildPagination(clickedPage) {
    $('.paginator').empty()
    const currPageNum = accomodatePage(clickedPage)
    if (numberOfPages >= 3) {
        for (let i=-1; i<2; i++) {
            $('.paginator').append(`<button class="btn btn-primary" value="${currPageNum+i}">${currPageNum+i}</button>`)
        }
    } else {
        for (let i=0; i<numberOfPages; i++) {
            $('.paginator').append(`<button class="btn btn-primary" value="${i+1}">${i+1}</button>`)
        }
    }
}
function buildPage(currPage) {
    const trimStart = (currPage-1)*numberPerPage
    const trimEnd = trimStart + numberPerPage
    console.log(trimStart, trimEnd)
    console.log(listArray.slice(trimStart, trimEnd))
    $('.contentTest').empty().append(listArray.slice(trimStart, trimEnd))
    // $('.grid-uniform').empty().append(listArray.slice(trimStart, trimEnd));
}
$(document).ready(function(){
    // alert("in page");
}); //End Paginator script