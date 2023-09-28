let subscriberList = new Map();

// get posting data
function getSubscriberList() {
    $.ajax({

        url: ebase_url+'newsletter_api',

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
                        subscriberList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setSubscriberList(subscriberList);
                console.log(subscriberList);
            }

        }
        
    });
}
getSubscriberList();

//Add Category Btn script -----------------------------------------------------------------
$('#addSubscriberBtn').click(function () {
    $('#addCategoryModal').modal('toggle');
    $("#addCategoryForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


//------------- show table data ----------------------------

function setSubscriberList(list) {

    $('#subscriberTable').dataTable().fnDestroy();
    $('#subscriberList').empty();
    var tblData = '';
    var index=1;
    
    for (let k of list.keys()) {
        
        let subscriber = list.get(k);
    
        tblData += `
        <tr>
                <td>` + index + `</td>
                <td>` + subscriber.email + `</td>
                <td> <a href="#" onclick="updatesubscriberDetails(${subscriber.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deletesubscriberDetails(${subscriber.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#subscriberList').html(tblData);
    $('#subscriberTable').DataTable();
    }
