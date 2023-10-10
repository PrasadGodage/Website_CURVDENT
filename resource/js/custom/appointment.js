let appointmentList = new Map();
let appointmentList1 = new Map();

// function setAppointmentList1(list) {

//     $('#appointmentTable').dataTable().fnDestroy();
//     $('#appointmentList1').empty();
//     var tblData = '';
//     var index=1;
    
//     for (let k of list.keys()) {
        
//         let appointment = list.get(k);
    
//         tblData += `
//         <tr>
//                 <td>` + index + `</td>
//                 <td>` + appointment.fullName + `</td>
//                 <td>` + appointment.date + `</td>
//                 <td>` + appointment.time + `</td>
//                 <td>` + appointment.contactNo + `</td>
//                 <td> <a href="#" onclick="updateAppointmentDetails(${appointment.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
//                 <a href="#" onclick="deleteAppointmentDetails(${appointment.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
//                 </td>
                
//         </tr>`;
//         index++;
//     }
    
//     $('#appointmentList1').html(tblData);
//     $('#appointmentTable').DataTable();
//     }

//     $(document).ready(function() {
//         const selectedDateInput = $("#selectDate");
//        // const recordTableBody = $("#recordTableBody");
      
//         selectedDateInput.on("change", function() {
//           const selectedDate = selectedDateInput.val();
      
//           // Clear the existing table rows
//           //recordTableBody.empty();
      
//           // Make an AJAX request to fetch records for the selected date
//           $.ajax({
//             url: ebase_url+'appointment_api', // Replace with your backend API URL

//             method: "GET",

//             data: { date: selectedDate },

//             dataType: "json",

//             success: function(data) {
//               // Populate the table with fetched records
              
//                 if (data.length != 0) {
//                     for (var i = 0; i < data.length; i++) {
//                         if(data[i].date === $("#selectDate").value())
//                         {

//                             appointmentList1.set(data[i].id,data[i]);

//                         }
                        
//                     }
                    
//                 }
//                 setAppointmentList1(appointmentList1);
//                 console.log(appointmentList1);
          

//             },
//             error: function(error) {
//               console.error("Error fetching data:", error);
//             }
//           });
//         });
//       });
      

// $(document).ready(function() {

//     const selectedDateInput = $("#selectDate");

//    $.ajax({

//         url: ebase_url+'appointment_api',

//         type: 'GET',

//         async:false,

//         headers: {
//             "Authorization": etoken
//         },

//         dataType: 'json',

//         success: function (response) {
        

//             if (response.status == 200) {

//                 if (response.data.length != 0) {
//                     for (var i = 0; i < response.data.length; i++) {
//                         if(response.data[i].date === $("#selectDate").value())
//                         {

//                             appointmentList1.set(response.data[i].id, response.data[i]);

//                         }
                        
//                     }
                    
//                 }
//                 setAppointmentList1(appointmentList1);
//                 console.log(appointmentList1);
//             }

//         }
        
//     });

//   });

// // Get the current date and time
// var currentDate = new Date();

// // Extract hours and minutes
// var hours = currentDate.getHours();
// var minutes = currentDate.getMinutes();

// // Determine AM or PM
// var ampm = hours >= 12 ? 'PM' : 'AM';

// // Convert to 12-hour clock format
// hours = hours % 12;
// hours = hours ? hours : 12; // 0 should be converted to 12

// // Add leading zeros to minutes if necessary
// minutes = minutes < 10 ? '0' + minutes : minutes;

// // Create the formatted time string
// var formattedTime = hours + ':' + minutes + ' ' + ampm;

// // Now, `formattedTime` contains the current time in "00:00 AM/PM" format

// // You can use `formattedTime` in your AJAX request or wherever you need to save it to the database


//Submit Category Btn script

$('#addappointmentForm').on('submit', function (e) {
    e.preventDefault();

    var returnVal = $("#addappointmentForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
     
        $.ajax({

            url: ebase_url+'appointment_api',

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
                    $('#addappointmentModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(appointmentList.has(id)){
                    appointmentList.delete(id);   
                 }
                 appointmentList.set(id, response.data);
                 setAppointmentList(appointmentList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'appointment');
                } else {

                    swal("Error!", response.msg, "error");

                }

            }
            // let currentDate = new Date().toJSON().slice(10,20);
        });
    }
});


// addClient Button
$('#addappointmentBtn').click(function () {
    $('#addappointmentModal').modal('toggle');
    $("#addappointmentForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    
    // let currentDate = new Date().toJSON().slice(11,20);
    //     console.log(currentDate);
    // Date Validation
// var today = new Date().toISOString().split('T')[0];
// document.getElementsByName("somedate")[0].setAttribute('min', today);

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
                console.log(appointmentList);
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
    
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + appointment.fullName + `</td>
                <td>` + appointment.date + `</td>
                <td>` + appointment.time + `</td>
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
function deleteppointmentDetails(id) {
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
    $('#addappointmentModal').modal('toggle');
}
