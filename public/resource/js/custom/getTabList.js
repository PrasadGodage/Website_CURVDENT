
    let tabList = new Map();

    function getTabList() {
        $.ajax({

            url: base_url+'super/tab',

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
                        setTabList(tabList);
                    }

                }

            }

        });
    }
    getTabList();


    


    