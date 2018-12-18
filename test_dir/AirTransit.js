function paymentPage() {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.querySelectorAll('input[name="holderName"]')[0];
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.querySelectorAll('input[name="addressLine1"]')[1];
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.querySelectorAll('input[name="addressLine2"]')[0];
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.querySelectorAll('input[name="city"]')[1];
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.querySelectorAll('input[name="postalCode"]')[1];
fillTextField(letter, selectObj);
}
