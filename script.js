const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]

const passwordBtn = document.getElementById("pass-btn")
const passwordLength = document.getElementById("pass-length")
const passwordOne = document.getElementById("pass-one")
const passwordTwo = document.getElementById("pass-two")
const passwordThree = document.getElementById("pass-three")
const passwordFour = document.getElementById("pass-four")

passwordBtn.addEventListener("click", function(){
    for(let i = 0; i < characters.length; i++) {
        let inputValue = Math.floor(Math.random(input.value[i]) * characters.length)
    }
})
