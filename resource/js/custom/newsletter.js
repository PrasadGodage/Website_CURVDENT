let newsletterList = new Map();
let subscriberList = new Map();

// $(document).ready(function() {
//     // Path to your PDF file
//     var pdfUrl = './uploads/new.pdf';

//     // Load and render PDF document
//     PDFJS.getDocument(pdfUrl).promise.then(function(pdf) {
//         // Get the first page of the PDF
//         return pdf.getPage(1);
//     }).then(function(page) {
//         // Set the scale and viewport
//         var scale = 1.5;
//         var viewport = page.getViewport({ scale: scale });

//         // Prepare canvas using jQuery
//         var canvas = $('<canvas></canvas>').get(0);
//         var context = canvas.getContext('2d');
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         // Append canvas to the #pdf-render element
//         $('#pdf-render').append(canvas);

//         // Render PDF page on the canvas
//         var renderContext = {
//             canvasContext: context,
//             viewport: viewport
//         };
//         page.render(renderContext);
//     });
// });



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


  $("button").click(function() {
    $('input[type="checkbox"]').each(function() {
      $(this).prop("checked", true);
    });
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
        console.log(newsletter);
    
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
        $('#pdf-render').append(newsletter.PDF);

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
     $('#PDF').attr('src','');

    
    //$('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');
    
    $('.error').text('');
    
    // Set details
    $('#id').val(newsletter.id);
    $('#title').val(newsletter.title);
    $('#content').val(newsletter.content);
    //(newsletter.PDF != null) ? $('#PDF').attr('src', ebase_url + newsletter.PDF) : '';
    $('#PDF').attr('src', ebase_url + newsletter.PDF);
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
                    <td><input type="checkbox" class"my-checkbox" /></td>
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
        
