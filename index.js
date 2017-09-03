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
  var lowercase = shout(string)
  if (string === lowercase) {
    console.log("I can\'t hear you!")
  } else if (whisper(string) === string) {
    console.log("YES INDEED!")
  } else if (string == "I love you, Grandma.") {
    console.log("I love you, too.")
  }
}
