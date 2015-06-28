var baseURL = "https://agile-hamlet-2203.herokuapp.com/"
var localURL = "http://localhost:3000/"

$("#submit").click(function()
{
	jQuery.post("http://localhost:3000/entries",{"name": "ATestName", "score": 4442}, function(response){console.log(response);})
})


$("#open").click(function()
{
	jQuery.ajax({
		method: "GET",
		url: baseURL+"entries.json",
		success: function(response){console.log(response)},
		json: true,
		data: {page: 1}
		})
})
