function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(shout(string))
}

function logWhisper(string) {
  return console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (shout(string) === string) {
    var hallo = "I can\'t hear you!"
    console.log(hallo)
  } else if (whisper(string) === string) {
    console.log("YES INDEED!")
  } else if (string == "I love you, Grandma.") {
    console.log("I love you, too.")
  }
}
