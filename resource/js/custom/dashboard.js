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
                $("#newsletterConut").text(NewsletterConut); // Use .text() to set the content
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



});

