exports.generateUserId = function(length) {
  let result = ""
  let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let lengthCharacter = character.length;
  
  for (let i = 0; i < length; i++) {
    result += character.charAt(Math.floor(Math.random() * lengthCharacter))

  }
  return result
}