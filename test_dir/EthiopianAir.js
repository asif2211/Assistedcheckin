function passengerDetails() {
// first name field
var letter = '%1$@'; var selectObj = document.getElementById('first_name-0');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@'; var selectObj = document.getElementById('middle_name-0');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('last_name-0');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
if(letter=='M'){
var selectObj = document.getElementById('gender-0-MALE');
if(selectObj) {
selectObj.click();
}
}
else{
var selectObj = document.getElementById('gender-0-FEMALE');
if(selectObj) {
selectObj.click();
}
}

// country code field
var letter = '%28$@'; var selectObj = document.getElementById('phone0-1-countryCode');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@'; var selectObj = document.getElementById('phone0-1-areaCode-raw');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementById('phone0-1-number-raw');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementById('contactInfo-email-1');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@'; var selectObj = document.getElementById('email_retype-1');
fillTextField(letter, selectObj);
}
setTimeout(passengerDetails, 1000);