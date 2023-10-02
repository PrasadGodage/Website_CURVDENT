// let subscriberList = new Map();

//Add Subscriber Btn script -----------------------------------------------------------------
// $('#addSubscriberBtn').click(function () {
//     $('#addSendEmailModal').modal('toggle');
//     $("#addSubscriberForm").trigger("reset");
//     $('#id').val('');
//     $('.error').text('');
// });

// $(document).ready(function () {
    // When the "Select All" checkbox is clicked
    $('#selectAll').click(function () {
        // Check or uncheck all row checkboxes based on the "Select All" checkbox state
        $('.custom-control-input').prop('checked', this.checked);
    });

    // When any row checkbox is clicked
    $('.custom-control-input').click(function () {
        // Check if all row checkboxes are checked
        if ($('.custom-control-input:checked').length === $('.custom-control-input').length) {
            // If all row checkboxes are checked, check the "Select All" checkbox
            $('#selectAll').prop('checked', true);
        } else {
            // If any row checkbox is unchecked, uncheck the "Select All" checkbox
            $('#selectAll').prop('checked', false);
        }
    });
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
                <a href="#" onclick="sendEmail()">Sent<i class="fa fa-fw fa-arrow-right" style="font-size: 20px;"></i></a>                         
                </td>
                
        </tr>`;
        index++;
    }
    
    $('#subscriberList').html(tblData);
    $('#subscriberTable').DataTable();
    }



$('#addSendEmailForm').on('submit', function (e) {

    e.preventDefault();

//     var returnVal = $("#addSendEmailForm").valid();
//     var formdata = new FormData(this);
//     console.log(formdata);
//     if (returnVal) {
//         $.ajax({

//             url: ebase_url+'postNewsletter_api',

//             type: 'POST',

//             headers: {
//                 "Authorization": etoken
//             },

//             data: formdata,

//             cache: false,

//             contentType: false,

//             processData: false,

//             dataType: 'json',

//             success: function (response) {

//                 console.log(response);

//                 if (response.status == 200) {
//                     $('#addSendEmailForm').modal('toggle');

//                     let id=response.data.id;
                  
//                  if(postList.has(id)){
//                     postList.delete(id);   
//                  }
//                  postList.set(id, response.data);
//                  setPostList(postList);

//                     swal("Good job!", response.msg, "success");
//                     $(location).attr('href',ebase_url+'posting');
//                 } else {

//                     swal("Good job!", response.msg, "error");

//                 }

//             }

//         });
//     }
});



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

function sendEmail(){

}