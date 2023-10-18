let newsletterList = new Map();
let subscriberList = new Map();
let newsLetterList1 = new Map();
let newsletterpdfList = new Map();
var pdfName;
var subscriber;
var pdf;
var selectedData = []; // Create an array to store the selected data


// $('#sendEmail').on('click', function() {
//         var selectedItems = [];
        
//         // Iterate over each checked checkbox
//         $('.checkbox:checked').each(function() {
//             selectedItems.push($(this).val());
//         });

//         // Now 'selectedItems' is an array containing the values of checked checkboxes

//         // You can send this data to your server or perform any desired action here
//         // For example, you can log the selected items to the console
//         console.log('', selectedItems);
//     });


    // $(document).ready(function () {
        $("#PDF").change(function () {
            // Get the selected PDF file's name
            var pdfFileName = $(this).val().split("\\").pop();
            
            // Display the selected PDF file name in the "selectedPdfName" div
            $("#selectedPdfName").text("" + pdfFileName);

            // var pdfLink1 = '';
            // pdfLink1 += '<a class="help-block mt-3 ml-2" href='+ result +' target="_blank" >pdfFileName</a>';
        });
    // });



        // // Handle the Send button click event
        // $('#sendEmail').on('click', function () {
        //     // Initialize an empty array to store selected data
        //     var selectedData = [];

        //     // Iterate through the checkboxes to find the selected data
        //     $('.select-data:checked').each(function () {
        //         var $row = $(this).closest('tr');
        //         // var name = $row.find('[data-name]').data('name');
        //         var email = $row.find('[data-email]').data('email');
        //         // selectedData.push({ name: name, email: email });
        //         selectedData.push({email: email });
        //     });

        //     // You can send the selectedData to your server here
        //     console.log('Selected Data:', selectedData);
            
        //     // Clear selections
        //     $('.select-data:checked').prop('checked', false);
        // });

  
//Submit Category Btn script

$('#addNewsletterForm').on('submit', function (e) {
    e.preventDefault();

    var returnVal = $("#addNewsletterForm").valid();
    var formdata = new FormData(this);
    // if (returnVal) {
     
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
                    //$(location).attr('href',ebase_url+'newsletter');

                //     let id=response.data.id;
                  
                //  if(newsletterList.has(id)){
                //     newsletterList.delete(id);   
                //  }
                //  newsletterList.set(id, response.data);
                //  setNewsletterList(newsletterList);
                   swal("Good job!", response.msg, "success");
                    sendPdf();
                    setTimeout(
                        $(location).attr('href',ebase_url+'newsletter'),
                         8000
                         )
                   
                } else {

                    swal("Error!", response.msg, "error");

                }

            }

        });
     //}

          
    

});

function sendPdf()
      {
        //logic for send mail for blog

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
                        if (response.data[i].is_active == 1){
                            newsLetterList1.set(response.data[i].id, response.data[i]);

                        }
                        
                    }
                    
                }
          }

        }
        
    });
    
    const pdfInput = document.getElementById('PDF');
    const pdfFile = pdfInput.files[0];
    const pdfFileName = pdfFile.name;
    var emailList=Array.from(newsLetterList1.values());
    var jsonString= JSON.stringify(emailList);
    var formdata1 = new FormData();
    formdata1.append("emailDetails",jsonString);
    formdata1.append('pdfFileName', pdfFileName);

    $.ajax({
                    url: ebase_url + 'sendPostEmail_api',
        
                    type: 'POST',
        
                    data: formdata1,
        
                    cache: false,
        
                    contentType: false,
        
                    processData: false,
        
                    dataType: 'json',
        
                 success: function(response) {
                     if (response.status == 200) {
                        alert('suceess');
                        // swal("Good job!", response.msg, "success");
                     } else {
                        alert('error');
                        // swal("ERROR!", response.msg, "error");
                        }
                 }
                    
             });
      }   


//Add Newsletter  Btn script -----------------------------------------------------------------
$('#addNewsletterBtn').click(function () {
    $('#addNewsletterModal').modal('toggle');
    $("#addNewsletterForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
   
    
    $('#pdfLink').text('');
});

//select File for attachment Btn script -----------------------------------------------------------------
$('#PDF').click(function () {

    // pdfLink += '<a href='+ pdfName +' >Open PDF</a>';
    // $('#pdfLink').html(pdfLink);


   
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
                
            }

        }
        
    });
}
getNewsletterList();

$(document).ready(function() {
    // Set column widths using CSS in jQuery
    $('#newsletterTable col.column1').css('width', '50px');
    // $('#myTable col.column2').css('width', '150px');
  });
  

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
                <a href="#" onclick="sendEmailDetails(${newsletter.id})">Sent<i class="fa fa-fw fa-arrow-right" style="font-size: 20px;"></i></a>

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

                    swal("Error!", response.msg, "error");

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
    $('#pdfLink').empty();
    $('#id').val('');
    $('#title').val('');
    $('#content').val(''); 
    //$('#date').val('');
     //$('#PDF').attr('src','');
     $('#pdfLink').text('');

    // Reset the image preview
    //$('#otherdpre').attr('src',ebase_url+'resource/images/avatar-custom.png');
    
    $('.error').text('');
    
    // Set details
    $('#id').val(newsletter.id);
    $('#title').val(newsletter.title);
    $('#content').val(newsletter.content);
    //(newsletter.PDF != null) ? $('#PDF').attr('src', ebase_url + newsletter.PDF) : '';
   //  $('#PDF').attr('src', ebase_url + newsletter.PDF);
  //$('#date').val(newsletter.date);
    pdfName=newsletter.PDF;
    var pdfLink = '';
    pdfLink += '<a class="help-block mt-3 ml-2" href='+ pdfName +' target="_blank" >Open PDF</a>';
    $('#pdfLink').html(pdfLink);

    // Show the updated post details in a modal
    $('#addNewsletterModal').modal('toggle');
}
 
function sendEmailDetails(id){

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
                       
                    }
        
                }
                
            });

////////////////////Get newsletter to given id
            $.ajax({

                url: ebase_url+'subsriberpage_api/'+id,
        
                type: 'GET',
        
                async:false,
        
                headers: {
                    "Authorization": etoken
                },
        
                dataType: 'json',
        
                success: function (response) {
                
        
                    if (response.status == 200) {
        
                        if (response.data.length != 0) {
                            
                               // newsletterpdfList.set(response.data[i].id, response.data[i]);
                                pdf=response.data;
                                console.log(pdf);
                                console.log(pdf.PDF);
                            }
                            
                        }
                        
                        
                    
        
                }
                
            });


        }
       
        
function setSubscriberList1(list) {
    $('#subscriberTable').DataTable().destroy();
    $('#subscriberList').empty();
    var index = 1;
    for (let k of list.keys()) {
        let subscriber = list.get(k);
        // results.forEach(subscriber => {
        let tblData = `
            <tr>
                <td><input type="checkbox" data-id="${subscriber.id}" class="largerCheckbox tblChk chk${index} select-data" style="position: absolute; left: 0px; opacity: 1;" /></td>
                <td>${index}</td>
                <td>${subscriber.email}</td>
                <td>
                    <a href="#" onclick="updateSubscriberDetails(${subscriber.id})"><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                    <a href="#" onclick="deleteSubscriberDetails(${subscriber.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>
                </td>
            </tr>`;

        $("#subscriberTable tbody").append(tblData);
        index++;
    // });
}

    $('#subscriberTable').DataTable();
}

//Select All Function ----------------------------------------------------
// $(function () {

    $('#subscriberTable').on('change', '.tblChk', function () {
    //   debugger;
      if ($('.tblChk:checked').length == $('.tblChk').length) {
        $('#chkAll').prop('checked', true);
      } else {
        $('#chkAll').prop('checked', false);
      }
    //   getCheckRecords();
    });

    $("#chkAll").change(function () {
    //   debugger;
      if ($(this).prop('checked')) {
        $('.tblChk').not(this).prop('checked', true);
      } else {
        $('.tblChk').not(this).prop('checked', false);
      }
    //   getCheckRecords();
    })
//   });

    // function getCheckRecords() {
    //     debugger;
    //     $(".selectedDiv").html("");
    //     $('.tblChk:checked').each(function () {
    //     debugger;
    //     if ($(this).prop('checked')) {
    //         if ($(".selectedDiv").children().length == 0) {
    //         const rec = "<strong>" + $(this).attr("data-id") + " </strong>";
    //         $(".selectedDiv").append(rec);
    //         } else {
    //         const rec = ", <strong>" + $(this).attr("data-id") + " </strong>";
    //         $(".selectedDiv").append(rec);
    //         }
    //     }
    //     console.log(this.value);
    //     console.log(data.email);
    //     });
    // }


// // Use this function to get data from checked checkboxes
// function getCheckedRecords() {
//     const selectedIds = [];
//     $('.tblChk:checked').each(function () {
//         selectedIds.push($(this).attr('data-id'));
//     });
//     return selectedIds;
// }

// // Attach a click event to a button or element to get the data from checked checkboxes
// $('#sendEmail').on('click', function () {
//     const selectedIds = getCheckedRecords();
//     console.log(selectedIds); // This will log an array of selected IDs
//     // Now you can do whatever you want with the selected data, such as sending it via AJAX
// });



// function getCheckRecords() {
//     $(".selectedDiv").html(""); // Clear the selected records div

//     $('.tblChk:checked').each(function () {
//         const dataId = $(this).attr("data-id");
//         const email = getSubscriberEmail(dataId); // This function fetches the email based on data-id, you need to implement it

//         if ($(".selectedDiv").children().length === 0) {
//             $(".selectedDiv").append(`<strong>${dataId} (${email})</strong>`);
//         } else {
//             $(".selectedDiv").append(`, <strong>${dataId} (${email})</strong>`);
//         }
//      });
// }

// function getSubscriberEmail(dataId) {
//     // You should implement this function to get the email based on data-id.
//     // It might involve searching the subscriberList or making an API call to get the email.
//     // For this example, I assume you have a subscriberList object.
//      subscriber = subscriberList.get(dataId);
//     if (subscriber) {
//         return subscriber.email;

//     }
//     return ""; // Return an empty string if no email is found.
// }

// function getCheckRecords() {
   
//     $(".selectedDiv").html(""); // Clear the previous selection display
//     $('.tblChk:checked').each(function () {
//         var dataId = $(this).data("id"); // Get the data-id attribute value
//         var email = $(this).closest('tr').find('td:nth-child(3)').text(); // Get the email from the same row
//         selectedData.push({ id: dataId, email: email }); // Store data in the array
//     });
    
//     // Display the selected data
//     for (var i = 0; i < selectedData.length; i++) {
//         if (i == 0) {
//             $(".selectedDiv").append("<strong>" + selectedData[i].id + " (" + selectedData[i].email + ")</strong>");
//         } else {
//             $(".selectedDiv").append(", <strong>" + selectedData[i].id + " (" + selectedData[i].email + ")</strong>");
//         }
//     }
    
// }


// $(document).ready(function () {
    $('#subscriberTable').on('change', '.tblChk', function () {
        $(".selectedDiv").html("");
        var selectedData = []; // Array to store selected data
        $('.tblChk:checked').each(function () {
            var id = $(this).data("id"); // Get the ID from the data-id attribute
            var email = $(this).closest("tr").find("td:nth-child(3)").text(); // Assuming email is in the third column
            selectedData.push({ id: id, email: email }); // Store in the array
        });

        // Display selected data in the div
        for (var i = 0; i < selectedData.length; i++) {
            var rec = "<strong>ID: " + selectedData[i].id + ", Email: " + selectedData[i].email + "</strong>";
            $(".selectedDiv").append(rec);
        }
    });
    console.log(selectedData);

    // Handle the "Select All" checkbox
    $("#chkAll").change(function () {
        if ($(this).prop('checked')) {
            $('.tblChk').prop('checked', true);
        } else {
            $('.tblChk').prop('checked', false);
        }
        // Trigger the change event to update the selected data
        $('.tblChk').change();
    });
// });




//Add Newsletter sendEmail Btn script -----------------------------------------------------------------
$('#sendEmail').click(function () {

   // var chkMailList=Array.from(subscriberList.values());
    var jsonString= JSON.stringify(subscriber);
    var formdata2 = new FormData();
    formdata2.append("chkList",jsonString);
    formdata2.append("pdf",pdf);
    console.log(selectedData); // You can use the selected data array as needed
    
    $.ajax({
                url: ebase_url + 'sendSubscriber_api',
        
                type: 'POST',
        
                data: formdata2,
        
                cache: false,
        
                contentType: false,
        
                processData: false,
        
                dataType: 'json',
        
             success: function(response) {
                 if (response.status == 200) {
                    alert('suceess');
                    // swal("Good job!", response.msg, "success");
                 } else {
                    alert('error');
                    // swal("ERROR!", response.msg, "error");
                    }
             }
                
         });
});




 //import newsletterValidation script
 var newsletterValidation = document.createElement('script');
 newsletterValidation.src = ebase_url + 'resource/js/custom/newsletterValidation.js';
 newsletterValidation.setAttribute("type", "text/javascript");
 document.head.appendChild(newsletterValidation);