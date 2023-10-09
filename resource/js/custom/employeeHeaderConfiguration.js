
var ebase_url = sessionStorage.getItem('eurl');
var etoken = sessionStorage.getItem('etoken');
var empdetails = JSON.parse(sessionStorage.getItem("empdetails"));

if (etoken == null){
    window.location.replace('employeeLogin');
}
var profileImage=(empdetails.profile_image!=null)?ebase_url+empdetails.profile_image:ebase_url+'resource/images/avatar-custom.png';

$('#userImageSm').attr('src',profileImage);
$('#userImageMd').attr('src',profileImage);
$('#userName').html(empdetails.name);
$('#userIdforAvatar').html(empdetails.userid);



//import employeeLogout script
var employeeLogout = document.createElement('script');
employeeLogout.src = ebase_url + 'resource/js/custom/employeeLogout.js';
document.head.appendChild(employeeLogout);
