$(document).ready(function(){
  $('.form-signin').validate({
    rules: {
      name: {
        required:true
      },
      email: {
        required:true,
        email:true
      },
      password2: {
        minlength: 6,
        required: true
      },
      password2: {
        minlength: 6,
        equalTo: #password
      }
    },
    success: function(element){
      element
      .text('OK!').addClass('valid')
    }
  })

})
