function displayElapsed(elapsed) {
  var minutes = Math.floor(elapsed / (60 * 1000));
  var seconds = Math.floor((elapsed / 1000) % 60);
  var milli = (elapsed % 1000);
  if (minutes < 10) { minutes = "0" + minutes };
  if (seconds < 10) { seconds = "0" + seconds };
  if (milli < 10) { milli = "00" + milli };
  if (milli < 100) { milli = "0" + milli };
  var elapsedAsString = "" + minutes + ":" + seconds + "." + milli;
  return elapsedAsString;
} //end of displayElapsed


