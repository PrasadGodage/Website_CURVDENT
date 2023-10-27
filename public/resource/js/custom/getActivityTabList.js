
    let tabList = new Map();

    function getActivityTabList() {
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
                        setTabActivityList(tabList);
                    }

                }

            }

        });
    }
    


    getActivityTabList();


    