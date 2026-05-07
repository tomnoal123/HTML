const result = document.getElementById('result');
const button = document.getElementById('button');

const numbers = document.getElementById('btn4');
const upper = document.getElementById('btn2');
const lower = document.getElementById('btn3');
const symbols = document.getElementById('btn1');

const lengthInput = document.getElementById('btn5');
const reset = document.getElementById('reset');

function generatorPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolsChars = "!@#$%^&*()+=-[]><?/;'`~";
    const numbersChars = "1234567890";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";
    allowedChars += includeNumbers ? numbersChars : "";

    if (allowedChars.length === 0) {
        return "(No character types selected)";
    }

    for (let i = 0; i < length; i++) {

        const randomIndex = Math.floor(Math.random() * allowedChars.length);

        password += allowedChars[randomIndex];
    }

    return password;
}

let includeLowercase = true;
let includeUppercase = true;
let includeSymbols = true;
let includeNumbers = true;

numbers.addEventListener("click", () => {
    includeNumbers = !includeNumbers;
});

upper.addEventListener("click", () => {
    includeUppercase = !includeUppercase;
});

lower.addEventListener("click", () => {
    includeLowercase = !includeLowercase;
});

symbols.addEventListener("click", () => {
    includeSymbols = !includeSymbols;
});

button.addEventListener("click", () => {

    const passwordLength = Number(lengthInput.value);

    const password = generatorPassword(
        passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    result.innerText = `Generated password: ${password}`;
});
reset.addEventListener("click", () => {

    includeLowercase = true;
    includeUppercase = true;
    includeSymbols = true;
    includeNumbers = true;

    lengthInput.value = 12;

    result.innerText = "Settings reset";
});