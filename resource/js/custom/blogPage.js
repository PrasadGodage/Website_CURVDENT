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

function setPostList1(postList) {
    console.log(postList.photo);
    
    $('#data3').empty();
    $('#data4').empty();

    var data3 = '';
    var data4 = '';
    
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';

    // Add the title section outside the loop
    data3 += '<div class="main_title2"><h6 style="font-weight:bold;">All News About Blog</h6></div>';
    data4 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';

    // let lastKey = null;

        // let temp = postList.keys();
            // lastKey = temp;
        
        // console.log(lastKey);
        // let lastPost = postList.get(temp);
   // for (let k of postList.keys()) {
     //   let post = postList.get(k);

     data3 += `<div class="row">`;

     // Check if post.photo is not empty or falsy
     if (post.photo) {
         data3 += `
             <div class="col-md-12 p-4">
                 <div class="item">
                     <div class="position-re o-hidden">
                         <img src="${post.photo}" alt="" style="height: 400px;">
                     </div>
                 </div>
             </div>
         `;
     } else {
         // If post.photo is empty, provide a default image
         data3 += `
             <div class="col-md-12 p-4">
                 <div class="item">
                     <div class="position-re o-hidden">
                         <img src="${imageSrc}" alt="" style="height: 400px;">
                     </div>
                 </div>
             </div>
         `;
     }
     
     data3 += `
         <div class="col-md-12 p-4">
             <div class="item">
                 <div class="media-body">
                     <div class="row">
                         <div class="col-sm-4"></div>
                         <div class="col-sm-4"></div>
                         <div class="col-sm-4">
                             <i class="fa fa-calendar" aria-hidden="true"></i>${post.date}
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
     
  //  }

  

//   let lastKey1 = null;

//   for (let temp of postList.keys()) {
//       lastKey1 = temp;
//   }
//   console.log(lastKey1);
//   let lastPost1 = postList.get(lastKey);

  data4 += `<div class="row">`;

  data4 += `<div class="col-md-12 p-4">
              <div class="item">
                  <div class="media-body">
                      <div class="row">
                          <div class="col-sm-4"><button type="button" class="btn btn-warning">Contact</button></div>
                          <div class="col-sm-4"></div>
                          <div class="col-sm-4">
                              <i class="fa fa-calendar" aria-hidden="true">${postList.date}
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

  data4 +=`<div class="main_title2"><h6 style="font-weight:bold;">Trending Now</h6></div>`;
  // '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';
  data4 +=`<div class="row">`;
  
  data4 +=`<div class="col-md-12 p-4">
              <div class="item">
                  <div class="media-body">
                      <div class="row owl-carousel owl-theme">
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${postList.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${postList.content}</p>
                                </div>
                            </div>
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${postList.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${postList.content}</p>
                                </div>
                            </div>
                            <div class="box mb-0">
                                <div class="col-md-12">
                                    <h5>${postList.title}</h5>
                                </div>    
                                <div class="col-md-12">
                                    <p>${postList.content}</p>
                                </div>
                            </div>
                            <div class="box mb-0">
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