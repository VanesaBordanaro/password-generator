const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "?", "{", "}", "-", "+", "=", "[", "]", "|", "~", "`", "@"]

const passwordBtn = document.getElementById("pass-btn");
const passwordOne = document.getElementById("pass-one");
const passwordTwo = document.getElementById("pass-two");
const passwordThree = document.getElementById("pass-three");
const passwordFour = document.getElementById("pass-four");

function randomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    let inputValue = document.getElementById("pass-length").value;
    let password = "";
    for(let i = 0; i < inputValue; i++) {
        password += randomCharacter();
    }
    return password;
}

passwordBtn.addEventListener('click', function() {
    passwordOne.value = generatePassword();
    passwordTwo.value = generatePassword();
    passwordThree.value = generatePassword();
    passwordFour.value = generatePassword();
});