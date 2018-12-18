function fillTextField(letter, selectObj){
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
}

// using addEventListener
window.addEventListener('hashchange', function() {
if(document.getElementById('passenger_1')){
setTimeout(passengerDetails, 1000);
setTimeout(paymentPage, 1000);
}
});


function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('FIRST_NAME_1');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('LAST_NAME_1');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.getElementById('psptgender1');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@'; var selectObj = document.getElementById('Month_IDENTITY_DOCUMENT_DATE_OF_BIRTH_1_PSPT_BK_GLOBAL_DEFAULT_1');
letter = letter - 1;
fillTextField(letter, selectObj);

// day
var letter = '%5$@'; var selectObj = document.getElementById('Day_IDENTITY_DOCUMENT_DATE_OF_BIRTH_1_PSPT_BK_GLOBAL_DEFAULT_1');
fillTextField(letter, selectObj);

// year
var letter = '%6$@'; var selectObj = document.getElementById('Year_IDENTITY_DOCUMENT_DATE_OF_BIRTH_1_PSPT_BK_GLOBAL_DEFAULT_1');
fillTextField(letter, selectObj);

// phone number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.getElementById('CONTACT_POINT_MOBILE_1');
if(letter) {
letter = '+' + letter;
}
fillTextField(letter, selectObj);

// text notification number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.getElementById('NOTIF_VALUE_1_1');
if(letter) {
letter = '+' + letter;
}
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('CONTACT_POINT_EMAIL_1');
fillTextField(letter, selectObj);
}

// for payment information page
function paymentPage() {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('CC1_NAME');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementById('CC1_ADDRESS_A');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementById('CC1_ADDRESS_B');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('CC1_POSTCODE');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('CC1_CITY');
fillTextField(letter, selectObj);
}
setTimeout(paymentPage, 1000);
