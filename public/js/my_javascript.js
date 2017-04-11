
// this part of code allows to choose beetwean my DARK overrided bootstrap scheme and oryginal bootstrap scheme
children_menu = document.getElementById('changeCSSid');
toogle_var = 1; // 1-my dark scheme. 0-bootstrap scheme

children_menu.addEventListener('click', function (e) { 
	if (toogle_var == 1) {
		document.getElementById("my_css").href = "";
		document.getElementById("changeCSSid").innerHTML = '<a href="#">My dark theme</a>'; // new menu content 
		toogle_var = 0;
	} else {
		document.getElementById("my_css").href = "css/mystyles.css";
		document.getElementById("changeCSSid").innerHTML = '<a href="#">Bootstrap white theme</a>'; // new menu content 
		toogle_var = 1;
	}

}, true);


// project sorting, pure j
var desc = false;

function sortUnorderedList(sortWay) {
  var $list = $("#mylist");
  if (sortWay) {
    $list.children().detach().sort(function(a, b) {
      return $(a).text().localeCompare($(b).text());
    }).appendTo($list);
  } else {
    $list.children().detach().sort(function(a, b) {
      return $(b).text().localeCompare($(a).text());
    }).appendTo($list);
  }

}



function form_init() { 
  
  jQuery.validator.addMethod("letters_and_spaces_only", function(value, element) {
    return this.optional(element) || /^[a-z]{1}[a-z ,.'-]+$/i.test(value);
  }, "letters only please");

  jQuery.validator.addMethod("my_email", function(value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(value);
  }, "email address invaild");

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
        letters_and_spaces_only: true, // this is my definition of validating string
        minlength: 2
      },
      content: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true,
        my_email: true // this is my definition of validating email
      }
    },
    messages: {     // Specify validation error messages
      first_name: "Please enter your first name (letters only)",
      last_name: "Please enter your last name (letters only)",
      email: "Please enter a valid email address"
    },

    // if everything is ok then send
    submitHandler: function(form) {
      
      var dialog = bootbox.dialog({ // bootbox dialog from bootbox.min.js (http://bootboxjs.com/)
        title: 'Message',
        closeButton: false,
        message: '<p><i class="fa fa-spin fa-spinner"></i> Sending...</p>' // nice spinner comes from fonts/FontAwesome (http://fontawesome.io/icon/spinner/)
      });
      dialog.init(function(){
        setTimeout(function(){
          dialog.find('.bootbox-body').html('Message has been sent. </br> <p class="text-right"><button class="text-right btn btn-default bootbox-close-button">close</button></p>');
          // clear the form after sending
          document.getElementsByName("first_name")[0].value = '';
          document.getElementsByName("last_name")[0].value = '';
          document.getElementsByName("email")[0].value = '';
          document.getElementsByName("company")[0].value = '';
          document.getElementsByName("content")[0].value = '';
        }, 3000);
      });
      
      // form.submit(); // this is removed purpously because I don't have any backed there yet
      return false;

    }
  });

}