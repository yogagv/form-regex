//Regular Expressions (RegExp) to ensure that user input follows the correct format.

// Regex Syntax

// const regex = new RegExp(pattern, attribute)



const pattern = /to/g                       
const str = 'Welcome to JS to'                       // test ->looking 'to' (g) globally.  globally means it will look for 'to' in the whole string not just the first occurrence.
// const str = 'Welcome to JS and to regex'

const res = pattern.test(str);
console.log(res);


const pattern_new = /to/g
const str_new = 'Welcome JS'

const res_new = pattern_new.test(str_new);
console.log(res_new);


const res_one = str.match(pattern);    //match returns an array of all matches in the string. if not found returns null.
console.log(res_one);


const res_two = str_new.match(pattern);
console.log(res_two);


//MObile no -> starting 9 and 10 digit nos
const num = '9834512765';
const num_one = '8765776351'
const num_two = '6385123459'
const numPattern = num.match(/^[8,9][0-9]{9}$/);         // /^ -> Starting Point, $/ -> Ending Point   1st -> 8 or 9, 2nd -> 0 to 9, {}->range 
const numPattern_one = num_one.match(/^[8,9][0-9]{9}$/);
const numPattern_two = num_two.match(/^[8,9][0-9]{9}$/);
//1st number 8 or 9, remaining 9 numbers 0 to 9 this is range -> {9}

console.log(numPattern);
console.log(numPattern_one);
console.log(numPattern_two);



// [] -> Brackets -> defines the range of character

/* [abc] -> a or b or c

   [^abc] -> apart from a,b,c. we can use 1,2,3 or any number or any character.

   [0-9] -> from 0 to 9

   [^0-9] -> apart from 0 to 9

   [a-z] -> from a to z lowercase

   [A-Z] -> from A to Z uppercase

   [a-zA-Z] -> from a to z and A to Z


   identifiers -> it gives the info about the repition

   []?  -> occur 0 or 1 time

   []+  -> 1 time or more time

   []*  -> 0 times or more times 

   []{n} -> n times

   []{n,} -> n times or max it could be anything

   []{x,y} -> exact range



   modifiers

   g - global check
   i - inspecification character

   meta
   \d - > [a-zA-Z]
   \D -> [^a-zA-Z]

   \ -> back symbol means speacial character like \@ \$ etc.

*/


// selecting input values

const nameValue = document.getElementById('name-value')
const emailValue = document.getElementById('email-value')
const pwdValue = document.getElementById('pwd-value')
const phoneValue = document.getElementById('phone-value')
const occupationValue = document.getElementById('occupation-value')

const submitBtn = document.getElementById('btn')

// selecting error values

const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const pwdError = document.getElementById('pwd-error')
const phoneError = document.getElementById('phone-error')
const occupationError = document.getElementById('occupation-error')


function validateName() {

    const name = nameValue.value
    if(name.length == 0) {

        submitBtn.disabled = true;
        nameError.innerHTML = 'Name is Required'
        nameError.style.color = 'red'
        return false
    }

    // if(name.match(/^[a-zA-z]{3,}\s{1}[a-zA-Z]+$/)){        //{3,}-> means min 3 max it could be anything, \s -> means space

    // }                                                      //+ means one or more instead {1,}

    // if(!name.match(/^[a-zA-z]{3,}\s{1}[a-zA-Z]{1,}$/)){ 
        
        if(!name.match(/^[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,}$/)){

        submitBtn.disabled = true;
        nameError.innerHTML = 'Fullname is Required'
        nameError.style.color = 'red'
        return false

    }

    submitBtn.disabled = false;
    nameError.innerHTML = `<ion-icon name="checkmark-circle-outline" ></ion-icon>`
    nameError.style.color = 'green'
    return true

}

nameValue.addEventListener('keyup', validateName);
nameValue.addEventListener('blur', validateName);


function validateEmail() {

    const email = emailValue.value
    if(email.length == 0) {

        submitBtn.disabled = true;
        emailError.innerHTML = 'Email is Required'
        emailError.style.color = 'red'
        return false
    }

    const ePattern = /^[a-zA-Z0-9]*[@]{1}[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/;

    if(!email.match(ePattern)){

        submitBtn.disabled = true;
        emailError.innerHTML = 'Invalid Email ID!'
        emailError.style.color = 'red'
        return false
    }

    submitBtn.disabled = false;
    emailError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    emailError.style.color = 'green'
    return true

}

emailValue.addEventListener('keyup', validateEmail);
emailValue.addEventListener('blur', validateEmail);

function validatePwd() {

    const pwd = pwdValue.value
    if(pwd.length == 0) {

        submitBtn.disabled = true;
        pwdError.innerHTML = 'Password is Required';
        pwdError.style.color = 'red'
        return false
    }

    const passwordPattern = /^(?=.*[A-Za-z0-9])(?=.*[@#$%^&*!])[A-Za-z0-9@#$%^&*!]{8,}$/;   // \d -> 

    if(!pwd.match(passwordPattern)){

        submitBtn.disabled = true;
        pwdError.innerHTML = 'Passowrd must be 8 character at least one letter, one number and one special character must be included.';
        pwdError.style.color = 'red'
        return false

    }

    submitBtn.disabled = false;
    pwdError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    pwdError.style.color = 'green'
    return true

}

pwdValue.addEventListener('keyup', validatePwd);
pwdValue.addEventListener('blur', validatePwd);

function validateMobile() {

    const mobile = phoneValue.value
    if(mobile.length == 0) {

        submitBtn.disabled = true;
        phoneError.innerHTML = 'Mobile no is Required'
        phoneError.style.color = 'red'
        return false
    }

    if(!mobile.match(/^[8,9,6][0-9]{9}$/)){

        submitBtn.disabled = true;
        phoneError.innerHTML = 'Enter a Valid Mobile no'
        phoneError.style.color = 'red'
        return false

    }

    submitBtn.disabled = false;
    phoneError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    phoneError.style.color = 'green'
    return true

}

phoneValue.addEventListener('keyup', validateMobile);
phoneValue.addEventListener('blur', validateMobile);


function validateOccupation() {

    const occupation = occupationValue.value
    if(occupation.length == 0) {

        submitBtn.disabled = true;
        occupationError.innerHTML = 'Occupation is Required';
        occupationError.style.color = 'red'
        return false
    }

    if(!occupation.match(/^[a-zA-Z]{6,}$/)){

        submitBtn.disabled = true;
        occupationError.innerHTML = 'Enter a Valid Occupation ';
        occupationError.style.color = 'red'
        return false
    }

    submitBtn.disabled = false;
    occupationError.innerHTML = `<ion-icon name="checkmark-circle-outline"></ion-icon>`
    occupationError.style.color = 'green'
    return true

}

occupationValue.addEventListener('keyup', validateOccupation);
occupationValue.addEventListener('blur', validateOccupation);

const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(validateName() && validateEmail() && validatePwd() && validateMobile() && validateOccupation()){

        alert('Form Submitted Successfully!');
        form.reset(); // Reset form fields
        nameError.innerHTML = '';
        emailError.innerHTML = '';
        pwdError.innerHTML = '';
        phoneError.innerHTML = '';
        occupationError.innerHTML = '';
        submitBtn.disabled = true;
    } else {
        alert('Please fill all fields correctly');
    }
        
    }
)



