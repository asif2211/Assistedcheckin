function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementsByName('FIRST_NAME_1')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementsByName('LAST_NAME_1')[0];
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
if(letter=='M'){
var selectObj = document.getElementsByName('IDENTITY_DOCUMENT_GENDER_1_PSPT_BK_GLOBAL_DEFAULT_1')[0];
if(selectObj) {
selectObj.click();
}
} else {
var selectObj = document.getElementsByName('IDENTITY_DOCUMENT_GENDER_1_PSPT_BK_GLOBAL_DEFAULT_1')[1];
if(selectObj) {
selectObj.click();
}
}

// gender field
var letter = '%7$@';
var selectObj = document.getElementById('psptgender1');
fillDropDown(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementsByName('paxDobMonth_1')[0];
fillDropDown(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementsByName('paxDobDay_1')[0];
fillDropDown(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementsByName('paxDobYear_1')[0];
fillDropDown(letter, selectObj);

// home phone number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.getElementsByName('CONTACT_POINT_MOBILE_1')[0];
if(letter) {
letter = '+' + letter;
}
fillDropDown(letter, selectObj);

// phone number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.getElementsByName('CONTACT_POINT_HOME_PHONE')[0];
if(letter) {
letter = '+' + letter;
}
fillDropDown(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementsByName('CONTACT_POINT_EMAIL_1')[0];
fillTextField(letter, selectObj);
}
