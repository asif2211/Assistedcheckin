setTimeout(function () {
if(window.frames[1]) {
var document = window.frames[1].document;
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.querySelector('input[id*="txtCardHolderPassenger"]');
fillTextField(letter, selectObj);

// street address field
var letter = '%18$@ %19$@';
var selectObj = document.querySelector('input[id*="txtAddress"]');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.querySelector('input[id*="txtCity"]');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.querySelector('input[id*="txtPostalCode"]');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.querySelector('select[id*="dlCountry"]');
fillTextField(letter, selectObj);
}
}, 1500);