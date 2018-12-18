// first name field
var letter = '%1$@'; var selectObj = document.getElementById('firstname1');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('surname1');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@'; var selectObj = document.getElementById('month1');
if(letter<10){
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// day
var letter = '%5$@'; var selectObj = document.getElementById('day1');
if(letter<10){
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// year
var letter = '%6$@'; var selectObj = document.getElementById('year1');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.getElementById('e_us_passenger_sex1[sex]1');
fillDropDown(letter, selectObj);

// country code field
var letter = '%28$@'; var selectObj = document.getElementById('phone1pref');
fillDropDown(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementById('phone1');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementById('email');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@'; var selectObj = document.getElementById('billingName');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@'; var selectObj = document.getElementById('billingAddress1');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@'; var selectObj = document.getElementById('billingAddress2');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@'; var selectObj = document.getElementById('billingCity');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementById('billingPostal');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@'; var selectObj = document.getElementById('billingCountry');
fillDropDown(letter, selectObj, setState);

// state field
function setState() {
var letter = '%24$@'; var selectObj = document.getElementById('billingState');
fillTextField(letter, selectObj);
}