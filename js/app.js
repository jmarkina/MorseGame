var ref = new Firebase("https://morse.firebaseio.com/");
	$("submit").click(function() {
		var username = $("#username").val();
		var score = $("score").val();
		ref.child("scores").push({
	  	username: username;
	  	score: score;
	});
		ref.child("scores").on("child_added", function(snapshot){
		var scoreThing = snapshot.val();
		console.log("scoreThing");

		var html = $("li/").text();
	$("#leaderboard").append(html);
	});
	$("#login").click(function(){

	});

});
