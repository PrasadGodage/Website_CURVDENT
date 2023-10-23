
let tabList = new Map();

function getTabList() {
    $.ajax({

        url: base_url+'super/tab',

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
                        tabList.set(response.data[i].id, response.data[i]);
                    }
                    setTabList(tabList);
                }

            }

        }

    });
}
getTabList();

function setTabList(list) {
    
    $('#tabTable').dataTable().fnDestroy();
    $('#tabList').empty();
    var tblData = '', badge, status;
    
    for (let k of list.keys()) {
        
        let tab = list.get(k);
        
        switch (tab.is_active) {
            case '1':
                status = '<span class="badge badge-pill badge-success">Active</span>';
                break;

            case '0':
                status = '<span class="badge badge-pill badge-danger">Inactive</span>';
                break;

        }

        tblData += `
                <tr>
                        <td>` + tab.id + `</td>
                        <td>` + tab.tab_name + `</td>
                        <td><i class="${tab.icon}" aria-hidden="true" style="font-size:20px;"></i></td>
                        <td>` + status + `</td>
                        <td> <a href="#" onclick="updateTabDetails(` + tab.id + `)" title="Update Tab" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a> </td>
                </tr>
                `;
    }
    
    $('#tabList').html(tblData);
    $('#tabTable').DataTable();
}


$('#addTabForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addTabForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: base_url+'super/tab',

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
                    $('#addTabModal').modal('toggle');
                   
                let id=response.data.id;
                  
                 if(tabList.has(id)){
                    tabList.delete(id);   
                 }
                 tabList.set(id, response.data);
                 setTabList(tabList);
                 swal("Good job!", response.msg, "success");
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});



$('#addTabBtn').click(function () {
    $('#addTabModal').modal('toggle');
    $("#addTabForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    setIconDropdown(iconList);
    $("#iconMirror").removeAttr('class');
    $('#is_subtab').prop('checked',false);
});

function updateTabDetails(id) {
    let tab = tabList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#tab_name').val('');
    $("#active").attr('checked', false) ;
     $("#inactive").attr('checked',false);
    $('.error').text('');
    //set details
    $('#id').val(tab.id);
    $('#tab_name').val(tab.tab_name);
    
    (tab.is_active == 1) ? $("#active").attr('checked', 'checked') : $("#inactive").attr('checked', 'checked');
    (tab.is_subtab == 1) ? $("#is_subtab").attr('checked', true) : $("#is_subtab").attr('checked', false);
    $('#icon_id').val(tab.icon_id).change();
    $('#addTabModal').modal('toggle');
}

let iconList = new Map();

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

function setIconDropdown(list) {

    var options = '<option value="" disabled selected hidden>Please Choose...</option>';
    
    for (let k of list.keys()) {
        
        let icon = list.get(k);
        
          options+=`<option value="${icon.id}">${icon.icon_title}</option>`;
        
        
      }
        
    
    $('#icon_id').html(options);
    
}

setIconDropdown(iconList);


$('#icon_id').change(function(){
    let icon = iconList.get(this.value);
    $("#iconMirror").removeAttr('class');
    $('#iconMirror').addClass(icon.icon);
});