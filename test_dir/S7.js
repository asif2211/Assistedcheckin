
setTimeout(function () {
// gender field
var letter = '%7$@';
if (letter === 'M') {
var selectObj = document.getElementById('genderm_0');
if (selectObj) {
selectObj.click();
}
} else {
var selectObj = document.getElementById('genderf_0');
if (selectObj) {
selectObj.click();
}
}

// first name field
var letter = '%1$@';
var selectObj = document.getElementsByName('passengers[0].name.givenName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementsByName('passengers[0].name.lastName')[0];
fillTextField(letter, selectObj);

// DOB field
var month = '%4$@';
var day = '%5$@';
var year = '%6$@';
var selectObj = document.getElementsByName('passengers[0].dateOfBirthAsStr')[0];
if (month < 10) {
month = '0' + month;
}
if (day < 10) {
day = '0' + day;
}
var dob = day + '.' + month + '.' + year;
fillTextField(dob, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementsByName('model.passengersContacts.eml')[0];
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('contacts_phoneCode');
fillDropDown(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('contacts_phoneNo');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementsByName('model.cardData.cardHolderName')[0] || document.getElementById('cardHolder');
fillTextField(letter, selectObj);
}, 1500);