// for Uzbekistan Airways
function registerTraveller() {
// email field
var letter = '%11$@';
var selectObj = document.getElementsByName('Email')[0];
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.getElementsByName('FirstName')[0];
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@';
var selectObj = document.getElementsByName('SecondaryName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementsByName('Surname')[0];
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementsByName('BirthDate_Month')[0];
if (letter < 10) {
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementsByName('BirthDate_Day')[0];
if (letter < 10) {
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementsByName('BirthDate_Year')[0];
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementsByName('PhoneNumberCountyCode')[0];
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementsByName('CountryCodes2')[0];
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementsByName('PhoneNumberArea')[0];
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@';
var selectObj = document.getElementsByName('PhoneNumber')[0];
fillTextField(letter, selectObj);

// issue country field
var letter = '%29$@';
var selectObj = document.getElementsByName('DOCSCountry')[0];
fillTextField(letter, selectObj);

// nationality field
var letter = '%29$@';
var selectObj = document.getElementsByName('DOCSNationality')[0];
fillTextField(letter, selectObj);

// country field
var letter = '%29$@';
var selectObj = document.getElementsByName('DOCACountry')[0];
fillTextField(letter, selectObj);

// address field
var letter = '%18$@ %19$@';
var selectObj = document.getElementsByName('DOCAAddressDetails')[0];
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementsByName('DOCACity')[0];
fillTextField(letter, selectObj);
}
setTimeout(registerTraveller, 1000);