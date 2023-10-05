let postList = new Map();
let subscriberList = new Map();

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
            }

        }
        
    });
}
getAllPostList();

function setAllPostList(list){

    $('#data6').empty();
    $('#data7').empty();
    $('#data8').empty();
    var data6 = '';
    var data7 = '';
    var data8 = '';
    
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';
    // data6 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';

    let firstKey = null;

    for (let temp of list.keys()) {
        firstKey = temp;
        break; // Exit the loop after the first iteration
    }
    // console.log(lastKey);
    let firstPost = list.get(firstKey);

    if (firstPost.photo!='') {
        imageSrc = ebase_url+firstPost.photo;
    }

    data6 +=`<div class="betty-about-img">
                <a  href="#" onclick="postDetails(${firstPost.id})">
                    <div class="img"> <img src="${imageSrc}" alt="" width="300" height="250"> </div>
                </a>
            </div>
    `;


    data7 +=`<h6>${firstPost.title}</h6>`;
    data7 +=`
                <p>
                    ${firstPost.content}
                </p>
            
    `;

    data8 +=`
    
            <div class="col-md-5 mb-20 animate-box" data-animate-effect="fadeInUp"></div>
            <div class="col-md-3 mb-20 animate-box" data-animate-effect="fadeInUp">
                <a  href="#" onclick="postDetails(${firstPost.id})">
                    <button type="button" class="btn btn-warning" style="display: flex; justify-content: center; align-items: center;">Read More</button>
                </a>
            </div>
            <div class="col-md-4 mb-20 animate-box" data-animate-effect="fadeInUp">
               <a href="http://www.facebook.com/sharer.php?u=http://dev.curvdent.com/blog_page/7" target="_blank" class="fa fa-facebook"></a>
               <a href="https://twitter.com/intent/tweet?url=dev.curvdent.com/blog_page/7" target="_blank" class="fa fa-twitter"></a>
               <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://dev.curvdent.com/blog_page/7" title="Share by Email" target="_blank" class="fa fa-google"></a>
               <a href="https://www.linkedin.com/shareArticle?url=dev.curvdent.com/blog_page/7" target="_blank" class="fa fa-linkedin"></a>
               <a href="https://www.instagram.com" class="fa fa-instagram"></a>
               <a href="https://api.whatsapp.com/send?text=https://dev.curvdent.com/blog_page/7" data-action="share/whatsapp/share" target="_blank" class="fa fa-whatsapp"></a>  
            </div>
    `;
    
    

    $('#data6').html(data6);
    $('#data7').html(data7);
    $('#data8').html(data8);

}

function postDetails(id){
    
    $(location).attr('href',ebase_url+'blog_page/'+id);
}

// subscriber post

// $(document).ready(function() {
//     $("#emailForm").submit(function(e) {
//         e.preventDefault();
        
//         // Get the email address from the form
//         var email = $("#email").val();
        
//         // Create a FormData object to send data including active_value
//         var formData = new FormData(this);
//         formData.append("email", email);
//         formData.append("is_active", 1); // Set active_value to 1
        
//         $.ajax({
//             url: ebase_url + 'newsletter_api',
//             type: 'POST',
//             headers: {
//                 "Authorization": etoken
//             },
//             data: formData,
//             cache: false,
//             contentType: false,
//             processData: false,
//             dataType: 'json',
//             success: function (response) {
//                 if (response.status == 200) {
//                     // Handle success
//                     swal("Good job!", response.msg, "success");
//                 } else {
//                     // Handle error
//                     swal("Error", response.msg, "error");
//                 }
//             }
//         });
//     });
// });


// $('#contact-form').on('submit', function(e) {
//     console.log("Test");
//     e.preventDefault();  
//     var fData = new FormData(this);
//     alert(fData);
//     console.log("in Form data");
//     $.ajax({
//         url: 'email.php',
//         type: 'POST',
//         data: fData,
//         cache: false,
//         contentType: false,
//         processData: false,
//         success: function (response) {
//       console.log(response);
//       $("#contact-form")[0].reset();
//      alert("response as recorde");
//                          },
//          error: function (request, status, error) {
// console.log(request.responseText);
// console.log(status);
// }
//     });
// });



$('#emailForm').on('submit', function (e) {

    e.preventDefault();

    // var returnVal = $("#emailForm").val();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'newsletter_api',

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
                // Handle success
                swal("Good job!", response.msg, "success");
                    } else {
                    // Handle error
                swal("Error", response.msg, "error");
                }
            }
        });
    }
});
