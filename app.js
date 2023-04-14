const password = document.querySelector('#password');
const length = document.querySelector('#length');
const lengthText = document.querySelector('#lengthText');
const symbols = document.querySelector('#symbols');
const numbers = document.querySelector('#numbers');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');
const similar = document.querySelector('#similar');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const copy = document.querySelector('.copy');

let numberChars = '0123456789';
let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
let specialChars = '!@#$%^&*()_+';

// Function to create a string used for password generation
function checkCheckboxes() {
  passString = '';

  passString = numbers.checked ? passString + numberChars : passString;

  passString = lowercase.checked ? passString + lowerChars : passString;

  passString = uppercase.checked ? passString + upperChars : passString;

  passString = symbols.checked ? passString + specialChars : passString;

  passString = similar.checked
    ? passString
    : passString
        .replace('i', '')
        .replace('l', '')
        .replace('1', '')
        .replace('o', '')
        .replace('L', '')
        .replace('O', '')
        .replace('0', '');

  console.log('why');

  return passString;
}

// Function to generate combination of password
function generatePassword(val = 12) {
  checkCheckboxes();

  val = length.value;

  let pass = '';
  lengthText.innerHTML = val;

  let passLength = val;

  for (let i = 1; i <= passLength; i++) {
    let char = Math.floor(Math.random() * passString.length + 1);

    pass += passString.charAt(char);
  }

  password.value = pass;
}

// Function to copy password
function copyToClipboard() {
  copy.classList.add('copied');
  // Copy the text inside the text field
  navigator.clipboard.writeText(password.value);

  setTimeout(() => {
    copy.classList.remove('copied');
  }, 5000);
}

generatePassword();

// Add EventListener for checkboxes clicked
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', generatePassword);
});

//Add EventListener for Copy icon clicked
copy.addEventListener('click', copyToClipboard);
