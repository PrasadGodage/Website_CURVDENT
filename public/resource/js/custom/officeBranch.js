let officeTypeList = new Map();
let countryList = new Map();


function getOfficeTypeList() {
    $.ajax({

        url: base_url+'super/officeType',

        type: 'GET',

        async:false,

        caches:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
                    
                    for (var i = 0; i < response.data.length; i++) {
                       
                       options+=`<option value="`+response.data[i].id+`">`+response.data[i].type+`</option>`;
                    }
                   
                   $('#office_type_id').html(options);
                }

            }

        }

    });
}
getOfficeTypeList();


$('#addOfficeBranchForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addOfficeBranchForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'officeBranch',

            type: 'POST',

            headers: {
                "Authorization": token
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#addOfficeBranchModal').modal('toggle');
                    swal("Good job!", response.msg, "success");

                    let id=response.data.id;
                  
                
                 officeBranchList.set(id, response.data);
                 
                    setOfficeBranchList(officeBranchList);

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addOfficeBranchBtn').click(function () {
    $('#addOfficeBranchModal').modal('toggle');
    $("#addOfficeBranchForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


//setCountryList

function setOfficeCountryDropdown(list) {

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
function getOfficeCountryList() {
    $.ajax({

        url: base_url+'super/country',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

               var options = '<option value="" disabled selected hidden>Please Choose...</option>';
                    
                for (var i = 0; i < response.data.length; i++) {
                   
                   options+=`<option value="`+response.data[i].id+`">`+response.data[i].country	+`</option>`;
                }
               
               $('#country_id').html(options);


            }

        }

    });
}
getOfficeCountryList();

//setClientState

$("#country_id").change(function() {
    var countryid=this.value;
    $('#state_id').html('');
    $.ajax({

        url: base_url+'super/state/'+countryid,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
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

        url: base_url+'super/statecity/'+countryid,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
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

