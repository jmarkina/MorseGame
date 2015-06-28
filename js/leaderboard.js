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

$(document).ready(function () {
$.getJSON(baseURL+"entries.json",
	function (data) {
	    var tr;
	    var rank = 1;
	    for (var i = 0; i < data.length; i++) {
	        if(data[i].member !== null && data[i].member.length)
        	{
        		tr = $('<tr/>');
		        tr.append("<td>" + rank + "</td>");
		        tr.append("<td>" + data[i].member + "</td>");
		        tr.append("<td>" + displayElapsed(data[i].score) + "</td>");
		        $('#leader_table').append(tr);
		        rank++;
    		}
	    }
});
});