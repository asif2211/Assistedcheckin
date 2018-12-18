setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[id*="txtFirstName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[id*="txtLastName"]');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.querySelector('select[id*="ddlNationCode"]');
if (letter) {
letter = '+' + letter;
}
fillDropDown(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.querySelector('input[id*="txtCellNumber"]') || document.querySelector('input[id*="txtCPhone"]');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.querySelector('input[id*="txtEmail"]');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.querySelector('select[id*="ddlSex"]') || document.querySelector('select[id*="ddlPaxGender"]');
fillTextField(letter, selectObj);
}, 1500);
