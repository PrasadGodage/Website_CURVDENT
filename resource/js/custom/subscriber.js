let subscriberList = new Map();


$('#email').on('input', function() {
    // Get the input value
    var email = $(this).val();
    
    // Regular expression to validate email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Check if the input matches the email pattern
    if (emailPattern.test(email)) {
        // Valid email: clear any previous error message
        $('#emailError').text('');
    } else {
        // Invalid email: show an error message
        $('#emailError').text('Please enter a valid email address');
    }
});

//Submit Category Btn script

$('#addSubscriberForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addSubscriberForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'newsletter_api',

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
                    $('#addSubscriberModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(subscriberList.has(id)){
                    subscriberList.delete(id);   
                 }
                 subscriberList.set(id, response.data);
                 setSubscriberList(subscriberList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'subscriber');
                } else {

                    swal("Error!", response.msg, "error");

                }

            }

        });
    }
});


//Add Subscriber Btn script -----------------------------------------------------------------
$('#addSubscriberBtn').click(function () {
    $('#addSubscriberModal').modal('toggle');
    $("#addSubscriberForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});

//------------- show table data ----------------------------

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

// ---------------------- delete data ---------------------------------------------
function deleteSubscriberDetails(id) {
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
                url: ebase_url + 'newsletter_api/' + id, // Replace with your actual delete API endpoint
                type: 'DELETE',
                headers: {
                    "Authorization": etoken
                },
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        // Remove the table row
                        // $('#postTable tr[data-id="' + id + '"]').remove();
                        // Show a success message
                        swal("Good job!", response.msg, "success");  
                            setTimeout(
                                $(location).attr('href',ebase_url+'subscriber'),
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



// Updte Subscriber Details----------------------------------------------------------------------------------------
function updateSubscriberDetails(id) {
    let subscriber = subscriberList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#email').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(subscriber.id);
    $('#email').val(subscriber.email);
    $('#addSubscriberModal').modal('toggle');
}



// get posting data
function getSubscriberList() {
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
                setSubscriberList(subscriberList);
                console.log(subscriberList);
            }

        }
        
    });
}
getSubscriberList();


    //subscriberValidation ----------------------------------------------------
    var subscriberValidation = document.createElement('script');
    subscriberValidation.src = ebase_url + 'resource/js/custom/subscriberValidation.js';
    subscriberValidation.setAttribute("type", "text/javascript");
    document.head.appendChild(subscriberValidation);