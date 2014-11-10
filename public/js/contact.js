$(function(){

  $('#btnSubmit').on('click', function(){

    if (!isFormValid()) return;

    submitForm();

  });

  function isFormValid(){

  }

  function submitForm(){
    $.ajax({
      type: 'POST',
      url: 'contact',
      data: {
        name: $('txtName').val(),
        email: $('txtEmail').val(),
        subject: $('txtSubject').val(),
        message: $('txtMessage').val(),
      },
      success: function(data){
        $('#succesModal').modal('show');
      },
    });
  }

});