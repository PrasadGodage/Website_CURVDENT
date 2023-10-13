let newsletterList = new Map();
let updatenewsletterId=id;
//  console.log('post Id2:'+updatepostId);
 console.log('newsletter id='+id);


 // jQuery
$(document).ready(function() {
    // When the file input field changes (a file is selected)
    $('#PDF').change(function() {
        // Get the selected file's name
        var fileName = $(this).val().split('\\').pop();

        // Display the file name in the div
        $('#selectedPdfName').text('Selected PDF: ' + fileName);
    });

    // Trigger the hidden file input when the button is clicked
    $('#browseButton').click(function() {
        $('#PDF').click();
    });
});



$('#addNewsletterForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#addNewsletterForm").valid();
    var formdata = new FormData(this);
    console.log(formdata);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'postNewsletter_api',

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

                console.log(response);

                if (response.status == 200) {
                    $('#addNewsletterForm').modal('toggle');

                    let id=response.data.id;
                  
                 if(newsletterList.has(id)){
                    newsletterList.delete(id);   
                 }
                 newsletterList.set(id, response.data);
                 setNewsletterList(newsletterList);

                    swal("Good job!", response.msg, "success");
                    $(location).attr('href',ebase_url+'newsletter');
                } else {

                    swal("Error!", response.msg, "error");

                }

            }

        });
    }
});


function getNewsletterList() {
    $.ajax({

        url: ebase_url+'postNewsletter_api',

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
                        newsletterList.set(response.data[i].id, response.data[i]);
                    }
                    
                }
                setNewsletterList(newsletterList);
            }

        }

    });
}
getNewsletterList();


function setNewsletterList(list){
    console.log(list);
}
  

  $('#cancleaddNewsletterPage').click(function () {

    $(location).attr('href',ebase_url+'addNewsletter');
     
    
 });


