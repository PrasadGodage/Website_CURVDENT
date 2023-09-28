let subscriberList = new Map();

//Submit Category Btn script

$('#addSubscriberForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addSubscriberForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'newsletter_api',

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
                    $('#addSubscriberModal').modal('toggle');

                    let id=response.data.id;
                  
                 if(subscriberList.has(id)){
                    subscriberList.delete(id);   
                 }
                 subscriberList.set(id, response.data);
                 setSubscriberList(subscriberList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'subscriber');
                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});


// ---------------------- delete data ---------------------------------------------
function deletesubscriberDetails(id) {
    // Show a confirmation dialog using SweetAlert or JavaScript confirm
    // swal({
    //     title: 'Are you sure?',
    //     text: 'You won\'t be able to revert this!',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         // Send an AJAX request to delete the data
            $.ajax({
                url: ebase_url + 'newsletter_api/' + id, // Replace with your actual delete API endpoint
                type: 'DELETE',
                headers: {
                    "Authorization": etoken
                },
                dataType: 'json',
                success: function (response) {
                    if (response.status == 200) {
                        // Remove the table row
                        // $('#postTable tr[data-id="' + id + '"]').remove();
                        // Show a success message
                        swal("Good job!", response.msg, "success");  
                            setTimeout(
                                $(location).attr('href',ebase_url+'subscriber'),
                                 8000
                                 )
                        } else {

                            swal("Good job!", response.msg, "error");

                        }
                },
                // error: function () {
                //     // Handle the case where the AJAX request itself fails
                //     swal(
                //         'Error!',
                //         'Something went wrong!',
                //         'error'
                //     );
                // }
            });
        }
//     });
// }



// Updte Category Details----------------------------------------------------------------------------------------
function updatesubscriberDetails(id) {
    let subscriber = subscriberList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#email').val('');
    $('#is_active').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(subscriber.id);
    $('#email').val(subscriber.email);
    $('#is_active').val(subscriber.is_active);
    $('#addSubscriberModal').modal('toggle');
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
                    }
                    
                }
                setSubscriberList(subscriberList);
                console.log(subscriberList);
            }

        }
        
    });
}
getSubscriberList();

//Add Subscriber Btn script -----------------------------------------------------------------
$('#addSubscriberBtn').click(function () {
    $('#addSubscriberModal').modal('toggle');
    $("#addSubscriberForm").trigger("reset");
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
