let newsletterList = new Map();
let subscriberList = new Map();

//Submit Category Btn script

// $('#addNewsletterForm').on('submit', function (e) {
//     e.preventDefault();

//     var returnVal = $("#addNewsletterForm").valid();
//     var formdata = new FormData(this);
//     if (returnVal) {
     
//         $.ajax({

//             url: ebase_url+'postNewsletter_api',

//             type: 'POST',

//             headers: {
//                 "Authorization": etoken
//             },

//             data: formdata,
          
//             cache: false,

//             contentType: false,

//             processData: false,

//             dataType: 'json',

//             success: function (response) {
//                 if (response.status == 200) {
//                     $('#addNewsletterModal').modal('toggle');

//                     let id=response.data.id;
                  
//                  if(newsletterList.has(id)){
//                     newsletterList.delete(id);   
//                  }
//                  newsletterList.set(id, response.data);
//                  setNewsletterList(newsletterList);

//                     swal("Good job!", response.msg, "success");
//                     $(location).attr('href',ebase_url+'newsletter');
//                 } else {

//                     swal("Good job!", response.msg, "error");

//                 }

//             }

//         });
//     }
// });


$(document).ready(function() {
    $('#addNewsletterForm').submit(function(e) {
        e.preventDefault();

        var formData = new FormData($(this)[0]);

        $.ajax({
            url: ebase_url+'postNewsletter_api', // The server-side script to handle file upload
            type: 'POST',
            
            headers: {
            "Authorization": etoken
            },
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(response) {
                if (response.status == 200) {
                // Handle the response from the server, e.g., display a success message
                alert('PDF uploaded successfully!');
                }
            },
            error: function() {
                // Handle errors, if any
                alert('Error occurred while uploading PDF.');
            }
        });
    });
});


//Add Newsletter Btn script -----------------------------------------------------------------
$('#addNewsletterBtn').click(function () {
    $('#addNewsletterModal').modal('toggle');
    $("#addNewsletterForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    $('#PDF').attr('src','');
    $('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');

});


// get posting data
function getNewsletterList() {
    $.ajax({

        url: ebase_url+'postNewsletter_api',

        type: 'GET',

        async:false,

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
                setNewsletterList(newsletterList);
                console.log(newsletterList);
            }

        }
        
    });
}
getNewsletterList();


function setNewsletterList(list) {

    $('#newsletterTable').dataTable().fnDestroy();
    $('#newsletterList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let newsletter = list.get(k);
    
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + newsletter.title + `</td>
                <td>` + newsletter.date + `</td>
                <td> <a href="#" onclick="updateNewsletterDetails(${newsletter.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deleteNewsletterDetails(${newsletter.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                <a href="#" onclick="sendEmailDetails()">Sent<i class="fa fa-fw fa-arrow-right" style="font-size: 20px;"></i></a>
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#newsletterList').html(tblData);
    $('#newsletterTable').DataTable();
    }


// ---------------------- delete data ---------------------------------------------
function deleteNewsletterDetails(id) {
    // Show a confirmation dialog using SweetAlert or JavaScript confirm
    // swal({
    //     title: 'Are you sure?',
    //     text: 'You won\'t be able to revert this!',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         // Send an AJAX request to delete the data
            $.ajax({
                url: ebase_url + 'postNewsletter_api/' + id, // Replace with your actual delete API endpoint
                type: 'DELETE',
                headers: {
                    "Authorization": etoken
                },
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                      
                        // Show a success message
                        swal("Good job!", response.msg, "success");
                    setTimeout(
                        $(location).attr('href',ebase_url+'newsletter'),
                         8000
                         )
                } else {

                    swal("Good job!", response.msg, "error");

                }
                },
                // error: function () {
                //     // Handle the case where the AJAX request itself fails
                //     swal(
                //         'Error!',
                //         'Something went wrong!',
                //         'error'
                //     );
                // }
            });
        }
//     });
// }



function updateNewsletterDetails(id) {
    let newsletter = newsletterList.get(id.toString());
    
    // Clear all fields
    $('#id').val('');
    $('#title').val('');
    $('#content').val(''); 
    $('#date').val('');

    // Reset the image preview
    $('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');
    
    $('.error').text('');
    
    // Set details
    $('#id').val(newsletter.id);
    $('#title').val(newsletter.title);
    $('#content').val(newsletter.content);
    $('#date').val(newsletter.date);
    (newsletter.PDF != null) ? $('#otherdpre').attr('src', ebase_url + newsletter.PDF) : '';


    // Show the updated post details in a modal
    $('#addNewsletterModal').modal('toggle');
}

function sendEmailDetails(){

    $('#addSendEmailModal').modal('toggle');



}

function setSubscriberList(list) {

    $('#subscriberTable').dataTable().fnDestroy();
    $('#subscriberList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let subscriber = list.get(k);
    
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + subscriber.email + `</td>
                <td> <a href="#" onclick="updateSubscriberDetails(${subscriber.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deletesubscriberDetails(${subscriber.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#subscriberList').html(tblData);
    $('#subscriberTable').DataTable();
    }

// post pdf file ----------------------------------------
// function displayPDF(pdfData) {
//     var pdfObject = document.getElementById('pdfPreview');
//     pdfObject.data = pdfData;
// }

// // Function to handle file upload
// $('#uploadButton').click(function () {
//     var formData = new FormData($('#pdfForm')[0]);
//     $.ajax({
//         url: 'upload.php', // Replace with your server-side script for handling file uploads
//         type: 'POST',
//         data: formData,
//         dataType: 'json',
//         contentType: false,
//         processData: false,
//         success: function (response) {
//             if (response.status === 'success') {
//                 // Display the uploaded PDF
//                 displayPDF(response.pdfUrl);
//             } else {
//                 alert('Failed to upload PDF. Error: ' + response.message);
//             }
//         },
//         error: function () {
//             alert('An error occurred during PDF upload.');
//         }
//     });
// });