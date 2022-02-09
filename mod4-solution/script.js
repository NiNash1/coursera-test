var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var x in names) {
  var lower = names[x].toLowerCase();
  var firstLetter = lower.charAt();
  if (firstLetter === "j"){
    byeSpeaker.speak(names[x])
  }else{
    helloSpeaker.speak(names[x])
  }
}


