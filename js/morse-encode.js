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

//initial launch -- display text that will be translated by the user

$("#clear").click(function() {
    $("#morse").val("");
})
/* audio stuff for later
document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if (e.keyCode == 32) document.getElementById(soundId).play();
}
	
LOOPING?
myAudio = new Audio(''); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();
*/

function init() {
	myAudio = $("#alarm").first().get(0)
	var morseCode = [];
	var d, t;
  $(document).keydown(function(evt) {
    if (evt.keyCode == 32 && d == null) {
		d = new Date();
        t = d.valueOf();
		myAudio.addEventListener('ended', loopSound, false);
		myAudio.play();
    }
  });
  $(document).keyup(function(evt) {
	 if (evt.keyCode == 32 && (d !== null)) {
		 myAudio.removeEventListener('ended', loopSound);
		 var dend = new Date();
		 var tend = dend.valueOf();
		 var finetime = tend - t;
		 d = null;
		 t = null;
		 // can I use tend to test for spaces?
		 
		 morseCode.push(morseCheck(finetime));
		 console.log(morseCode.join(" "));
		 $("#display-morse").html(morseCode.join(" "));
		}
  });
}
 
function loopSound() {
	this.currentTime = 0;
	this.play();
}

function morseCheck(finetime) {
	if (finetime < 500) {
		pressValue = ".";
	}
	else {
		pressValue = "-";
	}
	return pressValue;
}

function textToMorse(text) {
	var morseCharList = [];
	for(var i = 0; i < text.length ; i++) {
		morseCharList.push(ascii_to_morse[text[i]]);
	}
	return morseCharList.join(" ");
}

init();

//console.log(textToMorse("hi").join(""));