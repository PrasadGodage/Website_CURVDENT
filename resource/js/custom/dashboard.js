let postList = new Map();
let newsletterList = new Map();
let subscriberList = new Map();
 
 // Function to show the success message
 function showSuccessMessage(message) {
    const successMessage = $("#successMessage");
    successMessage.text(message);
    successMessage.show();

    // Set a timeout to hide the message after a few seconds (optional)
    setTimeout(function () {
        successMessage.hide();
    }, 5000); // Message will hide after 5 seconds (5000 milliseconds)
}

// Trigger the success message when the page loads
$(document).ready(function () {
    // You can call showSuccessMessage with your success message here
    showSuccessMessage("Login successful! Welcome to the dashboard.");


// Get BLog API -----------------

function getPostList() {
    $.ajax({
        url: ebase_url+'posting_api',
        type: 'GET',
        async: false,
        headers: {
            "Authorization": etoken
        },
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        postList.set(response.data[i].id, response.data[i]);
                    }
                }
                var BolgCount = postList.size;
                console.log(BolgCount);
                $("#blogConut").text(BolgCount); // Use .text() to set the content
                setPostList(postList);
            }
        }
    });
}
getPostList();


// get posting data
function getNewsletterList() {
    $.ajax({
        url: ebase_url+'postNewsletter_api',
        type: 'GET',
        async: false,
        headers: {
            "Authorization": etoken
        },
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        newsletterList.set(response.data[i].id, response.data[i]);
                    }
                }
                var NewsletterConut = newsletterList.size;
                console.log(NewsletterConut);
                $("#newsletterCount").text(NewsletterConut); // Use .text() to set the content
            }
        }
    });
    }
    getNewsletterList();


    // get posting data
   // get subscriber data
function getSubscriberList() {
    $.ajax({
        url: ebase_url+'newsletter_api',
        type: 'GET',
        async: false,
        headers: {
            "Authorization": etoken
        },
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        subscriberList.set(response.data[i].id, response.data[i]);
                    }
                }
                var SubscriberCount = subscriberList.size;
                console.log(SubscriberCount);
                $("#subscriberCount").text(SubscriberCount); // Use .text() to set the content
            }
        }
    });
}
getSubscriberList();



function setPostList(postList) {
    // console.log(postList);

    $('#data1').empty();
    // $('#data2').empty();
    var data1 = '';
    // var data2 = '';
    // var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';
    // var imageSrc1 = ebase_url + '/uiAssets/img/dummy.jpg';
    // var imageSrc2 = ebase_url + '/uiAssets/img/dummy.jpg';
    // var imageSrc3 = ebase_url + '/uiAssets/img/dummy.jpg';
    // var imageSrc4 = ebase_url + '/uiAssets/img/dummy.jpg';
    
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

    $('#data1').html(data1);


}







});

