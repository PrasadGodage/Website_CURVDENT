// addClient Button
$('#addappointmentBtn').click(function () {
    $('#addappointmentModal').modal('toggle');
    $("#addappointmentForm").trigger("reset");
    $('#id').val('');
    $('.error').text('');
    
});

// Date Validation
var today = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);