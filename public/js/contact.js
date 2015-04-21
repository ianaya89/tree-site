$(function(){

  $('#btnSubmit').on('click', function() {

    if (!isFormValid()) return;

    submitForm();

  });

  function isFormValid() {
    $('.form-control').removeClass('error');

    $('#errorMessage').hide();

    var isValid = true;

    if (!$('#txtName').val()) {
      $('#txtName').addClass('error');
      isValid = false;
    }

    if (!$('#txtEmail').val()) {
      $('#txtEmail').addClass('error');
      isValid = false;
    }

    if (!$('#txtSubject').val()) {
      $('#txtSubject').addClass('error');
      isValid = false;
    }

    if (!$('#txtMessage').val()) {
      $('#txtMessage').addClass('error');
      isValid = false;
    }

    if (!isValid) $('#errorMessage').show();
    return isValid;
  }

  function submitForm() {
    $.ajax({
      type: 'POST',
      url: 'contact',
      data: {
        name: $('#txtName').val(),
        email: $('#txtEmail').val(),
        subject: $('#txtSubject').val(),
        message: $('#txtMessage').val(),
      },
      success: function(data) {
        $('#succesModal').modal('show');
      },
      error: function() {
        alert('Algo ha salido mal, vuelva a intentarlo mas tarde.');
      }
    });
  }

});