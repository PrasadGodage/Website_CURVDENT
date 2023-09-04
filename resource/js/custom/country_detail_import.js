var url = window.location.href;
var idx = url.indexOf("superCountryDetails");
var countryid = url.substring(idx).split("/")[1];


//import updateCountry script
var updateCountry = document.createElement('script');
updateCountry.src = base_url + 'resource/js/custom/updateCountry.js';
updateCountry.setAttribute("type", "text/javascript");
document.head.appendChild(updateCountry);


//import getCountryData script
var getCountryData = document.createElement('script');
getCountryData.src = base_url + 'resource/js/custom/getCountryData.js';
getCountryData.setAttribute("type", "text/javascript");
document.head.appendChild(getCountryData);


//import updateCountryInformation script
var updateCountryInformation = document.createElement('script');
updateCountryInformation.src = base_url + 'resource/js/custom/updateCountryInformation.js';
updateCountryInformation.setAttribute("type", "text/javascript");
document.head.appendChild(updateCountryInformation);


//import addCountryState script
var addCountryState = document.createElement('script');
addCountryState.src = base_url + 'resource/js/custom/addCountryState.js';
addCountryState.setAttribute("type", "text/javascript");
document.head.appendChild(addCountryState);


//import setCountryState script
var setCountryState = document.createElement('script');
setCountryState.src = base_url + 'resource/js/custom/setCountryState.js';
setCountryState.setAttribute("type", "text/javascript");
document.head.appendChild(setCountryState);


//import getCountryStateList script
var getCountryStateList = document.createElement('script');
getCountryStateList.src = base_url + 'resource/js/custom/getCountryStateList.js';
getCountryStateList.setAttribute("type", "text/javascript");
document.head.appendChild(getCountryStateList);



//import deleteCountryState script
var deleteCountryState = document.createElement('script');
deleteCountryState.src = base_url + 'resource/js/custom/deleteCountryState.js';
deleteCountryState.setAttribute("type", "text/javascript");
document.head.appendChild(deleteCountryState);

//import updateCountryState script
var updateCountryState = document.createElement('script');
updateCountryState.src = base_url + 'resource/js/custom/updateCountryState.js';
updateCountryState.setAttribute("type", "text/javascript");
document.head.appendChild(updateCountryState);

//import setCountryStateDropdown script
var setCountryStateDropdown = document.createElement('script');
setCountryStateDropdown.src = base_url + 'resource/js/custom/setCountryStateDropdown.js';
setCountryStateDropdown.setAttribute("type", "text/javascript");
document.head.appendChild(setCountryStateDropdown);

//import addCountryStateCity script
var addCountryStateCity = document.createElement('script');
addCountryStateCity.src = base_url + 'resource/js/custom/addCountryStateCity.js';
addCountryStateCity.setAttribute("type", "text/javascript");
document.head.appendChild(addCountryStateCity);


//import setCountryStateCityList script
var setCountryStateCityList = document.createElement('script');
setCountryStateCityList.src = base_url + 'resource/js/custom/setCountryStateCityList.js';
setCountryStateCityList.setAttribute("type", "text/javascript");
document.head.appendChild(setCountryStateCityList);

//import getCountryStateCityList script
var getCountryStateCityList = document.createElement('script');
getCountryStateCityList.src = base_url + 'resource/js/custom/getCountryStateCityList.js';
getCountryStateCityList.setAttribute("type", "text/javascript");
document.head.appendChild(getCountryStateCityList);



//import updateCountryStateCity script
var updateCountryStateCity = document.createElement('script');
updateCountryStateCity.src = base_url + 'resource/js/custom/updateCountryStateCity.js';
updateCountryStateCity.setAttribute("type", "text/javascript");
document.head.appendChild(updateCountryStateCity);