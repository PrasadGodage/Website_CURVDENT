let postList = new Map();

function getAllPostList() {
    $.ajax({

        url: ebase_url+'blogpage_api',

        type: 'GET',

        async:false,

        dataType: 'json',

        success: function (response) {
        

            if (response.status == 200) {

                if (response.data.length != 0) {
                    for (var i = 0; i < response.data.length; i++) {
                        postList.set(response.data[i].id, response.data[i]);
                        // $('#paragraph1').text(response.data[i].content);
                    }
                    
                }
                setAllPostList(postList);
            }

        }
        
    });
}
getAllPostList();

function setAllPostList(list){

    $('#data6').empty();
    $('#data7').empty();
    var data6 = '';
    var data7 = '';
    
    var imageSrc = ebase_url + '/uiAssets/img/dummy.jpg';
    // data6 += '<div class="main_title2"><h6 style="font-weight:bold;">Most Popular News</h6></div>';

    let firstKey = null;

    for (let temp of list.keys()) {
        firstKey = temp;
        break; // Exit the loop after the first iteration
    }
    // console.log(lastKey);
    let firstPost = list.get(firstKey);

    if (firstPost.photo!='') {
        imageSrc = ebase_url+firstPost.photo;
    }

    data6 +=`<div class="betty-about-img">
                <div class="img"> <img src="${imageSrc}" alt="" width="300" height="250"> </div>
            </div>
    `;


    data7 +=`<h6>${firstPost.title}</h6>`;
    data7 +=`   <p>
                    ${firstPost.content}
                </p>
    `;
    
    data7 +=`
                <div class="read-more-button">
                    <a  href="#" onclick="postDetails(${firstPost.id})">
                        <button type="button" class="btn btn-warning" style="display: flex; justify-content: center; align-items: center;">Read More</button>
                    </a>
                </div>
    `;

    $('#data6').html(data6);
    $('#data7').html(data7);

}

function postDetails(id){
    
    $(location).attr('href',ebase_url+'blog_page/'+id);
}