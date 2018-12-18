function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[ng-model*="firstName"]');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@';
var selectObj = document.querySelector('input[ng-model*="middleName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[ng-model*="lastName"]');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.querySelector('input[ng-model*="emailAddress[$index]"]');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.querySelector('input[ng-model*="adults[$index].emailAddress"]');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.querySelector('select[ng-model="vm.passengerDates.adults[$index].month"]');
if (letter) {
letter = letter - 1;
letter = 'number:' + letter;
}
fillDropDown(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.querySelector('select[ng-model="vm.passengerDates.adults[$index].day"]');
if (letter) {
letter = 'number:' + letter;
}
fillDropDown(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.querySelector('select[ng-model="vm.passengerDates.adults[$index].year"]');
if (letter) {
letter = 'number:' + letter;
}
fillDropDown(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.querySelector('select[ng-model="vm.passengerDetails.adults[$index].contactMobileContryCode"]');
if (letter) {
letter = 'string:' + letter;
}
fillDropDown(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.querySelector('input[ng-model*="contactMobileNumber"]');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.querySelector('select[ng-model="vm.passengerDetails.adults[$index].contactTelephoneContryCode"]');
if (letter) {
letter = 'string:' + letter;
}
fillDropDown(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.querySelector('input[ng-model*="contactTelephoneNumber"]');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.querySelector('select[ng-model="vm.passengerDetails.adults[$index].countryOfResidence"]');
if (letter) {
letter = 'string:' + letter;
}
fillDropDown(letter, selectObj);
}


function paymentPage() {
// first name field
var letter = '%1$@';
var selectObj = document.querySelector('input[ng-model*="billingAddress.firstName"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('input[ng-model*="billingAddress.lastName"]');
fillTextField(letter, selectObj);

// billing address field
var letter = '%18$@ %19$@';
var selectObj = document.querySelector('input[ng-model*="billingAddress.addressLine1"]');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.querySelector('input[ng-model*="billingAddress.city"]');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.querySelector('select[ng-model="vm.cardpayment.billingAddress.countryOfResidence"]');
fillDropDown(letter, selectObj, setZipCode);

function setZipCode() {
// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.querySelector('input[ng-model*="billingAddress.postcode"]');
fillTextField(letter, selectObj);
}
}
