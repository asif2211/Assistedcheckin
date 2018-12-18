function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[class~="firstName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[class~="lastName"]');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
if (letter === 'M') {
var selectObj = document.querySelector('label[class~="dxp-toggle-button-option-0"]');
if (selectObj) {
selectObj.click();
}
} else if (letter === 'F') {
var selectObj = document.querySelector('label[class~="dxp-toggle-button-option-1"]');
if (selectObj) {
selectObj.click();
}
}

// DOB field
var month = '%4$@';
var day = '%5$@';
var year = '%6$@';
var selectObj = document.querySelector('input[class~="firefoxAndDateFields"]');
if (month < 10) {
month = '0' + month;
}
if (day < 10) {
day = '0' + day;
}
var dob = year + '-' + month + '-' + day;
fillTextField(dob, selectObj);

// phone number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.querySelector('input[id="phone0Input-0-passenger-item-ADT-1"]');
if (letter != "") {
letter = '+' + letter;
}
fillTextField(letter, selectObj);

// email 1 field
var letter = '%11$@';
var selectObj = document.querySelector('input[class~="dxp-email-1"]');
fillTextField(letter, selectObj);

// confirm email 1 field
var selectObj = document.querySelector('input[class~="dxp-confirm-email-1"]');
fillTextField(letter, selectObj);
}