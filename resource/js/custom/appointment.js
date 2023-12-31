let appointmentList = new Map();
let appointmentList1 = new Map();



$(document).ready(function() {
    $('#contactNo').on('input', function() {
        // Get the input value and remove any non-digit characters
        var inputValue = $(this).val().replace(/\D/g, '');
        
        // Check if the input is a 10-digit number
        if (/^\d{10}$/.test(inputValue)) {
            // Valid input: clear any previous error message
            $('#contactError').text('');
        } else {
            // Invalid input: show an error message
            $('#contactError').text('Please enter a 10-digit number');
        }
    });

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

});


function setAppointmentList1(list) {

    $('#appointmentTable').dataTable().fnDestroy();
    $('#appointmentList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let appointment = list.get(k);

        let formatedTime = appointment.time;
        // Split the time into hours and minutes
       var parts = formatedTime.split(":");
       var minutes = parseInt(parts[1]);
       var hours = parseInt(parts[0]);

// Determine AM or PM
var ampm = hours >= 12 ? "PM" : "AM";

// Convert to 12-hour format
if (hours > 12) {
    hours -= 12;
} else if (hours === 0) {
    hours = 12;
}

// Create the formatted time string
var formattedTime1 = hours + ":" + minutes + " " + ampm;
 
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + appointment.fullName + `</td>
                <td>` + appointment.date + `</td>
                <td>` + formattedTime1 + `</td>
                <td>` + appointment.contactNo + `</td>
                <td> <a href="#" onclick="updateAppointmentDetails(${appointment.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deleteAppointmentDetails(${appointment.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#appointmentList').html(tblData);
    $('#appointmentTable').DataTable();
    }

$(document).ready(function() {
 //Date picker
 $('#datepicker').datepicker({
    autoclose: true
  });

  });

  $("#datepicker").change(function() {
    // $('#appointmentTable').dataTable().fnDestroy();
    // $('#appointmentList').empty();
    appointmentList1.clear();

    var selectedDate = $(this).val();
    var formattedDate = selectedDate.split('/').join('-');

    var parts = formattedDate.split("-"); // Split the input into an array

if (parts.length === 3) {
  var formattedDate1 = parts.reverse().join("-");
  // Split the input date using the hyphen as a separator
var dateComponents = formattedDate1.split('-');

// Rearrange the components into the "yyyy-mm-dd" format
var formattedDate2 = dateComponents[0] + '-' + dateComponents[2] + '-' + dateComponents[1];

}



    $.ajax({

        url: ebase_url+'appointment_api',

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

                        if(response.data[i].date === formattedDate2){

                            appointmentList1.set(response.data[i].id, response.data[i]);

                        }                                              
                                           
                    }
                                    }
                setAppointmentList1(appointmentList1);
             }

        }
        
    });

});
  

$('#addAppointmentForm').on('submit', function (e) {
    e.preventDefault();

    var returnVal = $("#addAppointmentForm").valid();
    var formdata = new FormData(this);

    // Get the time value from the time input field
    var appointmentTime = $("#time").val();
    // var selectedDate = $("#date").val(); 
    
        // Split the time into hours and minutes
         var parts = appointmentTime.split(":");
         var hours = parseInt(parts[0]);
         var minutes = parseInt(parts[1]);

        // Determine AM or PM
        var ampm = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        if (hours > 12) {
           hours -= 12;
        } else if (hours === 0) {
           hours = 12;
        }

       // var formattedTime = hours + ":" + minutes + " " + ampm;
       //Logic for appointment timing selection 
// $.ajax({

//     url: ebase_url+'appointment_api',

//     type: 'GET',

//     async:false,

//     headers: {
//         "Authorization": etoken
//     },

//     dataType: 'json',

//     success: function (response) {
    

//         if (response.status == 200) {

//             if (response.data.length != 0) {
//                 for (var i = 0; i < response.data.length; i++) {

//                     if(response.data[i].date === selectedDate){
//                         if(response.data[i].time === formattedTime){


//                             alert("This time is alredy book please choose other time");
//                         }

//                       // appointmentList1.set(response.data[i].id, response.data[i]);

//                     }                                              
                                       
//                 }
//              }
//           }

//     }
    
// });


    // Add the time value to the FormData object
    formdata.append('time', appointmentTime);

    if (returnVal) {
        $.ajax({
            url: ebase_url + 'appointment_api',
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
                    $('#addAppointmentModal').modal('toggle');

                    let id = response.data.id;

                    if (appointmentList.has(id)) {
                        appointmentList.delete(id);
                    }
                    appointmentList.set(id, response.data);
                    setAppointmentList(appointmentList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href', ebase_url + 'appointment');
                } else {
                    swal("Error!", response.msg, "error");
                }
            }
        });
    }
});



// addClient Button
$('#addAppointmentBtn').click(function () {
    $('#addAppointmentModal').modal('toggle');
    $("#addAppointmentForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    });


// get posting data
function getAppointmentList() {
        $.ajax({

        url: ebase_url+'appointment_api',

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
                       
                            appointmentList.set(response.data[i].id, response.data[i]);
                       
                        
                    }
                    
                }
                setAppointmentList(appointmentList);
             }

        }
        
    });
}
getAppointmentList();


function setAppointmentList(list) {

    $('#appointmentTable').dataTable().fnDestroy();
    $('#appointmentList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let appointment = list.get(k);

        let formatedTime = appointment.time;
        // Split the time into hours and minutes
var parts = formatedTime.split(":");
var hours = parseInt(parts[0]);
var minutes = parseInt(parts[1]);

// Determine AM or PM
var ampm = hours >= 12 ? "PM" : "AM";

// Convert to 12-hour format
if (hours > 12) {
    hours -= 12;
} else if (hours === 0) {
    hours = 12;
}

// Create the formatted time string
var formattedTime1 = hours + ":" + minutes + " " + ampm;
   
tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + appointment.fullName + `</td>
                <td>` + appointment.date + `</td>
                <td>` + formattedTime1 + `</td>
                <td>` + appointment.contactNo + `</td>
                <td> <a href="#" onclick="updateAppointmentDetails(${appointment.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deleteAppointmentDetails(${appointment.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#appointmentList').html(tblData);
    $('#appointmentTable').DataTable();
}

    // ---------------------- delete data ---------------------------------------------
function deleteAppointmentDetails(id) {
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
                url: ebase_url + 'appointment_api/' + id, // Replace with your actual delete API endpoint
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
                        $(location).attr('href',ebase_url+'appointment'),
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


function updateAppointmentDetails(id) {
    let appointment = appointmentList.get(id.toString());
    
    // Clear all fields
    $('#id').val('');
    $('#fullName').val('');
    $('#date').val('');
    $('#time').val('');
    $('#contactNo').val('');
    $('#email').val('');
    $('#address').val('');

    $('.error').text('');
    
    // Set details
    $('#id').val(appointment.id);
    $('#fullName').val(appointment.fullName);
    $('#date').val(appointment.date);
    $('#time').val(appointment.time);
    $('#contactNo').val(appointment.contactNo);
    $('#email').val(appointment.email);
    $('#address').val(appointment.address);
   
    // Show the updated post details in a modal
    $('#addAppointmentModal').modal('toggle');
}

 //appointmentValidation ----------------------------------------------------
 var appointmentValidation = document.createElement('script');
 appointmentValidation.src = ebase_url + 'resource/js/custom/appointmentValidation.js';
 appointmentValidation.setAttribute("type", "text/javascript");
 document.head.appendChild(appointmentValidation);