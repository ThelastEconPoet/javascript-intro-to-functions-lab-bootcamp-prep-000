function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (whisper(string)) { 
   return  ("I can\'t hear you!")
  }
  if (logWhisper(string)) {
    return ("I can\'t hear you!")
  }
  else (shout(string)) {
    return ("YES INDEED!")
  }
  
}
