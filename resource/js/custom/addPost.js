let categoryList = new Map();

$("#id_category").change(function(){
    
    var category_id=this.value;
       $.ajax({

        url: ebase_url+'category_api'+category_id,

        type: 'GET',

        async:false,

        headers: {
            "Authorization": etoken
        },

        dataType: 'json',

        success: function (response) {
        
         
            if (response.status == 200) {
                let option='<option value="disabled selected hidden>"</option>';
                       
                if (response.data.lenght != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        
                        categoryList.set(response.data[i].id, response.data[i]);
                      
                    }
                   
                }

            }

        }

    });
});