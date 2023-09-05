var base_url = sessionStorage.getItem('url');
var token = sessionStorage.getItem('token');

//import employeeLogout script
var superLogout = document.createElement('script');
superLogout.src = base_url + 'resource/js/custom/superLogout.js';
superLogout.setAttribute("type", "text/javascript");
document.head.appendChild(superLogout);
