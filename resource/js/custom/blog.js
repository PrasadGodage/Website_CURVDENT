let categoryList = new Map();

// category table show
function setBlogList(list) {
    console.log(list);

    $('#uiList').empty();
    var ulData = '';

    for (let k of list.keys()) {

        let category = list.get(k);

        ulData += `<li>` + category.category_name + `</li>`;
    }

    $('#uiList').html(ulData);
}

// get category data
function getBlogList() {
    $.ajax({

        url: base_url + 'category_api',

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
                        categoryList.set(response.data[i].id, response.data[i]);
                    }
                    setBlogList(categoryList);
                    console.log(categoryList);
                }
            }
        },
        
    });
}
getBlogList();
