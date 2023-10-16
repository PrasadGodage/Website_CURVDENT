let newsletterList = new Map();
let subscriberList = new Map();
let newsLetterList1 = new Map();
var pdfName;


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



        // Handle the Send button click event
        $('#sendEmail').on('click', function () {
            // Initialize an empty array to store selected data
            var selectedData = [];

            // Iterate through the checkboxes to find the selected data
            $('.select-data:checked').each(function () {
                var $row = $(this).closest('tr');
                // var name = $row.find('[data-name]').data('name');
                var email = $row.find('[data-email]').data('email');
                // selectedData.push({ name: name, email: email });
                selectedData.push({email: email });
            });

            // You can send the selectedData to your server here
            console.log('Selected Data:', selectedData);
            
            // Clear selections
            $('.select-data:checked').prop('checked', false);
        });

  
//Submit Category Btn script

$('#addNewsletterForm').on('submit', function (e) {
    e.preventDefault();

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
                       console.log(newsLetterList1); 
                    }
                    
                }
          }

        }
        
    });
    
    const pdfInput = document.getElementById('PDF');
    const pdfFile = pdfInput.files[0];
    var emailList=Array.from(newsLetterList1.values());
    var jsonString= JSON.stringify(emailList);
    var formdata1 = new FormData();
    formdata1.append("emailDetails",jsonString);
    formdata1.append('pdfInput', pdfFile);

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

                    swal("Error!", response.msg, "error");

                }

            }

        });
    }
});

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
                console.log(newsletterList);
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
    console.log(pdfName);
    var pdfLink = '';
    pdfLink += '<a class="help-block mt-3 ml-2" href='+ pdfName +' target="_blank" >Open PDF</a>';
    $('#pdfLink').html(pdfLink);

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

//Add Newsletter sendEmail Btn script -----------------------------------------------------------------
$('#sendEmail').click(function () {
    let mail_to = "soulsoft.urmila@gmail.com";
    console.log(mail_to);
    let subject= "test subject";
    console.log(subject);
     

        // sender details
        let name = "urmila";
        let email = "soulsoft.soul120@gmail.com";
        let sendersubject = "test";
        let message = "test msg";

        let headers = name.concat(email,sendersubject,message);
        console.log(headers);  

    let success = mail(mail_to, subject, headers);

    // $.ajax({
    //     url: 'email.php',
    //     type: 'POST',
    //     data: fData,
    //     cache: false,
    //     contentType: false,
    //     processData: false,
    //     success: function (response) {
      
    //  alert("response as recorde");
    //                      },
    
    // });

    
});


 //import newsletterValidation script
 var newsletterValidation = document.createElement('script');
 newsletterValidation.src = ebase_url + 'resource/js/custom/newsletterValidation.js';
 newsletterValidation.setAttribute("type", "text/javascript");
 document.head.appendChild(newsletterValidation);