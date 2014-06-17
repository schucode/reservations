(function(){
	var businessLogic = function() {

		console.log("go BL");

		this.reservations = {
			Billy: '6:00pm'
		};


		this.checkMyRes = function(name) {
			console.log("checkRes go");
			console.log("argument 'name': " + name);
			console.log("bl.reservations: " + this.reservations[name]);
			if (this.reservations[name] == undefined) {
				return false
			}
			else {
				return true
			}
		};


		this.checkForRes = function(time) {
			console.log("checkForRes go with: " + time);
			for (var prop in this.reservations) {
				console.log("go object loop go");
				console.log ("property: " + prop);
				if (this.reservations[prop] == time) {
					return true
				};
			};
			return false
		};


		this.makeRes = function(time) {
			console.log("makeRes go");
			var uh = this.checkForRes(time)
			console.log(uh);
			if (this.checkForRes(time) == true) {
				return "not_open";
			} else {
				name = prompt("Your name please: ");
				for (var prop in this.reservations) {
					if (prop == name) {
						return "diff_name";
					};
				};
				this.reservations[name] = time;
			};
		};

	};
	window.bl = new businessLogic();
})();



// messages are properties of
// businessLogic

