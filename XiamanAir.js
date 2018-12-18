// for registration form
setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.getElementsByName('EnGivenName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementsByName('EnSireName')[0];
fillTextField(letter, selectObj);

// DOB field
var month = '%4$@';
var day = '%5$@';
var year = '%6$@';
var selectObj = document.getElementsByName('BirthDay')[0];
if (month < 10) {
month = '0' + month;
}
if (day < 10) {
day = '0' + day;
}
var dob = day + '/' + month + '/' + year;
fillTextField(dob, selectObj);

// gender field
var letter = '%7$@';
if (letter == 'M') {
var selectObj = document.getElementsByName('Title')[0];
if (selectObj) {
selectObj.click();
}
} else {
var selectObj = document.getElementsByName('Title')[1];
if (selectObj) {
selectObj.click();
}
}
}, 1500);