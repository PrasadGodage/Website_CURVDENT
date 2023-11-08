let postList = new Map();
let subscriberList = new Map();
let contactData = new Map();
let appointmentList = new Map();

const myStyles = `
    #nameError, #emailError, #phoneError, #subjectError, #messageError {
        color: red;
        padding: 10px;
    }
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = myStyles;
document.head.appendChild(styleElement);

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

$('#emailForm').on('submit', function (e) {

    e.preventDefault();

    // var returnVal = $("#emailForm").val();
    var formdata = new FormData(this);

     // Show the success message
    //  $("#message").fadeIn();

      // Clear the input field (optional)
    //   $("#email").val('');

     // Hide the success message after 3 seconds (adjust the time as needed)
    //  setTimeout(function () {
    //     $("#message").fadeOut();
    // }, 8000);

    // if (email) {
    //     // Show the success message
    //     $("#message").removeClass("alert-danger").addClass("alert-success");
    //     $("#message").text("Your message was sent successfully.");
    //     $("#message").fadeIn();

    //     // Clear the input field
    //     $("#email").val('');
    // } else {
    //     // Display an error message if the email field is empty (optional)
    //     $("#message").removeClass("alert-success").addClass("alert-danger");
    //     $("#message").text("Email field cannot be empty.");
    //     $("#message").fadeIn();
    // }


    // if (returnVal) {
        $.ajax({

            url: ebase_url+'newsletterUi_api',

            type: 'POST',

            // headers: {
            //     "Authorization": etoken
            // },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    // Show success message
                    // $("#successMessage").fadeIn();
                    $("#message").fadeIn();
                    // Clear the input field
                     $("#newsemail").val('');

                    setTimeout(function () {
                        $("#message").fadeOut();
                    }, 8000);
                    
                    // Hide the success message after a few seconds (optional)
                    // setTimeout(function() {
                    //     $("#successMessage").fadeOut();
                    // }, 3000); // Hide after 3 seconds
                // } else {
                //     // Handle error
                //     swal("Error", response.msg, "error");
                 }
            }
        });

    // }
});

$('#contactForm').on('submit', function (e) {

    e.preventDefault();

    var flag = false;

    if ($('#fname').val().trim() === '' || $('#fname').val().trim() === null){
        $('#nameError').text('Please enter name');
        flag=false;
    }else if($('#mail').val().trim() === '' || $('#mail').val().trim() === null){
        $('#emailError').text('Please enter email');
        flag=false;
    }else if($('#mobile').val().trim() === '' || $('#mobile').val().trim() === null){
        $('#phoneError').text('Please enter phone');
        flag=false;
    }else if($('#sub').val().trim() === '' || $('#sub').val().trim() === null){
        $('#subjectError').text('Please enter subject');
        flag=false;
    }else if($('#msg').val().trim() === '' || $('#msg').val().trim() === null){
        $('#messageError').text('Please enter message');
        flag=false;
    }
    else{
        flag=true;
    }

    if(flag){

        
        // var returnVal = $("#contactForm").val();
        var formdata = new FormData(this);

        // Show the success message
        $("#contactMsg").fadeIn();

        // Clear the input field (optional)
        $("#fname").val('');
        $("#mail").val('');
        $("#mobile").val('');
        $("#sub").val('');
        $("#msg").val('');

        // Hide the success message after 3 seconds (adjust the time as needed)
        setTimeout(function () {
            $("#contactMsg").fadeOut();
        }, 8000);

        // if (returnVal) {
            $.ajax({

                url: ebase_url+'sendEmail_api',

                type: 'POST',

                data: formdata,

                cache: false,

                contentType: false,

                processData: false,

                dataType: 'json',

                success: function (response) {
                    if (response.status == 200) {
                        // Show success message
                        swal("Good job!", response.msg, "success");
                        
                    } else {
                        // Handle error
                        swal("Error", response.msg, "error");
                    }
                }
            });

        // }
    }
});

//  Remove validation text
$("#fname").click(function() {
    $("#nameError").text("");
});
$("#mail").click(function() {
    $("#emailError").text("");
});
$("#mobile").click(function() {
    $("#phoneError").text("");
});
$("#sub").click(function() {
    $("#subjectError").text("");
});
$("#msg").click(function() {
    $("#messageError").text("");
});
// Contact length validation 
$("#mobile").on("input", function() {
    var contactValue = $(this).val().trim();
    var desiredLength = 10;
    
    if (contactValue.length === desiredLength) {
        $("#phoneError").text(""); // Clear any previous messages
    } else {
        $("#phoneError").text("Mobile No. must be 10 digits.");
    }
});
// Contact No. space remove
$("#mobile").on("input", function() {
    var inputValue = $(this).val();
    var newValue = inputValue.replace(/\s/g, ''); // Remove all spaces
    
    $(this).val(newValue);
});
$("#mobile").on("input", function() {
    var sanitizedValue = $(this).val().replace(/\D/g, ''); // Remove non-digits
    $(this).val(sanitizedValue);
});

$('#sendform').on('submit', function (e) {
    e.preventDefault();

    var formdata = new FormData(this);

    // Get the date and time values from the input fields
    var date = $("#date").val();
    var time = $("#time").val();

    // Add the date and time to the formdata
    formdata.append('date', date);
    formdata.append('time', time);
    
    // Make the AJAX request with date and time included in formdata
    $.ajax({
        url: ebase_url + 'appointmentUi_api',
        type: 'POST',
        data: formdata,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
            if (response.status == 200) {
                // Show success message
                $("#appointmentMsg").fadeIn();
                
                // Clear the input fields (optional)
                // $("#email").val('');
                $("#fullName").val('');
                $("#contactNo").val('');
                $("#email").val('');
                $("#address").val('');
                $("#date").val('');
                $("#time").val('');
                // Hide the success message after a few seconds (optional)
                setTimeout(function() {
                    $("#appointmentMsg").fadeOut();
                }, 8000);
            }
        }
    });
});




//import clientValidation script
// var mailValidation = document.createElement('script');
// mailValidation.src = ebase_url + 'resource/js/custom/mailValidation.js';
// mailValidation.setAttribute("type", "text/javascript");
// document.head.appendChild(mailValidation);