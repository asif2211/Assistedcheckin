// for payment page's credit card
function fillCreditCard() {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_nameOnCard');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_billingData_street1');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_billingData_street2');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_billingData_city');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_billingData_zipCode');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_billingData_country');
fillDropDown(letter, selectObj, setState);

// state field
function setState() {
var letter = '%24$@';
var selectObj = document.getElementById('creditCardTypes-0-ba-0_billingData_province');
fillDropDown(letter, selectObj);
}

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('phone0-1-countryCode');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementById('phone0-1-areaCode-raw');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('phone0-1-number-raw');
fillTextField(letter, selectObj);
}