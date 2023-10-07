// addClient Button
$('#addappointmentBtn').click(function () {
    $('#addappointmentModal').modal('toggle');
    $("#addappointmentForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    
});