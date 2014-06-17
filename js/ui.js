(function() {
	var userInter = function() {

		console.log("go UI!");


		$('#checkmy').on('click', function(e) {
			var name = $('#user_input').val();
			if (bl.checkMyRes(name)) {
				alert("Your reservation is at " + bl.reservations[name]);
			} else {
				alert("You do not have a reservation")
			}
		});


		$('#checkfor').on('click', function(e) {
			var time = $('#user_input').val();
			console.log(time);
			if (bl.checkForRes(time)) {
				alert("Sorry! That time is unavailable");
			} else {
				alert("Nice! That time is available");
			};
		});


		$('#reserve').on('click', function(e) {
			var time = $('#user_input').val();
			message = bl.makeRes(time);
			if (message == "not_open") {
				alert("Sorry, that time is taken");
			} else if (message == "diff_name") {
				alert("Sorry that name is taken, try again with another");
			} else {
				alert("Your reservation is set!");
			};

		});

	};
	window.ui = new userInter();
})();