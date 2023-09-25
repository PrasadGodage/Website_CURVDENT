let categoryList = new Map();
let postList = new Map();
// console.log("baseUrl"+ebase_url);

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

// Category table show on blog_page
function setCategoryList1(list) {
    // console.log(list);

    $('#uiList1').empty();
    var ulData = '';

    for (let k of list.keys()) {

        let category = list.get(k);

        ulData += `<li>` + category.category_name + `</li>`;
    }

    $('#uiList1').html(ulData);
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
                // console.log(categoryList);
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

    // Add the title section outside the loop
    data1 += '<div class="main_title2"><h6 style="font-weight:bold;">All News About Blog</h6></div>';
    data2 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';

    for (let k of postList.keys()) {
        let post = postList.get(k);

        data1 += '<div class="row">';
        
        // Check if post.photo is not empty or falsy
        if (post.photo) {
            data1 += `
                <div class="col-md-5 p-4">
                    <div class="item">
                        <div class="position-re o-hidden">
                            <a href="blog_page" onclick="postDetails(${post.id})"><img src="${post.photo}" alt="" style="height: 185px;"></a>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // If post.photo is empty, provide a default image
            data1 += `
                <div class="col-md-5 p-4">
                    <div class="item">
                        <div class="position-re o-hidden">
                        <a href="blog_page" onclick="postDetails(${post.id})"><img src="${imageSrc}" alt="Default Image" style="height: 185px;"></a>
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
                            <a href="blog_page" onclick="postDetails(${post.id})">
                                <button type="button" class="btn btn-warning">Blog</button></a>
                            </div>
                            <div class="col-sm-4">
                            </div>
                            <div class="col-sm-4">
                                <i class="fa fa-calendar" aria-hidden="true"></i> ${post.date}
                            </div>
                            <div class="col-md-12">
                                <h5>${post.title}</h5>
                            </div>    
                            <div class="col-md-12">
                                <p>${post.content}</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>`;
        
        
    }

    let lastKey = null;

        for (let temp of postList.keys()) {
            lastKey = temp;
        }
        console.log(lastKey);
        let lastPost = postList.get(lastKey);

        data2 += `<div class="row">`;

        data2 += `<div class="col-md-12 p-4">
                    <div class="item">
                        <div class="media-body">
                            <div class="row">
                                <div class="col-sm-4"><button type="button" class="btn btn-warning">Contact</button></div>
                                <div class="col-sm-4"></div>
                                <div class="col-sm-4">
                                    <i class="fa fa-calendar" aria-hidden="true">${lastPost.date}
                                </div>
                                <div class="col-md-12">
                                    <h5>${lastPost.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${lastPost.content}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        `;

        data2 +=`<div class="main_title2"><h6 style="font-weight:bold;">Trending Now</h6></div>`;
        // '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';
        data2 +=`<div class="row">`;
        
        data2 +=`<div class="col-md-12 p-4">
                    <div class="item">
                        <div class="media-body">
                            <div class="row owl-carousel owl-theme">
                                <div class="box mb-0">
                                    <div class="col-md-12">
                                        <h5>${lastPost.title}</h5>
                                    </div>    
                                    <div class="col-md-12">
                                        <p>${lastPost.content}</p>
                                    </div>
                                </div>
                                <div class="box mb-0">
                                    <div class="col-md-12">
                                        <h5>${lastPost.title}</h5>
                                    </div>    
                                    <div class="col-md-12">
                                        <p>${lastPost.content}</p>
                                    </div>
                                </div>
                                <div class="box mb-0">
                                    <div class="col-md-12">
                                        <h5>${lastPost.title}</h5>
                                    </div>    
                                    <div class="col-md-12">
                                        <p>${lastPost.content}</p>
                                    </div>
                                </div>
                                <div class="box mb-0">
                                    <div class="col-md-12">
                                        <h5>${lastPost.title}</h5>
                                    </div>    
                                    <div class="col-md-12">
                                        <p>${lastPost.content}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `;

        data2 += `  <div class="main_title2"><h6 style=" font-weight:bold;"></h6></div>
                    <div class="main_title2"><h6 style=" font-weight:bold;">Social Network</h6></div>
            `;
        data2 += `  <div class="betty-sidebar-part">
                    <div class="betty-sidebar-block betty-sidebar-block-categories">
                    <div class="betty-sidebar-block-content">
            `;
        data2 +=`<h6>-- Skin/Hair Treatments --</h6>`;
        data2 +=`           <ul class="ul1" id="uiList">

                            </ul>
                        </div>
                    </div>
                </div>
            `;
        // data2 = `
        //             <div class="main_title2">
        //                 <h6 style="font-weight: bold;"></h6>
        //             </div>
        //             <div class="main_title2">
        //                 <h6 style="font-weight: bold;">Social Network</h6>
        //             </div>
        //             <div class="betty-sidebar-part">
        //                 <div class="betty-sidebar-block betty-sidebar-block-categories">
        //                     <div class="betty-sidebar-block-content">
        //                         <h6>-- Skin/Hair Treatments --</h6>
        //                         <ul class="ul1" id="uiList">
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        // `;

// Now 'data2' contains the formatted HTML structure


    $('#data1').html(data1);
    $('#data2').html(data2);
}


// Show data on Blog_page 
function setPostList1(postList) {
    console.log(postList);
    
    $('#data3').empty();
    $('#data4').empty();

    var data3 = '';
    var data4 = '';
    
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';

    // Add the title section outside the loop
    data3 += '<div class="main_title2"><h6 style="font-weight:bold;">All News About Blog</h6></div>';
    data4 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';

    let lastKey = null;

        let temp = postList.keys();
            // lastKey = temp;
        
        // console.log(lastKey);
        let lastPost = postList.get(temp);
   // for (let k of postList.keys()) {
     //   let post = postList.get(k);

        data3 +=`<div class="row">`;


        // Check if post.photo is not empty or falsy
        if (lastPost.photo) {
            data3 += `
                    <div class="col-md-12 p-4">
                        <div class="item">

                            <div class="position-re o-hidden"><img src= "${lastPost.photo}" alt="" style="height: 400px;"></div>

                        </div>
                    </div>
                
            `;
        } else {
            // If post.photo is empty, provide a default image
            data3 += `
                    <div class="col-md-12 p-4">
                        <div class="item">

                            <div class="position-re o-hidden"><img src= "${imageSrc}" alt="" style="height: 400px;"></div>

                        </div>
                    </div>
                
            `;
        }

        // data3 +=`
        //     <div class="col-md-12 p-4">
        //         <div class="item">

        //             <div class="position-re o-hidden"><img src= "${post.photo}" alt="" style="height: 400px;"></div>

        //         </div>
        //     </div>
        // </div>
        // `;
                    
       // data3= `<div class="row">`;
        data3= `
                <div class="col-md-12 p-4">
                    <div class="item">
                        <div class="media-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <i class="fa fa-calendar" aria-hidden="true"></i>${lastPost.date}
                                </div>
            

                                <div class="col-md-12">
                                    <h5>${lastPost.title}</h5>
                                </div>  
                                <div class="col-md-12">
                                    <p>${lastPost.content}</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>

        `;
  //  }

  

  let lastKey1 = null;

  for (let temp of postList.keys()) {
      lastKey1 = temp;
  }
  console.log(lastKey1);
  let lastPost1 = postList.get(lastKey);

  data4 += `<div class="row">`;

  data4 += `<div class="col-md-12 p-4">
              <div class="item">
                  <div class="media-body">
                      <div class="row">
                          <div class="col-sm-4"><button type="button" class="btn btn-warning">Contact</button></div>
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                              <i class="fa fa-calendar" aria-hidden="true">${lastPost1.date}
                          </div>
                          <div class="col-md-12">
                              <h5>${lastPost1.title}</h5>
                          </div>    
                          <div class="col-md-12">
                              <p>${lastPost1.content}</p>
                          </div>
                      </div> 
                  </div>
              </div>
          </div>
      </div>
  `;

  data4 +=`<div class="main_title2"><h6 style="font-weight:bold;">Trending Now</h6></div>`;
  // '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';
  data4 +=`<div class="row">`;
  
  data4 +=`<div class="col-md-12 p-4">
              <div class="item">
                  <div class="media-body">
                      <div class="row owl-carousel owl-theme">
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${lastPost.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${lastPost.content}</p>
                                </div>
                            </div>
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${lastPost.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${lastPost.content}</p>
                                </div>
                            </div>
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${lastPost.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${lastPost.content}</p>
                                </div>
                            </div>
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${lastPost.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${lastPost.content}</p>
                                </div>
                            </div>
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>

  
  
      `;

      data4 += `  <div class="main_title2"><h6 style=" font-weight:bold;"></h6></div>
                  <div class="main_title2"><h6 style=" font-weight:bold;">Social Network</h6></div>
          `;
      data4 += `  <div class="betty-sidebar-part">
                  <div class="betty-sidebar-block betty-sidebar-block-categories">
                  <div class="betty-sidebar-block-content">
          `;
      data4 +=`<h6>-- Skin/Hair Treatments --</h6>`;
      data4 +=`           <ul class="ul1" id="uiList">

                          </ul>
                      </div>
                  </div>
              </div>
          `;


    $('#data3').html(data3);
    $('#data4').html(data4);
}

function postDetails(id){
    
    $.ajax({
        
        url: ebase_url+'blogpage_api/' +id,

        type: 'GET',
        
        async:false,
        
        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.length != 0) {
                    // for (var i = 0; i < response.data.length; i++) {
                        postList.set(response.data[0].id, response.data[0]);
                        // $('#paragraph1').text(response.data[i].content);
                        // }
                        
                    }
                // setPostList(postList);
                setPostList1(postList);
                // console.log(postList);
            }
            
        }
        
    });
    // $(location).attr('href',ebase_url+'blog_page');
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