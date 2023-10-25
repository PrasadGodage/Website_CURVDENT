let iconList = new Map();

$('#addIconForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addIconForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'super/icon',

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
                    $('#addIconModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(iconList.has(id)){
                    iconList.delete(id);   
                 }
                 iconList.set(id, response.data);
                 setIconList(iconList);

                    swal("Good job!", response.msg, "success");


                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


$('#addIconBtn').click(function () {
    $('#addIconModal').modal('toggle');
    $("#addIconForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


$('#icon').keyup(function(e) { 
   // $("#iconMirror").addClass('');
    $("#iconMirror").removeAttr('class');
    $("#iconMirror").addClass(this.value);
})


function getIconList() {
    $.ajax({

        url: base_url+'super/icon',

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
                        iconList.set(response.data[i].id, response.data[i]);
                    }
                    
                }

            }

        }

    });
}
getIconList();



function setIconList(list) {

    $('#iconTable').dataTable().fnDestroy();
    $('#iconList').empty();
    var tblData = '';
    
    for (let k of list.keys()) {
        
        let icon = list.get(k);
        
        

        tblData += `
                <tr>
                        <td>${icon.id}</td>
                        <td>${icon.icon_title}</td>
                        <td><span><i class="${icon.icon}" aria-hidden="true" style="font-size:20px;"></i></span></td>
                        <td> <a href="#" onclick="updateIconDetails(${icon.id})" title="Update Icon" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#iconList').html(tblData);
    $('#iconTable').DataTable();
}

setIconList(iconList);

function updateIconDetails(id) {
    let icon = iconList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#icon_title').val('');
    $('#icon').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(icon.id);
    $('#icon_title').val(icon.icon_title);
    $('#icon').val(icon.icon);
    $("#iconMirror").addClass(icon.icon);
    $('#addIconModal').modal('toggle');
}

