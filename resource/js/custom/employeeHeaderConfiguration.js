
var ebase_url = sessionStorage.getItem('eurl');
var etoken = sessionStorage.getItem('etoken');
var empdetails = JSON.parse(sessionStorage.getItem("empdetails"));

if (etoken == null){
    window.location.replace('employeeLogin');
}
// else if($config['sess_expire_on_close'] == TRUE)
// {
//     window.location.replace('employeeLogin');
// }

//var profileImage=(empdetails.profile_image!=null)?ebase_url+empdetails.profile_image:ebase_url+'resource/images/avatar-custom.png';

// $('#userImageSm').attr('src',profileImage);
// $('#userImageMd').attr('src',profileImage);
// $('#userName').html(empdetails.name);
// $('#userIdforAvatar').html(empdetails.userid);

$(window).on('beforeunload', function() {
    // Perform logout operations here
    // For example, make an AJAX call to a logout API endpoint
    
    // This is just an example, replace it with your actual logout logic
    $.ajax({
        url: ebase_url + 'employeeLogout', // Replace with your logout API endpoint
        method: 'POST',
        async: false, // Make the call synchronous to ensure it completes before the tab closes
        success: function(response) {
            // Handle the logout response if needed
        }
    });
});




//import employeeLogout script
var employeeLogout = document.createElement('script');
employeeLogout.src = ebase_url + 'resource/js/custom/employeeLogout.js';
document.head.appendChild(employeeLogout);
