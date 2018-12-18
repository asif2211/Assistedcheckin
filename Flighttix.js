setTimeout(function () {
// gender field
var letter = '%7$@';
var selectObj = document.getElementById('passengers____index___personal_details_gender');
if (letter == 'M') {
letter = "male";
} else {
letter = "female";
}
fillDropDown(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.getElementById('passenger-0-first-name');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('passenger-0-last-name');
fillTextField(letter, selectObj);

// DOB field
var month = '%4$@';
var day = '%5$@';
var year = '%6$@';
var selectObj = document.getElementById('passenger-birth-date-0');
if (month < 10) {
month = '0' + month;
}
if (day < 10) {
day = '0' + day;
}
var dob = day + '-' + month + '-' + year;
fillTextField(dob, selectObj);

function setDelay() {
// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementById('booker_address_street') || document.querySelectorAll('input[ng-model="address.street"]')[1];
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementById('booker_address_number') || document.querySelectorAll('input[ng-model="address.number"]')[1];
fillTextField(letter, selectObj);
}

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('booker_address_postal_code') || document.querySelector('input[ng-model="address.postal_code"]');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('booker_address_city') || document.querySelector('input[ng-model="address.city"]');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.getElementById('booker_address_country_code') || document.querySelector('select[ng-model="address.country_code"]');
fillDropDown(letter, selectObj, setDelay);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('booker_contact_details_phone');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('booker_contact_details_email');
fillTextField(letter, selectObj);
}, 1500);
