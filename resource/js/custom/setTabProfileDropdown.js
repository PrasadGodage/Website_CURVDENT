
    let tabList = new Map();

    function getTabList() {
        $.ajax({

            url: base_url+'tab',

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
                            tabList.set(response.data[i].id, response.data[i]);
                        }
                        setTabProfileDropdown(tabList);
                    }

                }

            }

        });
    }
    getTabList();


    


    


function setTabProfileDropdown(list) {

    var options = '';
    
    for (let k of list.keys()) {
        
        let tab = list.get(k);
        if(tab.is_active==1){
          options+=`<option value="`+tab.id+`">`+tab.tab_name+`</option>`;
        }
        
      }
        
    
    $('#tab_id').html(options);
    
}

