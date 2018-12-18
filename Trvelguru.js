// for hotels site
function contactDetails() {
// fname field
var letter = '%1$@';
var selectObj = document.getElementsByName('fname0')[0]
fillTextField(letter, selectObj);
// lname field
var letter = '%3$@';
var selectObj = document.getElementsByName('lname0')[0];
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('additionalContactEmail');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('additionalContactMobile');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('additionalContactMobile');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('cc_cardholder_name_id');
fillTextField(letter, selectObj);

}
setTimeout(contactDetails,1000)
contactDetails()