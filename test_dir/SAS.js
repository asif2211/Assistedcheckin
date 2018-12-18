setTimeout(function () {
// gender field
var letter = '%7$@';
var selectObj = document.getElementById('passenger_civility_1');
if (letter == 'M') {
letter = "MR";
}
else {
letter = "MS";
}
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.getElementById('passengerFirstName_1');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('passengerLastName_1');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('passenger_email');
fillTextField(letter, selectObj);

// phone number field
var letter = '%28$@%8$@%9$@%10$@';
var selectObj = document.getElementById('passenger_mobilePhone');
letter = '+' + letter;
fillTextField(letter, selectObj);

// for payment page
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('card_holder');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementById('streeline_1');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementById('streeline_2');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('city');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('zip');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.getElementById('selectCountry');
fillDropDown(letter, selectObj, setState);

// state field
function setState() {
var letter = '%24$@';
var selectObj = document.getElementById('selectState');
fillDropDown(letter, selectObj);
}
}, 1500);
