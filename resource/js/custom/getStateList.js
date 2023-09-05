
    let stateList = new Map();

    function getStateList() {
        $.ajax({

            url: base_url+'state',

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
                            stateList.set(response.data[i].id, response.data[i]);
                        }
                        
                    }

                }

            }

        });
    }
    getStateList();


    


    