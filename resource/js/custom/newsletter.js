let newsletterList = new Map();

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
    // $('#PDF').attr('src','');
    // $('#PDF').attr('src',ebase_url+'resource/pdf/Invoice.pdf');

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
                
                <a href="#" class="send-button" data-newsletter-id="1"><i class="fa fa-fw fa-arrow-right" style="font-size: 20px;">Send</i></a>
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

           
// function refreshTable() {
//     $('#postTable').dataTable().fnDestroy();
//     $('#postList').empty();
//     var tblData = '';
//     var index=1;
    
//     for (let k of postList.keys()) {
        
//         let post = postList.get(k);
    
//         tblData += `
//         <tr>
//                 <td>` + index + `</td>
//                 <td>` + post.title + `</td>
//                 <td>` + post.featured + `</td>
//                 <td>` + post.choice + `</td>
//                 <td>` + post.thread + `</td>
//                 <td>` + post.category_name + `</td>
//                 <td>` + post.is_active + `</td>
//                 <td>` + post.date + `</td>
//                 <td> <a href="#" onclick="updatePostDetails(${post.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
//                 <a href="#" onclick="deletePostDetails(${post.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
//                 </td>
                
//         </tr>`;
//         index++;
//     }
    
//     $('#postList').html(tblData);
//     $('#postTable').DataTable();
// }



function updateNewsletterDetails(id) {
    let newsletter = newsletterList.get(id.toString());
    
    // Clear all fields
    $('#id').val('');
    $('#title').val('');
    $('#content').val(''); 
    $('#date').val('');

    // // Reset the image preview
    // $('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');
    
    $('.error').text('');
    
    // Set details
    $('#id').val(newsletter.id);
    $('#title').val(newsletter.title);
    $('#content').val(newsletter.content);
    $('#date').val(newsletter.date);
    // (newsletter.PDF != null) ? $('#otherdpre').attr('src', ebase_url + newsletter.PDF) : '';

    // Show the updated post details in a modal
    $('#addNewsletterModal').modal('toggle');
}

$(document).ready(function () {
    // Attach a click event handler to the "Send" button
    $('#newsletterTable').on('click', '.send-button', function (e) {
        e.preventDefault();
        
        // Get the newsletter ID from the data attribute
        var newsletterId = $(this).data('newsletter-id');
        
        // Open your modal form here
        // Example (assuming you're using Bootstrap Modal):
        $('#addSendEmailModal').modal('show');
        
        // Optionally, you can pass the newsletter ID to the modal for further processing
        $('#addSendEmailModal').data('newsletter-id', newsletterId);
    });

    // Handle the form submission within your modal if needed
    $('#addSendEmailModal').on('submit', 'addSendEmailForm', function (e) {
        e.preventDefault();
        
        // Get the newsletter ID from the modal's data attribute
        var newsletterId = $('#addSendEmailModal').data('newsletter-id');
        
        // Perform your send email action here using the newsletterId
        
        // Close the modal if the action is complete
        $('#addSendEmailModal').modal('hide');
    });
});


// function updatePurchaseDetails(id){

//     $(location).attr('href',ebase_url+'updatePurchase/'+id);
    
// }


// post pdf file ----------------------------------------
function displayPDF(pdfData) {
    var pdfObject = document.getElementById('pdfPreview');
    pdfObject.data = pdfData;
}

// Function to handle file upload
$('#uploadButton').click(function () {
    var formData = new FormData($('#pdfForm')[0]);
    $.ajax({
        url: 'upload.php', // Replace with your server-side script for handling file uploads
        type: 'POST',
        data: formData,
        dataType: 'json',
        contentType: false,
        processData: false,
        success: function (response) {
            if (response.status === 'success') {
                // Display the uploaded PDF
                displayPDF(response.pdfUrl);
            } else {
                alert('Failed to upload PDF. Error: ' + response.message);
            }
        },
        error: function () {
            alert('An error occurred during PDF upload.');
        }
    });
});