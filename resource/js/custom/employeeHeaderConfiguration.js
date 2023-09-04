
var ebase_url = sessionStorage.getItem('eurl');
var etoken = sessionStorage.getItem('etoken');
var etype = sessionStorage.getItem('etype');
var rolePermission = JSON.parse(sessionStorage.getItem("rolePermission"));
var empdetails = JSON.parse(sessionStorage.getItem("empdetails"));
var activityControlPermission = JSON.parse(sessionStorage.getItem("activityControlPermission"));
var tabPermission = JSON.parse(sessionStorage.getItem("tabPermission"));
var activityPermission = JSON.parse(sessionStorage.getItem("activityPermission"));
//alert(etoken);
if (etoken == null){
    window.location.replace('employeeLogin');
}
var profileImage=(empdetails.profile_image!=null)?ebase_url+empdetails.profile_image:ebase_url+'resource/images/avatar-custom.png';

$('#userImageSm').attr('src',profileImage);
$('#userImageMd').attr('src',profileImage);
$('#userName').html(empdetails.name);
$('#userRole').html(empdetails.role);
$('#userIdforAvatar').html(empdetails.userid);

//import setEmployeeSidebar script
var setEmployeeSidebar = document.createElement('script');
setEmployeeSidebar.src = ebase_url + 'resource/js/custom/setEmployeeSidebar.js';
document.head.appendChild(setEmployeeSidebar);


//import employeeLogout script
var employeeLogout = document.createElement('script');
employeeLogout.src = ebase_url + 'resource/js/custom/employeeLogout.js';
document.head.appendChild(employeeLogout);
