setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[id*="IDEN_FirstName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[id*="IDEN_LastName"]');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.querySelector('input[id*="contactInformation-Email"]');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.querySelector('input[id*="contactInformation-EmailConfirm"]');
fillTextField(letter, selectObj);

// home phone country code field
var letter = '%28$@';
var selectObj = document.querySelector('select[id*="contactInformation-PhoneHomeCode"]');
if(letter) {
letter = '+' + letter;
}
fillTextField(letter, selectObj);

// home phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.querySelector('input[id*="contactInformation-PhoneHome"]');
fillTextField(letter, selectObj);

// mobile phone country code field
var letter = '%28$@';
var selectObj = document.querySelector('select[id*="contactInformation-PhoneMobileCode"]');
if(letter) {
letter = '+' + letter;
}
fillTextField(letter, selectObj);

// mobile phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.querySelector('input[id*="contactInformation-PhoneMobile"]');
fillTextField(letter, selectObj);
}, 1500);