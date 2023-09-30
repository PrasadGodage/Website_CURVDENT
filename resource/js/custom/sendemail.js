let subscriberList = new Map();

//Add modal send Btn script -----------------------------------------------------------------
$('#newsletterTable').on('click', '.send-button', function (e) {
    e.preventDefault();
    $('#addSendEmailModal').modal('toggle');
    $("#addSendEmailForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
});


// //Add Subscriber Btn script -----------------------------------------------------------------
// $('#addSubscriberBtn').click(function () {
//     $('#addSendEmailModal').modal('toggle');
//     $("#addSubscriberForm").trigger("reset");
//     $('#id').val('');
//     $('.error').text('');
// });

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
                <td> <a href="#" onclick="updateSubscriberDetails(${subscriber.id})" ><i class="mdi mdi-tooltip-edit" style="font-size: 20px;"></i></a>
                <a href="#" onclick="deletesubscriberDetails(${subscriber.id})"><i class="mdi mdi-delete-circle" style="font-size: 20px;"></i></a>                          
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#subscriberList').html(tblData);
    $('#subscriberTable').DataTable();
    }


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
                    // sendEmail(response.data[0]);
                    }
                    
                }
                setSubscriberList(subscriberList);
                console.log(subscriberList);
            }

        }
        
    });
}
getSubscriberList();
