var LESSONS = 
	{
		"Lesson1": {
			soundURL: "sound%20files/easymorse.mp3",
			text: "hello world",
			morse: ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
			},
		"Lesson2": {
			soundURL: "sound%20files/mediummorse.mp3",
			text: "attending neohack 15 at rackspace",
			morse: ".- - - . -. -.. .. -. --. / -. . --- .... .- -.-. -.- / .---- ..... / .- - / .-. .- -.-. -.- ... .--. .- -.-. ."
		},
		"Lesson3": {
			soundURL: "sound%20files/hardmorse.mp3",
			text: "order chocolate chip cookies for 17 people",
			morse: "--- .-. -.. . .-. / -.-. .... --- -.-. --- .-.. .- - . / -.-. .... .. .--. / -.-. --- --- -.- .. . ... / ..-. --- .-. / .---- --... / .--. . --- .--. .-.. ."
		}
	};

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

console.log(checkASCII("hello world", LESSONS.Lesson1));
console.log(checkASCII("world", LESSONS.Lesson1));

$("#morse").keyup(function(e) {
	$("#display-text").text(textToMorse($("#morse").val()).join(" "));
	
})

function textToMorse(text) {
	var morseCharList = [];
	for(var i = 0; i < text.length ; i++) {
		morseCharList.push(ascii_to_morse[text[i]]);
	}
	return morseCharList;
}

console.log(textToMorse("hi").join(""));