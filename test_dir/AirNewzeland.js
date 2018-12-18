function travellersDetail() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('field-firstname') || document.getElementById('travellers[0].firstName');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@'; var selectObj = document.getElementById('travellers[0].middleName');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('field-familyname') || document.getElementById('travellers[0].surname');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('field-contactphonepart1') || document.getElementById('travellers[0].phoneCountryCode');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementById('field-contactphonepart2') || document.getElementById('travellers[0].phoneAreaCode');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@';
var selectObj = document.getElementById('field-contactphonepart3') || document.getElementById('travellers[0].phoneNumber');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementById('field-dobmonth') || document.getElementById('travellers[0].birthDateMonth');
fillTextField(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementById('field-dobday') || document.getElementById('travellers[0].birthDateDay');
fillTextField(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementById('field-dobyear') || document.getElementById('travellers[0].birthDateYear');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.getElementById("field-gender") || document.getElementById('travellers[0].gender');
if (letter == 'M') {
letter = "MALE";
}
else {
letter = "FEMALE";
}
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementsByName('emailAddress')[0];
fillTextField(letter, selectObj);
}

function paymentDetail() {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('cardHolderName') || document.getElementById('field-cardholdersname');
fillTextField(letter, selectObj);
}
