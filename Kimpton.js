// for sonesta hotel and kimpton hotel
function kimptonHotels() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('FirstName');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('LastName');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('Email');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementById('GuestAddress_Address1');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementById('GuestAddress_Address2');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('GuestAddress_City');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('GuestAddress_PostalCode');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('GuestAddress_Phone');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('CreditCard_CardName');
fillTextField(letter, selectObj);
}
setTimeout(kimptonHotels, 2000);