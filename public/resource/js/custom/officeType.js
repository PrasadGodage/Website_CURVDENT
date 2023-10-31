
let officeTypeList = new Map();


function getOfficeTypeList() {
    $.ajax({

        url: base_url+'super/officeType',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        officeTypeList.set(response.data[i].id, response.data[i]);
                    }
                    setOfficeTypeList(officeTypeList);
                }

            }

        }

    });
}
getOfficeTypeList();

function setOfficeTypeList(list) {
    
    $('#officeTypeTable').dataTable().fnDestroy();
    $('#officeTypeList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let office = list.get(k);
        
               tblData += `
                <tr>
                        <td>` + office.id + `</td>
                        <td>` + office.type + `</td>
                        <td> <a href="#" onclick="updateOfficeTypeDetails(` + office.id + `)" title="Update Tab" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#officeTypeList').html(tblData);
    $('#officeTypeTable').DataTable();
}


$('#addOfficeTypeForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addOfficeTypeForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'super/officeType',

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
                    $('#addOfficeTypeModal').modal('toggle');
                   
                let id=response.data.id;
                  
                 if(officeTypeList.has(id)){
                    officeTypeList.delete(id);   
                 }
                 officeTypeList.set(id, response.data);
                 setOfficeTypeList(officeTypeList);
                 swal("Good job!", response.message, "success");
                 setTimeout(
                    $(location).attr('href',base_url+'super/office_type'),
                     8000
                     )
                } else {

                    swal("Good job!", response.message, "error");

                }

            }

        });
    }
});



$('#addOfficeTypeBtn').click(function () {
    $('#addOfficeTypeModal').modal('toggle');
    $("#addOfficeTypeForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    // setIconDropdown(iconList);
    // $("#iconMirror").removeAttr('class');
    // $('#is_subtab').prop('checked',false);
});



function updateOfficeTypeDetails(id) {
    let office = officeTypeList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#type').val('');
    $('.error').text('');
    //set details
    $('#id').val(office.id);
    $('#type').val(office.type);
    $('#addOfficeTypeModal').modal('toggle');
}



//import activityValidation script
// var activityValidation = document.createElement('script');
// activityValidation.src = base_url + 'resource/js/custom/activityValidation.js';
// activityValidation.setAttribute("type", "text/javascript");
// document.head.appendChild(activityValidation);