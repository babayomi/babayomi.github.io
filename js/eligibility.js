function validateInput(age,country,english,fulltime){

	if(age != 20){
		return false;
	}else if(country != "yes"){
		return false
	}else if(english != "yes"){
		return false
	}else if(fulltime != "yes"){
		return false
	}

	return true;
}



jQuery(document).ready(function(){

	jQuery(".validateUser").on("submit",function(e){
		e.preventDefault();



		// Get our variables from inputs
		var age = jQuery("#inputAge").val();
		var country = jQuery("#inputCountry").val();
		var english = jQuery("#inputEnglish").val();
		var fulltime = jQuery("#inputFulltime").val();

		// If each variable passes input, accept the user
		if(validateInput(age,country,english,fulltime) == true){
			jQuery("#gopher h1").text("Congratulation! Proceed and apply");
			jQuery(".goto").show();

		}else{
			jQuery("#gopher h1").text("Unfortunately, you did not meet the eligible criteria for applying!");

		}

	});
});
