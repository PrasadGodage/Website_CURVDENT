let contactList = new Map();

// get posting data
function getContactList() {
    $.ajax({

        url: ebase_url+'contact_api',

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
                        contactList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setContactList(contactList);
                console.log(contactList);
            }

        }
        
    });
}
getContactList();

function setContactList(list){

    $('#inquiryTable').dataTable().fnDestroy();
    $('#inquiryList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let contactList = list.get(k);
    
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + contactList.name + `</td>
                <td>` + contactList.subject + `</td>
                <td>` + contactList.number + `</td>
                <td> <a href="#" onclick="viewContactDetails(${contactList.id})" title="View Contact" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#inquiryList').html(tblData);
    $('#inquiryTable').DataTable();
}

function viewContactDetails(id){
    
}