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



function checkASCII(data, lesson) {
	var lessonText = lesson.text;
	if (data.toLowerCase() === lessonText.toLowerCase()) {
		return true;
	}
	else {
		return false;
	}
}

//console.log(checkASCII("hello world", LESSONS.Lesson1));
//console.log(checkASCII("world", LESSONS.Lesson1));

//initial launch
$("#display-morse").text(textToMorse(LESSONS.Lesson1.text));

$("#clear").click(function() {
    $("#morse").val("");
})

 $("#morse").keyup(function(e) {
    var expected = LESSONS.Lesson1.text;
 	//$("#display-text").text(textToMorse($("#morse").val()).join(" "));
	var input = $("#morse").val();
    var correct = input;
    while (correct.length > 0) {
        if (expected.startsWith(correct)) {
            break;
        }
        else {
            correct = correct.slice(0, correct.length - 1);
        }
    }
    var diff = expected.slice(correct.length);

    $("#display-morse").html('<span class="typed">' + textToMorse(correct) + '</span> <span class="untyped">' + textToMorse(diff) + '</span>');

    //$("#morse").val(correct);
 })

function textToMorse(text) {
	var morseCharList = [];
	for(var i = 0; i < text.length ; i++) {
		morseCharList.push(ascii_to_morse[text[i]]);
	}
	return morseCharList.join(" ");
}

//console.log(textToMorse("hi").join(""));