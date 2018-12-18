// for native site.
setTimeout(function () {
// first name field
var letter = '%1$@'; var selectObj = document.getElementsByName('IDEN_FirstName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementsByName('IDEN_LastName')[0];
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementsByName('Email')[0];
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@'; var selectObj = document.getElementsByName('EmailConfirm')[0];
fillTextField(letter, selectObj);

// phone number field
var letter = '%28$@%8$@%9$@%10$@'; var selectObj = document.getElementsByName('PhoneMobile')[0];
letter = '+' + letter;
fillTextField(letter, selectObj);

var selectObj = document.getElementsByName('ccTypesIcons')[0];
if (selectObj) {
selectObj.click();
}

// cardholder name field
var letter = '%1$@ %3$@'; var selectObj = document.getElementsByName('nameOnCard')[0];
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@'; var selectObj = document.querySelector('select[id*="gender" i]');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@'; var selectObj = document.getElementsByName('DateMonth')[0];
fillTextField(letter, selectObj);

// day
var letter = '%5$@'; var selectObj = document.getElementsByName('DateDay')[0];
if (letter < 10) {
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// year
var letter = '%6$@'; var selectObj = document.getElementsByName('DateYear')[0];
fillTextField(letter, selectObj);

// country field
var letter = '%25$@'; var selectObj = document.getElementsByName('IDEN_Nationality')[0];
fillTextField(letter, selectObj);
}, 1500);


function paymentDetails() {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('AIR_CC_NAME_ON_CARD');
fillTextField(letter, selectObj);
}