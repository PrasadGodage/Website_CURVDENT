let cakedetailList = new Map();

function getCakeDetailList() {
    $.ajax({

        url: ebase_url+'cakemappingdetail_api',

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        cakedetailList.set(response.data[i].id, response.data[i]);
                    }
                    setCakeDropdown();
                    setFlavourDropdown();
                    setUnitDropdown();
                    setCakeDetailList(cakedetailList);
                    
                }

            }else if(response.status==404){
                    setCakeDropdown();
                    setFlavourDropdown();
                    setUnitDropdown();
            }
          
        }

    });
}
getCakeDetailList();





