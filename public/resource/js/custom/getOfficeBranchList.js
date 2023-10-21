let officeBranchList = new Map();

function getOfficeBranchList() {
    $.ajax({

        url: base_url+'officeBranch',

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
                        officeBranchList.set(response.data[i].id, response.data[i]);
                    }
                    
                    setOfficeBranchList(officeBranchList);
                    getOfficeTypeList();
                    setHeadOfDeptDropdown(officeBranchList);
                    
                }

            }else if(response.status==404){
                $('#hod_id').html('<option value="0">Self</option>');
            }

        }

    });
}

getOfficeBranchList();




