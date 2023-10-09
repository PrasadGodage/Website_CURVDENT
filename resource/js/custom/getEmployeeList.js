let employeeList = new Map();


function getEmployeeAccessFlag(){
      var val=0;
     for(let permission of activityControlPermission) {
        
            if(permission.url=='employeeRegistration' && permission.permission=='1'){
                switch(permission.control_name){
                    case 'showSelf':val=1;break;
                    case 'showSelfWithChild':val=2;break;
                    case 'showAll':val=3;break;
                }
            }
        
        
      }
      return val;
}





function getEmployeeList() {
    
    let flag;
    let userid;
    if(type=='employee'){
        flag=getEmployeeAccessFlag();
        userid=empdetails.id;
    }else if(type=='master'){
        flag=3;
        userid=0;
    }
    
    $.ajax({

        url: base_url+'employee/'+userid+'/'+flag,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": token
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        employeeList.set(response.data[i].id, response.data[i]);
                    }
                    setEmployeeList(employeeList);
                    getEmployeeRoleList();
                    getEmployeeCountryList();
                }

            }else if(response.status == 404){
                getEmployeeRoleList();
                    getEmployeeCountryList();
            }

        }

    });
}
getEmployeeList();



