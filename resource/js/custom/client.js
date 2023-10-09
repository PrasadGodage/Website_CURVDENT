let clientList = new Map();
let countryList = new Map();

//submit
$('#addClientForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addClientForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'client_api',

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
                    $('#addClientModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(clientList.has(id)){
                    clientList.delete(id);   
                 }
                 clientList.set(id, response.data);
                 setClientList(clientList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});

// addClient Button
$('#addClientBtn').click(function () {
    $('#addClientModal').modal('toggle');
    $("#addClientForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    $('#clientType').val("").change();
    $('#country_id').val("").change();
    $('#state_id').val("").change();
    $('#city_id').val("").change();
    // $('#state_id').prop('disabled',true);
    
    
});
//Next Input Field Jump on Enter

$(document).ready(function() {
    $('#firstName').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#lastName').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#lastName').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#phone').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#phone').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#email').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#phone').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#email').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#email').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#orderNote').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#orderNote').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#openOutstanding').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#openOutstanding').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#outstanding').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#outstanding').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#country_id').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#country_id').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#state_id').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#state_id').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
             $('#city_id').focus();
        }
    });
});
$(document).ready(function() {
    $('#city_id').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#address1').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#address1').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#address2').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#address2').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#postcode').focus(); 
        }
    });
});
$(document).ready(function() {
    $('#postcode').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            $('#active').focus(); 
        }
    });
});


// $(document).ready(function() {
//     $('.form-control select2').on('keydown', function(event) {
//         if (event.keyCode === 13) { // Enter key
//             event.preventDefault();
//             const $nextSelect = $(this).nextAll('.form-control select2').first();
//             if ($nextSelect.length > 0) {
//                 $nextSelect.focus();
//             }
//             // else {
//                 // If no next select, loop to the first select
//                // $('.select-dropdown').first().focus();
//            // }
//         }
//     });
// });

//get client data
function getClientList() {
        $.ajax({

            url: ebase_url+'client_api',

            type: 'GET',

            async:false,

            headers: {
                "Authorization": etoken
            },

            dataType: 'json',

            success: function (response) {
            

                if (response.status == 200) {

                    if (response.data.lenght != 0) {
                        for (var i = 0; i < response.data.length; i++) {
                            clientList.set(response.data[i].id, response.data[i]);
                        }
                        
                    }
                    setClientList(clientList);
                }

            }

        });
}
getClientList();


// client table show
function setClientList(list) {

    $('#clientTable').dataTable().fnDestroy();
    $('#clientList').empty();
    var tblData = '', status;
    
    for (let k of list.keys()) {
        
        let client = list.get(k);

        switch (client.status) {
            case '1':
                status = '<span class="badge badge-pill badge-success">Active</span>';
                break;

            case '0':
                status = '<span class="badge badge-pill badge-danger">Inactive</span>';
                break;

        }
        tblData += `
        <tr>
                <td>` + client.id + `</td>
                <td>` + client.firstName + ` ` + client.lastName + `</td>
                <td>` + client.address1 + `</td>
                <td>` + client.contact + `</td>
                <td>` + status + `</td>
                <td> <a href="#" onclick="updateClientDetails(${client.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                
                </td>
                
        </tr>`            
    }
    
    $('#clientList').html(tblData);
    $('#clientTable').DataTable();
}


//update client
function updateClientDetails(id) {
    let client = clientList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#firstName').val('');
    $('#lastName').val('');
    $('#email').val('');
    $('#orderNote').val('');
    $('#openOutstanding').val('');
    $('#outstanding').val('');
    $('#phone').val('');
    $('#country_id').val('');
    $('#state_id').val('');
    $('#city_id').val('');
    $('#address1').val('');
    $('#address2').val('');
    $('#postcode').val('');
    $("#active").attr('checked', false) ;
    $("#inactive").attr('checked',false);
    $('.error').text('');
    //set details
    $('#id').val(client.id);
    $('#firstName').val(client.firstName);
    $('#lastName').val(client.lastName);
    $('#email').val(client.email);
    $('#orderNote').val(client.orderNote);
    $('#openOutstanding').val(client.openOutstanding);
    $('#outstanding').val(client.outstanding);
    $('#phone').val(client.contact); 
    $('#country_id').val(client.country).change();
    $('#state_id').val(client.state).change();
    $('#city_id').val(client.city).change();
    $('#address1').val(client.address1);
    $('#address2').val(client.address2);
    $('#postcode').val(client.postcode);
    
    (client.status == 1) ? $("#active").attr('checked', 'checked') : $("#inactive").attr('checked', 'checked');
    $('#addClientModal').modal('toggle');
}

//setCountryList

function setClientCountryDropdown(list) {

    //var options = '<option value="" disabled selected hidden>India</option>';
    let options='<option value="" disable selected hidden>Please choose...</option>';
    
    for (let k of list.keys()) {
        
        let country = list.get(k);
        
          options+=`<option value="`+country.id+`">`+country.country+`</option>`;
        
        
      }        
    
    $('#country_id').html(options);
    // $('#state_id').prop('disabled',true);
    // $('#city_id').prop('disabled',true);
}

// getCountryList
function getClientCountryList() {
    $.ajax({

        url: ebase_url+'country',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        countryList.set(response.data[i].id, response.data[i]);
                    }
                    setClientCountryDropdown(countryList);
                }

            }

        }

    });
}
getClientCountryList();

//setClientState

$("#country_id").change(function() {
    var countryid=this.value;
    $('#state_id').html('');
    $.ajax({

        url: ebase_url+'state/'+countryid,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        
         
            if (response.status == 200) {
                let option='<option value="" disable selected hidden>Please choose...</option>';
                       
                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        if(response.data[i].is_active==1){
                        option +=`<option value="${response.data[i].id}">${response.data[i].state}</option>`;
                     }
                    }
                    
                }
                $('#state_id').html(option);
                $('#city_id').html('');
                // $('#state_id').prop('disabled',false);
                // $('#city_id').prop('disabled',true);

            }

        }

    });
});

//setClientCity

$("#state_id").change(function() {
    var countryid=this.value;
    $('#city_id').html('');
    $.ajax({

        url: ebase_url+'statecity/'+countryid,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {
                let option='<option value="" disabled selected hidden>Please Choose...</option>';
                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        option +=`<option value="${response.data[i].id}">${response.data[i].city}</option>`;
                    }
                    
                }
                $('#city_id').html(option);
                // $('#city_id').prop('disabled',false);
            }

        }

    });
});

//import clientValidation script
var clientValidation = document.createElement('script');
clientValidation.src = ebase_url + 'resource/js/custom/clientValidation.js';
clientValidation.setAttribute("type", "text/javascript");
document.head.appendChild(clientValidation);