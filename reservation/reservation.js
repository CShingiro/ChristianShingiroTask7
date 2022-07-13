"use strict";

$( () => {
	$("#arrival_date").focus();
	
	$("#submit").click( evt => {
	
		let isValid = true;

		const nightPattern = /^[0-9]/;
		const nights = $("#nights").val().trim();

		if (nights == null) {
			$("#nights").next().text("This field is required");
			isValid = false;
		}
		else if (!nightPattern.test(nights)) {
			$("#nights").next().text("Please enter a valid number of nights.");
			isValid = false;
		}
		else {
			$("#nights").next().text("");
		}

		const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
		const date = $("#arrival_date").val().trim();

		if (date == "") {
			$("#arrival_date").next().text("This field is required");
			isValid = false;
		}
		else if (!datePattern.test(date)) {
			$("#arrival_date").next().text("Please enter a valid date in the following format: mm/dd/yyyy");
			isValid = false;
		}
		else {
			$("#arrival_date").next().text("");
		}

		const name = $("#name").val().trim();

		if (name == "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		}
		else {
			$("#name").next().text("");
		}

		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		const email = $("#email").val().trim();
	
		if (email == "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		}
		else if (!emailPattern.test(email)) {
			$("#email").next().text("Please enter a valid email in the following format: user@username.domain.");
			isValid = false;
		}
		else {
			$("#email").next().text("");
		}

		const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
		const phone = $("#phone").val().trim();

		if (phone == "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		}
		else if (!phonePattern.test(phone)) {
			$("#phone").next().text("Please enter a valid phone number in the following format: 999-999-9999");
			isValid = false;
		}
		else {
			$("#phone").next().text("");
		}

		if (isValid == false) {
			evt.preventDefault();
		}
	});
		
}); // end ready