let newsletterList = new Map();
let subscriberList = new Map();


//Select All Function ----------------------------------------------------
// $(function () {
//     "use strict";

//     //Enable iCheck plugin for checkboxes
//     //iCheck for checkbox and radio inputs
//     $('.mailbox-messages input[type="checkbox"]').iCheck({
//       checkboxClass: 'icheckbox_flat-blue',
//       radioClass: 'iradio_flat-blue'
//     });

//     //Enable check and uncheck all functionality
//     $(".checkbox-toggle").click(function () {
//       var clicks = $(this).data('clicks');
//       if (clicks) {
//         //Uncheck all checkboxes
//         $(".mailbox-messages input[type='checkbox']").iCheck("uncheck");
//         $(".ion", this).removeClass("ion-android-checkbox-outline").addClass('ion-android-checkbox-outline-blank');
//       } else {
//         //Check all checkboxes
//         $(".mailbox-messages input[type='checkbox']").iCheck("check");
//         $(".ion", this).removeClass("ion-android-checkbox-outline-blank").addClass('ion-android-checkbox-outline');
//       }
//       $(this).data("clicks", !clicks);
//     });
// }); // End of use strict

// $(document).ready(function () {
//     // Select All checkbox
//     $('#selectAll').change(function () {
//       if (this.checked) {
//         // Check all the individual checkboxes
//         $('.selectRow').prop('checked', true);
//       } else {
//         // Uncheck all the individual checkboxes
//         $('.selectRow').prop('checked', false);
//       }
//     });
  
//     // Individual checkbox
//     $('.selectRow').change(function () {
//       // Check if all individual checkboxes are checked
//       var allChecked = $('.selectRow:checked').length === $('.selectRow').length;
  
//       // Update the "Select All" checkbox accordingly
//       $('#selectAll').prop('checked', allChecked);
//     });
//   });
  

// $(document).ready(function () {
//     // Check or uncheck all checkboxes when the "Select All" checkbox is clicked
//     $('#chkAll').change(function () {
//       if ($(this).is(':checked')) {
//         $('.tblChk').prop('checked', true);
//       } else {
//         $('.tblChk').prop('checked', false);
//       }
//     });
  
//     // Check the "Select All" checkbox when all row checkboxes are checked
//     $('#subscriberTable').on('change', '.tblChk', function () {
//       if ($('.tblChk:checked').length === $('.tblChk').length) {
//         $('#chkAll').prop('checked', true);
//       } else {
//         $('#chkAll').prop('checked', false);
//       }
//     });
//   });


$('#selectAll').change(function() {
    var checkboxes = $(this).closest('table').find(':checkbox');
    checkboxes.prop('checked', $(this).is(':checked'));
  });


  
//Submit Category Btn script

$('#addNewsletterForm').on('submit', function (e) {
    e.preventDefault();

    var returnVal = $("#addNewsletterForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
     
        $.ajax({

            url: ebase_url+'postNewsletter_api',

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
                    $(location).attr('href',ebase_url+'newsletter');

                    let id=response.data.id;
                  
                 if(newsletterList.has(id)){
                    newsletterList.delete(id);   
                 }
                 newsletterList.set(id, response.data);
                 setNewsletterList(newsletterList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'newsletter');
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


// $(document).ready(function() {
//     $('#addNewsletterForm').submit(function(e) {
//         e.preventDefault();

//         var formData = new FormData($(this)[0]);

//         $.ajax({
//             url: ebase_url+'postNewsletter_api', // The server-side script to handle file upload
//             type: 'POST',
            
//             headers: {
//             "Authorization": etoken
//             },
//             data: formData,
//             contentType: false,
//             processData: false,
//             dataType: 'json',
//             success: function(response) {
//                 if (response.status == 200) {
//                 // Handle the response from the server, e.g., display a success message
//                 alert('PDF uploaded successfully!');
//                 }
//             },
//             error: function() {
//                 // Handle errors, if any
//                 alert('Error occurred while uploading PDF.');
//             }
//         });
//     });
// });


//Add Newsletter Btn script -----------------------------------------------------------------
$('#addNewsletterBtn').click(function () {
    $('#addNewsletterModal').modal('toggle');
    $("#addNewsletterForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    $('#PDF').attr('src','');
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
    //$('#date').val('');
     //$('#PDF').attr('src','');
     $('#pdf-render').text('');

    // Reset the image preview
    //$('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');
    
    $('.error').text('');
    
    // Set details
    $('#id').val(newsletter.id);
    $('#title').val(newsletter.title);
    $('#content').val(newsletter.content);
    //(newsletter.PDF != null) ? $('#PDF').attr('src', ebase_url + newsletter.PDF) : '';
   //  $('#PDF').attr('src', ebase_url + newsletter.PDF);
    $('#pdf-render').text(newsletter.PDF);
    //$('#date').val(newsletter.date);
    // Show the updated post details in a modal
    $('#addNewsletterModal').modal('toggle');
}

function sendEmailDetails(){

    $('#addSendEmailModal').modal('toggle');

    
            $.ajax({
        
                url: ebase_url+'newsletter_api',
        
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
                                subscriberList.set(response.data[i].id, response.data[i]);
                            }
                            
                        }
                        setSubscriberList1(subscriberList);
                        console.log(subscriberList);
                    }
        
                }
                
            });
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


function setSubscriberList1(list) {
    $('#subscriberTable').dataTable().fnDestroy();
    $('#subscriberList').empty();
        var tblData = '';
        var index = 1;
        
        for (let k of list.keys()) {
            let subscriber = list.get(k);
        
            tblData += `
            <tr>
                <td><input type="checkbox" name="select[]" /></td>
                <td>${index}</td>
                <td>${subscriber.email}</td>
                <td>
                        
                    <a href="#" onclick="updateSubscriberDetails(${subscriber.id})"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                    <a href="#" onclick="deleteSubscriberDetails(${subscriber.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>
                    <a href="#" onclick="sendEmail()"><i class="fa fa-fw fa-arrow-right" style="font-size: 20px;"></i></a>
                </td>
            </tr>`;
            index++;
        }
        
        $('#subscriberList').html(tblData);
        $('#subscriberTable').DataTable();
}
        
