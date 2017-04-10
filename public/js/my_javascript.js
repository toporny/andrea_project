
children = document.getElementById('changeCSSid');
toogle_var = 1;

children.addEventListener('click', function (e) { 
	if (toogle_var == 1) {
		document.getElementById("my_css").href = "";
		document.getElementById("changeCSSid").innerHTML = '<a href="#">My dark theme</a>';
		toogle_var = 0;
	} else {
		document.getElementById("my_css").href = "css/mystyles.css";
		document.getElementById("changeCSSid").innerHTML = '<a href="#">Bootstrap white theme</a>';
		toogle_var = 1;
	}

}, true);


jQuery.validator.addMethod("letters_and_spaces_only", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
}, "letters only please");



$(function() {
  $("form[name='contact_me']").validate({  // Initialize form validation on the registration form.
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined on the right side
      first_name: {
        required: true,
        letters_and_spaces_only: true,
        minlength: 2
      },
      last_name: {
        required: true,
        letters_and_spaces_only: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {     // Specify validation error messages
      first_name: "Please enter your first name (letters only)",
      last_name: "Please enter your last name (letters only)",
      email: "Please enter a valid email address"
    },

    // if everything is ok then send
    submitHandler: function(form) {
      form.submit();
    }
  });
});