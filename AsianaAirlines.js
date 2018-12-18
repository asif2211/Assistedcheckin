setTimeout(function () {
// first name field
var letter = '%1$@ %2$@';
var selectObj = document.getElementById('givenName0');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('familyName0');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
if (letter === 'M') {
var selectObj = document.getElementById('paxGender1');
if (selectObj) {
selectObj.click();
}
} else {
var selectObj = document.getElementById('paxGender2');
if (selectObj) {
selectObj.click();
}
}

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementById('ageCalMonth0');
if (letter < 10) {
letter = '0' + letter;
}
fillDropDown(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementById('ageCalDay0');
if (letter < 10) {
letter = '0' + letter;
}
fillDropDown(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementById('ageCalYear0');
fillDropDown(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('tt_phoneRsv') || document.getElementById('selPhoneRsv');
fillDropDown(letter, selectObj, setDelay);

function setDelay () {
// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('phoneNo');
fillTextField(letter, selectObj);
}

// phone number 1 field
var letter = '%8$@';
var selectObj = document.getElementById('phoneNo1');
fillTextField(letter, selectObj);

// phone number 2 field
var letter = '%9$@';
var selectObj = document.getElementById('phoneNo2');
fillTextField(letter, selectObj);

// phone number 3 field
var letter = '%10$@';
var selectObj = document.getElementById('phoneNo3');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('tt_email');
fillTextField(letter, selectObj);
}, 1500);
