let appointmentList = new Map();


// Date Validation
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);


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

        });
    }
});


// addClient Button
$('#addappointmentBtn').click(function () {
    $('#addappointmentModal').modal('toggle');
    $("#addappointmentForm").trigger("reset");
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
                <td>` + appointment.name + `</td>
                <td>` + appointment.date + `</td>
                <td>` + appointment.time + `</td>
                <td>` + appointment.date + `</td>
                <td>` + appointment.contact + `</td>
                <td> <a href="#" onclick="updateAppointmentDetails(${appointment.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deleteAppointmentDetails(${appointment.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#appointmentList').html(tblData);
    $('#appointmentTable').DataTable();
    }