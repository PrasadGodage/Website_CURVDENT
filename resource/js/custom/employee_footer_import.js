var base_url = sessionStorage.getItem('url');
var token = sessionStorage.getItem('token');
var tabPermission = JSON.parse(sessionStorage.getItem("tabPermission"));
var activityPermission = JSON.parse(sessionStorage.getItem("activityPermission"));

//import setEmployeeSidebar script
var setEmployeeSidebar = document.createElement('script');
setEmployeeSidebar.src = base_url + 'resource/js/custom/setEmployeeSidebar.js';
document.head.appendChild(setEmployeeSidebar);


//import employeeLogout script
var employeeLogout = document.createElement('script');
employeeLogout.src = base_url + 'resource/js/custom/employeeLogout.js';
document.head.appendChild(employeeLogout);
