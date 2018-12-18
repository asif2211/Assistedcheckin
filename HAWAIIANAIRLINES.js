// for payment page
setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[ng-model="paymentForm.CCInfo.FirstName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[ng-model="paymentForm.CCInfo.LastName"]');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.
querySelector('input[ng-model="paymentForm.BillingAddress.Address1"]');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.querySelector('input[ng-model="paymentForm.BillingAddress.Address2"]');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.querySelector('input[ng-model="paymentForm.BillingAddress.City"]');
fillTextField(letter, selectObj);

// state field
var letter = '%24$@';
var selectObj = document.querySelector('select[ng-model="paymentForm.BillingAddress.State"]');
fillDropDown(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.querySelector('input[ng-model="paymentForm.BillingAddress.ZipCode"]');
fillTextField(letter, selectObj);
}, 1500);
