$(document).ready(function() {
	$('form').submit(function(e) {
		e.preventDefault(); // Prevent the form from submitting normally
		var username = $('#username').val();
		var email = $('#email').val();
		var password = $('#password').val();
		var error = false;

		// Validate the username field
		if (username.length < 4) {
			$('#error').text('Username must be at least 4 characters long.');
			error = true;
		} else {
			$('#error').text('');
		}

		// Validate the email field
		if (!isValidEmail(email)) {
			$('#error').text('Please enter a valid email address.');
			error = true;
		} else {
			$('#error').text('');
		}

		// Validate the password field
		if (password.length < 8) {
			$('#error').text('Password must be at least 8 characters long.');
			error = true;
		} else {
			$('#error').text('');
		}

		// If there are no errors, submit the form
		if (!error) {
			$('form').unbind('submit').submit();
		}
	});

	// Function to validate email address format
	function isValidEmail(email) {
		var emailRegex = /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/;
		return emailRegex.test(email);
	}
});
