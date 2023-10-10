let appointmentList = new Map();


// //Submit Category Btn script

// $('#addAppointmentForm').on('submit', function (e) {
//     e.preventDefault();

//     var returnVal = $("#addAppointmentForm").valid();
//     var formdata = new FormData(this);
//     if (returnVal) {
     
//         $.ajax({

//             url: ebase_url+'appointment_api',

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
//                     $('#addAppointmentModal').modal('toggle');

//                     let id=response.data.id;
                  
//                  if(appointmentList.has(id)){
//                     appointmentList.delete(id);   
//                  }
//                  appointmentList.set(id, response.data);
//                  setAppointmentList(appointmentList);

//                     swal("Good job!", response.msg, "success");
//                     $(location).attr('href',ebase_url+'appointment');
//                 } else {

//                     // swal("Error!", response.msg, "error");

//                 }

//             }
//             // let currentDate = new Date().toJSON().slice(10,20);
//         });
//     }
// });


$('#addAppointmentForm').on('submit', function (e) {
    e.preventDefault();

    var returnVal = $("#addAppointmentForm").valid();
    var formdata = new FormData(this);
    
    // Get the time value from the time input field
    var appointmentTime = $("#time").val();

    if (returnVal) {
        $.ajax({
            url: ebase_url + 'appointment_api',
            type: 'POST',
            headers: {
                "Authorization": etoken
            },
            data: {
                formData: formdata,
                time: appointmentTime // Include the time data
            },
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
