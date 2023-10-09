$('#uploadCakeDetailForm').on('submit', function (e) {

    e.preventDefault();

    var returnVal = $("#uploadCakeDetailForm").valid();
    var formdata = new FormData(this);
    if (returnVal) {
        $.ajax({

            url: ebase_url+'uploadcakeimages_api',

            type: 'POST',

            headers: {
                "Authorization": etoken
            },

            data: formdata,

            cache: false,

            contentType: false,

            processData: false,

            dataType: 'json',

            success: function (response) {
                if (response.status == 200) {
                    $('#uploadCakeImagesModal').modal('toggle');

                    swal("Good job!", response.msg, "success");
                    location.reload();

                } else {

                    swal("Good job!", response.msg, "error");

                }

            }

        });
    }
});






function uploadCakeImages(detailid) {
    let cdetail=cakedetailList.get(detailid.toString());
    // console.log(cakedetailList.get('1'));
    // console.log(cdetail);
    // alert((cdetail.img1!=null));
    $('#uploadCakeImagesModal').modal('toggle');
    $('#cakeDetailId').val(detailid);
    $('#cimid').val(cdetail.cimid);
    
    let defaultImg='/resource/img/cakeicon.jpg';
    if(cdetail.img1!=null){
        $("#image1pre").attr("src", ebase_url+'/'+cdetail.img1);
    }else{
        $("#image1pre").attr("src", ebase_url+defaultImg);
    }
    if(cdetail.img2!=null){
        $("#image2pre").attr("src", ebase_url+'/'+cdetail.img2);
    }else{
        $("#image2pre").attr("src", ebase_url+defaultImg);
    }
    if(cdetail.img3!=null){
        $("#image3pre").attr("src", ebase_url+'/'+cdetail.img3);
    }else{
        $("#image3pre").attr("src", ebase_url+defaultImg);
    }
    
    
}