setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('FIRST_NAME_1');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('LAST_NAME_1');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementById('day-select-birth_1');
fillDropDown(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementById('month-select-birth_1');
fillDropDown(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementById('year-select-birth_1');
fillDropDown(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('CONTACT_POINT_EMAIL_1');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.getElementById('WDS_CONFIRM_EMAIL_1');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('TEL_1_NUMBER');
fillTextField(letter, selectObj);
}, 1500);
