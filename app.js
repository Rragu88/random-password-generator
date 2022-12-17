const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const upperCaseArr = characters.slice(0,26);
const lowerCaseArr = characters.slice(26,52);
const numbersArr = characters.slice(52,62);
const specCharArr = characters.slice(62,91);
let passwordLength = 15;
const pwdContainer = document.querySelector('.pwd-container');
const generateBtn = document.querySelector('.generate-btn');
const slider = document.querySelector('.slider');
const specCharCheckbox = document.querySelector('.spec-char');
const numCharCheckbox = document.querySelector('.num-char');
const sliderNum = document.querySelector('.length-num');
sliderNum.textContent = `${passwordLength}`;
const firstPassword = document.getElementById('1');
const secondPassword = document.getElementById('2');


function generatePassword() {
    let password = '';
    let randomIndex = 0;
    let usedCharArray = [];
    
    if (specCharCheckbox.checked === true && numCharCheckbox.checked == true) {
        usedCharArray = [...upperCaseArr, ...lowerCaseArr];
    } else if (specCharCheckbox.checked === true) {
        usedCharArray = [...upperCaseArr, ...lowerCaseArr, ...numbersArr];
    } else if (numCharCheckbox.checked == true) {
        usedCharArray = [...upperCaseArr, ...lowerCaseArr, ...specCharArr];
    } else {
        usedCharArray = [...characters];
    }

    for (let i=0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * usedCharArray.length);
        password += usedCharArray[randomIndex];  
    }

    return password;
}

function copyToClipboard(i) {
    let copyText = document.getElementById(i).textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied to clipboard");
    });
}

specCharCheckbox.addEventListener('change', () => {
    if (specCharCheckbox.checked) {
        specCharCheckbox.checked = true;
    } else if (!specCharCheckbox.checked) {
        specCharCheckbox.checked = false;
    }
});

numCharCheckbox.addEventListener('change', () => {
    if (numCharCheckbox.checked) {
        numCharCheckbox.checked = true;
    } else if (!numCharCheckbox.checked) {
        numCharCheckbox.checked = false;
    }
});

firstPassword.addEventListener('click', () => {
    copyToClipboard(firstPassword.id);
});

secondPassword.addEventListener('click', () => {
    copyToClipboard(secondPassword.id);
});

generateBtn.addEventListener('click', () => {
    firstPassword.classList.remove('hidden');
    secondPassword.classList.remove('hidden');
    firstPassword.textContent = generatePassword();
    secondPassword.textContent = generatePassword();
});

slider.addEventListener('input', () => {
    sliderNum.textContent = `${slider.value}`;
    passwordLength = slider.value;
})