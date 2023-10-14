let postList = new Map();
let subscriberList = new Map();
let contactData = new Map();
let appointmentList = new Map();


$(document).ready(function() {
    $('.timepicker').timepicker({
        showInputs: true
    });
    
    // Handle the time selection event
    $('.timepicker').on('changeTime.timepicker', function(e) {
        // This function is called when a time is selected.
        // You can access the selected time using e.time.
        var selectedTime = e.time;
        
        // Now, you can do something with the selected time, like displaying it or further processing.
        console.log('Selected Time: ' + selectedTime);
    });
});

  //Date picker
  $('#datepicker').datepicker({
    autoclose: true
  });



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

// subscriber post

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


$(document).ready(function () {
    $("#emailForm").submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: "mail.php", // Replace with the path to your PHP script
            type: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function (response) {
                if (response.status === "success") {
                    $("#message").removeClass("alert-danger").addClass("alert-success").html(response.message).fadeIn();
                } else {
                    $("#message").removeClass("alert-success").addClass("alert-danger").html(response.message).fadeIn();
                }
            }
        });
    });
});



$('#emailForm').on('submit', function (e) {

    e.preventDefault();

    // var returnVal = $("#emailForm").val();
    var formdata = new FormData(this);

     // Show the success message
     $("#message").fadeIn();

      // Clear the input field (optional)
      $("#email").val('');

     // Hide the success message after 3 seconds (adjust the time as needed)
     setTimeout(function () {
        $("#message").fadeOut();
    }, 3000);

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
                    $("#successMessage").fadeIn();
                    
                    // Clear the input field
                    // $("#email").val('');
                    
                    // Hide the success message after a few seconds (optional)
                    setTimeout(function() {
                        $("#successMessage").fadeOut();
                    }, 3000); // Hide after 3 seconds
                // } else {
                //     // Handle error
                //     swal("Error", response.msg, "error");
                 }
            }
        });

    // }
});


// function SendEmailAjax(formData) {
//     // var contactList = Array.from(contactData.values());
//     console.log(formData);

//     // if (contactList != '' && contactList != null && contactList.length > 0) {
//         // var jsonString = JSON.stringify(contactList); // Corrected variable name from 'list' to 'contactList'
//         // var formdata = new FormData();
//         // formdata.append("mailDetails",jsonString);

//         $.ajax({
//             url: ebase_url + 'sendEmail_api',

//             type: 'POST',

//             data: formData,

//             cache: false,

//             contentType: false,

//             processData: false,

//             dataType: 'json',

//             success: function(response) {
//                 if (response.status == 200) {
//                     swal("Good job!", response.msg, "success");
//                 } else {
//                     swal("ERROR!", response.msg, "error");
//                 }
//             }
            
//         });
//     // } else {
//     //     swal("ERROR!", "No contact data available to send an email.", "error");
//     // }
// }

// // $("#submitMail").click(function(e){
// $('#contactForm').on('submit', function (e) {

//     e.preventDefault();
//     // Get form values
//     // var id = $('#id').val().trim();
//     var name = $('#fname').val().trim();
//     var email = $('#mail').val().trim();
//     var phone = $('#mobile').val().trim();
//     var subject = $('#subject').val().trim();
//     var message = $('#msg').val().trim();
           
//     var flag=true;

//     if (name === '' || name === null){
//         $('#nameError').text('Please enter name');
//         flag=false;
//     }else if(email === '' || email === null){
//         $('#emailError').text('Please enter email');
//         flag=false;
//     }else if(phone === '' || phone === null){
//         $('#phoneError').text('Please enter phone');
//         flag=false;
//     }else if(subject === '' || subject === null){
//         $('#subjectError').text('Please enter subject');
//         flag=false;
//     }else if(message === '' || message === null){
//         $('#messageError').text('Please enter message');
//         flag=false;
//     }
//     else{
//         flag=true;
//     }

//    if(flag){
//         // Create an object to store the form data
//         var formData = {

//             // id:id,
//             name:name,
//             email:email,
//             phone:phone,
//             subject:subject,
//             message:message
//         };
     
   
//         // contactData.set(contactData.size+1,formData);
         
//         $('#fname').val('');
//         $('#mail').val('');
//         $('#mobile').val('');
//         $('#subject').val('');
//         $('#msg').val('');   
    
//         // var contactList=Array.from(contactData.values());
//         // console.log(contactList);
//         SendEmailAjax(formData);

//     }
// });

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
        $("#alertMsg").fadeIn();

        // Clear the input field (optional)
        $("#fname").val('');
        $("#mail").val('');
        $("#mobile").val('');
        $("#sub").val('');
        $("#msg").val('');

        // Hide the success message after 3 seconds (adjust the time as needed)
        setTimeout(function () {
            $("#alertMsg").fadeOut();
        }, 3000);

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



// // Handle appointment form submission
// $('#appointment').click(function(e){
//     console.log("Hello");

//     e.preventDefault();

//     // var formData = $(this);
  

//     var patient_name = $('#fullName').val().trim();
//     var contact = $('#contactNo').val().trim();
//     var email = $('#email').val().trim();
//     var date = $('#date').val().trim();
//     var time = $('#time').val().trim();
//     var address = $('#address').val().trim();

// //     //var returnVal = $("#send-form").valid();
// //    // var formdata = new FormData(this);
// //    // console.log(formdata);

//     var formData = {

//         fullName:patient_name,
//         contactNo:contact,
//         email:email,
//         date:date,
//         time:time,
//         address:address,
//          };
//        console.log(formData);
//        var jsonString= JSON.stringify(formData);
//        console.log(jsonString);
     
//         $.ajax({

//             url: ebase_url+'appointmentUi_api', 

//             type: 'POST',

//             data: jsonString,
          
//             cache: false,

//             contentType: false,

//             processData: false,

//             dataType: 'json',

//             success: function (response) {
//                 if (response.status == 200) {
//                     swal("Good job!", response.msg, "success");                                
                       
//                 } else {

//                     swal("Error!", response.msg, "error");

//                 }

//             }

//         });
    

// });

$('#sendform').on('submit', function (e) {

    e.preventDefault();

    // var returnVal = $("#emailForm").val();
    var formdata = new FormData(this);

     // Show the success message
     $("#message").fadeIn();

      // Clear the input field (optional)
      $("#fullName").val('');
      $("#contactNo").val('');
      $("#email").val('');
      $("#address").val('');
      $("#date").val('');
      $("#time").val('');

     // Hide the success message after 3 seconds (adjust the time as needed)
     setTimeout(function () {
        $("#message").fadeOut();
    }, 3000);

    // if (returnVal) {
        $.ajax({

            url: ebase_url+'appointmentUi_api',

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
                    $("#successMessage").fadeIn();
                    
                    // Clear the input field
                    // $("#email").val('');
                    
                    // Hide the success message after a few seconds (optional)
                    setTimeout(function() {
                        $("#successMessage").fadeOut();
                    }, 3000); // Hide after 3 seconds
                // } else {
                //     // Handle error
                //     swal("Error", response.msg, "error");
                 }
            }
        });

    // }
});




//import clientValidation script
// var mailValidation = document.createElement('script');
// mailValidation.src = ebase_url + 'resource/js/custom/mailValidation.js';
// mailValidation.setAttribute("type", "text/javascript");
// document.head.appendChild(mailValidation);