function updateCakeDetails(id) {
    let cake = cakeList.get(id.toString());
    //clear all fields
    $('#id').val('');
    $('#title').val('');
    
    $('.error').text('');
    //set details
    $('#id').val(cake.id);
    $('#title').val(cake.title);
    $('#addCakeModal').modal('toggle');
}