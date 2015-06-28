	var ascii_to_morse = {
    " ": " / ",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--.."
}

var correctText = [];
//initial launch
$("#display-morse").text(textToMorse(LESSONS.Lesson1.text));

//Clear button
$("#clear").click(function() {
    $("#morse").val("");
    $("#correct-text").val("");
    clearInterval(counter);
})

$("#morse").keyup(function(e) {
  var expected = LESSONS.Lesson1.text;
  	//$("#display-text").text(textToMorse($("#morse").val()).join(" "));
  var input = $("#morse").val();
  //console.log(input);
  
  inputArr = input.split("");
  //console.log(inputArr);

  var correct = expected.slice(0, input.length);

  var diff = expected.slice(correct.length);

  if (input === correct) {
    $("#display-morse").html('<span class="typed">' + textToMorse(correct) + '</span> <span class="untyped">' + textToMorse(diff) + '</span>');
    $("#correct-text").html(input);
  }
  if (input === expected) {
    var endTime = new Date().valueOf();
    var score = endTime - time;
    clearInterval(counter);
    $("#timer").text(displayElapsed(score));
  }

}) //end of keyup

var time = null;
var counter = null;

$("#morse").keydown(function() {
    if (time === null) {
      time = new Date().valueOf();
      counter = setInterval(function() {
                      var elapsed = (new Date().valueOf()) - time;
                      displayElapsed(elapsed); }, 100);
    }
}) //end of keydown


  //console.log(correct);
  //var correct = input;
  // while (correct.length > 0) {
  //   if (correct.indexOf(input) === 0) {
  //       break;
  //   }
  //   else {
  //       correct = correct.slice(0, correct.length - 1);
  //   }
  // }
  //var diff = expected.slice(correct.length);

  //$("#display-morse").html('<span class="typed">' + textToMorse(correct) + '</span> <span class="untyped">' + textToMorse(diff) + '</span>');

//$("#morse").val(correct);

function textToMorse(text) {
	var morseCharList = [];
	for(var i = 0; i < text.length ; i++) {
		morseCharList.push(ascii_to_morse[text[i]]);
	}
	return morseCharList.join(" ");
}


//$("#submit").click(function() {

//})