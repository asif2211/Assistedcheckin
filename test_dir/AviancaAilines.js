setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[id*="IDEN_FirstName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[id*="IDEN_LastName"]');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.querySelector('select[id*="DateOfBirth-DateMonth"]');
fillTextField(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.querySelector('select[id*="DateOfBirth-DateDay"]');
fillTextField(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.querySelector('select[id*="DateOfBirth-DateYear"]');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.querySelector('input[id*="contactInformation-Email"]');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.querySelector('input[id*="contactInformation-EmailConfirm"]');
fillTextField(letter, selectObj);

// phone number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.querySelector('input[id*="contactInformation-PhoneHome"]');
fillTextField(letter, selectObj);
}, 1500);
