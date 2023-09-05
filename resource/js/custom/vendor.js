let vendorList = new Map();
let countryList = new Map();

//submit
$('#addVendorForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addVendorForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'vendor_api',

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
                    $('#addVendorModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(vendorList.has(id)){
                    vendorList.delete(id);   
                 }
                 vendorList.set(id, response.data);
                 setVendorList(vendorList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addVendorBtn').click(function () {
    $('#addVendorModal').modal('toggle');
    $("#addVendorForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    $('#country_id').val("").change();
    $('#state_id').val("").change();
    $('#city_id').val("").change();
    // $('#state_id').prop('disabled',true);
});

//Next Input Field Jump on Enter

$(document).ready(function() {
    $('#vendorName').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#gst').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#gst').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#contactFirm').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#contactFirm').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#contactSales').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#contactSales').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#contactTechnical').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#contactTechnical').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#email').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#email').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#country_id').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#country_id').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#state_id').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#state_id').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#city_id').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#city_id').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#address').focus(); // Switch focus to input2
        }
    });
});
$(document).ready(function() {
    $('#address').on('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent Enter from submitting the form (if applicable)
            $('#pincode').focus(); // Switch focus to input2
        }
    });
});

function getVendorList() {
    $.ajax({

        url: ebase_url+'vendor_api',

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
                        vendorList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setVendorList(vendorList);
            }

        }

    });
}
getVendorList();

// vendor table show
function setVendorList(list) {

    $('#vendorTable').dataTable().fnDestroy();
    $('#vendorList').empty();
    var tblData = '', status;
    
    for (let k of list.keys()) {
        
        let vendor = list.get(k);

       
        tblData += `
        <tr>
                <td>` + vendor.id + `</td>
                <td>` + vendor.vendorName + `</td>
                <td>` + vendor.email + `</td>
                <td>` + vendor.address + `</td>
                <td>` + vendor.contactFirm + `</td>
                <td> <a href="#" onclick="updateVendorDetails(${vendor.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> 
                
                </td>
                
        </tr>`            
    }
    
    $('#vendorList').html(tblData);
    $('#vendorTable').DataTable();
}
//update vendor
function updateVendorDetails(id) {
    let vendor = vendorList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#vendorName').val('');
    $('#gst').val('');
    $('#contactFirm').val('');
    $('#contactSales').val('');
    $('#contactTechnical').val('');
    $('#email').val('');
    $('#country_id').val('');
    $('#state_id').val('');
    $('#city_id').val('');
    $('#address').val('');
    $('#pincode').val('');
    $("#active").attr('checked', false) ;
    $("#inactive").attr('checked',false);
    $('.error').text('');
    //set details
    $('#id').val(vendor.id);
    $('#vendorName').val(vendor.vendorName);
    $('#gst').val(vendor.gstin); 
    $('#contactFirm').val(vendor.contactFirm);
    $('#contactSales').val(vendor.contactSales);
    $('#contactTechnical').val(vendor.contactTechnical);
    $('#email').val(vendor.email);
    $('#country_id').val(vendor.country).change();
    $('#state_id').val(vendor.state).change();
    $('#city_id').val(vendor.city).change();
    $('#address').val(vendor.address);
    $('#pincode').val(vendor.pincode);
    (vendor.status == 1) ? $("#active").attr('checked', 'checked') : $("#inactive").attr('checked', 'checked');
    $('#addVendorModal').modal('toggle');
}

//setCountryList

function setVendorCountryDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let country = list.get(k);
        
          options+=`<option value="`+country.id+`">`+country.country+`</option>`;
        
        
      }        
    
    $('#country_id').html(options);
    // $('#state_id').prop('disabled',true);
    // $('#city_id').prop('disabled',true);
}

// getCountryList
function getVendorCountryList() {
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
                    setVendorCountryDropdown(countryList);
                }

            }

        }

    });
}
getVendorCountryList();

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
                let option='<option value="" disabled selected hidden>Please Choose...</option>';
                       
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










//import vendorValidation script
var vendorValidation = document.createElement('script');
vendorValidation.src = ebase_url + 'resource/js/custom/vendorValidation.js';
vendorValidation.setAttribute("type", "text/javascript");
document.head.appendChild(vendorValidation);
