var url = window.location.href;
var idx = url.indexOf("profileDetails");
var profileid = url.substring(idx).split("/")[1];
let profileData = new Map();

//import setRoleProfileList script
var setRoleProfileList = document.createElement('script');
setRoleProfileList.src = base_url + 'resource/js/custom/setRoleProfileList.js';
setRoleProfileList.setAttribute("type", "text/javascript");
document.head.appendChild(setRoleProfileList);

//import updateProfile script
var updateProfile = document.createElement('script');
updateProfile.src = base_url + 'resource/js/custom/updateProfile.js';
updateProfile.setAttribute("type", "text/javascript");
document.head.appendChild(updateProfile);

//import setProfileData script
var setProfileData = document.createElement('script');
setProfileData.src = base_url + 'resource/js/custom/setProfileData.js';
setProfileData.setAttribute("type", "text/javascript");
document.head.appendChild(setProfileData);


//import updateProfileInformation script
var updateProfileInformation = document.createElement('script');
updateProfileInformation.src = base_url + 'resource/js/custom/updateProfileInformation.js';
updateProfileInformation.setAttribute("type", "text/javascript");
document.head.appendChild(updateProfileInformation);



//import setTabProfileDropdown script
var setTabProfileDropdown = document.createElement('script');
setTabProfileDropdown.src = base_url + 'resource/js/custom/setTabProfileDropdown.js';
setTabProfileDropdown.setAttribute("type", "text/javascript");
document.head.appendChild(setTabProfileDropdown);


//import setProfileTabList script
var setProfileTabList = document.createElement('script');
setProfileTabList.src = base_url + 'resource/js/custom/setProfileTabList.js';
setProfileTabList.setAttribute("type", "text/javascript");
document.head.appendChild(setProfileTabList);

//import addProfileTab script
var addProfileTab = document.createElement('script');
addProfileTab.src = base_url + 'resource/js/custom/addProfileTab.js';
addProfileTab.setAttribute("type", "text/javascript");
document.head.appendChild(addProfileTab);

//import deleteProfileTab script
var deleteProfileTab = document.createElement('script');
deleteProfileTab.src = base_url + 'resource/js/custom/deleteProfileTab.js';
deleteProfileTab.setAttribute("type", "text/javascript");
document.head.appendChild(deleteProfileTab);

//import addProfileActivity script
var addProfileActivity = document.createElement('script');
addProfileActivity.src = base_url + 'resource/js/custom/addProfileActivity.js';
addProfileActivity.setAttribute("type", "text/javascript");
document.head.appendChild(addProfileActivity);


//import getActivityListForProfile script
var getActivityListForProfile = document.createElement('script');
getActivityListForProfile.src = base_url + 'resource/js/custom/getActivityListForProfile.js';
getActivityListForProfile.setAttribute("type", "text/javascript");
document.head.appendChild(getActivityListForProfile);


//import setProfileActivityList script
var setProfileActivityList = document.createElement('script');
setProfileActivityList.src = base_url + 'resource/js/custom/setProfileActivityList.js';
setProfileActivityList.setAttribute("type", "text/javascript");
document.head.appendChild(setProfileActivityList);

//import getProfileActivityList script
var getProfileActivityList = document.createElement('script');
getProfileActivityList.src = base_url + 'resource/js/custom/getProfileActivityList.js';
getProfileActivityList.setAttribute("type", "text/javascript");
document.head.appendChild(getProfileActivityList);


//import setActivityProfileDropdown script
var setActivityProfileDropdown = document.createElement('script');
setActivityProfileDropdown.src = base_url + 'resource/js/custom/setActivityProfileDropdown.js';
setActivityProfileDropdown.setAttribute("type", "text/javascript");
document.head.appendChild(setActivityProfileDropdown);

//import getActivityControlList script
var getActivityControlList = document.createElement('script');
getActivityControlList.src = base_url + 'resource/js/custom/getActivityControlList.js';
getActivityControlList.setAttribute("type", "text/javascript");
document.head.appendChild(getActivityControlList);



//import profileActivityPermission script
var profileActivityPermission = document.createElement('script');
profileActivityPermission.src = base_url + 'resource/js/custom/profileActivityPermission.js';
profileActivityPermission.setAttribute("type", "text/javascript");
document.head.appendChild(profileActivityPermission);

//import addprofileActivityControl script
var addprofileActivityControl = document.createElement('script');
addprofileActivityControl.src = base_url + 'resource/js/custom/addprofileActivityControl.js';
addprofileActivityControl.setAttribute("type", "text/javascript");
document.head.appendChild(addprofileActivityControl);

//import getProfileActivityControlPermission script
var getProfileActivityControlPermission = document.createElement('script');
getProfileActivityControlPermission.src = base_url + 'resource/js/custom/getProfileActivityControlPermission.js';
getProfileActivityControlPermission.setAttribute("type", "text/javascript");
document.head.appendChild(getProfileActivityControlPermission);


//import setProfileActivityControlPermission script
var setProfileActivityControlPermission = document.createElement('script');
setProfileActivityControlPermission.src = base_url + 'resource/js/custom/setProfileActivityControlPermission.js';
setProfileActivityControlPermission.setAttribute("type", "text/javascript");
document.head.appendChild(setProfileActivityControlPermission);

//import deleteProfileActivity script
var deleteProfileActivity = document.createElement('script');
deleteProfileActivity.src = base_url + 'resource/js/custom/deleteProfileActivity.js';
deleteProfileActivity.setAttribute("type", "text/javascript");
document.head.appendChild(deleteProfileActivity);


//import setRoleProfileDropdown script
var setRoleProfileDropdown = document.createElement('script');
setRoleProfileDropdown.src = base_url + 'resource/js/custom/setRoleProfileDropdown.js';
setRoleProfileDropdown.setAttribute("type", "text/javascript");
document.head.appendChild(setRoleProfileDropdown);

//import addProfileRole script
var addProfileRole = document.createElement('script');
addProfileRole.src = base_url + 'resource/js/custom/addProfileRole.js';
addProfileRole.setAttribute("type", "text/javascript");
document.head.appendChild(addProfileRole);



//import setProfileRoleList script
var setProfileRoleList = document.createElement('script');
setProfileRoleList.src = base_url + 'resource/js/custom/setProfileRoleList.js';
setProfileRoleList.setAttribute("type", "text/javascript");
document.head.appendChild(setProfileRoleList);

//import getProfileRoleList script
var getProfileRoleList = document.createElement('script');
getProfileRoleList.src = base_url + 'resource/js/custom/getProfileRoleList.js';
getProfileRoleList.setAttribute("type", "text/javascript");
document.head.appendChild(getProfileRoleList);



//import deleteProfileRole script
var deleteProfileRole = document.createElement('script');
deleteProfileRole.src = base_url + 'resource/js/custom/deleteProfileRole.js';
deleteProfileRole.setAttribute("type", "text/javascript");
document.head.appendChild(deleteProfileRole);