function fillDropDown(letter, selectObj) {
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'change');
selectObj.style.background = '#f19c4f';
}
}

function fillTextField(letter, selectObj) {
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'blur');
selectObj.style.background = '#f19c4f';
}
}

function fillTextFieldForMobile(letter, selectObj) {
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
}

function fireEvent(element, event) {
if (document.createEventObject) {
var evt = document.createEventObject();
return element.fireEvent('on'+event,evt);
} else {
var evt = document.createEvent("HTMLEvents");
evt.initEvent(event, true, true );
return !element.dispatchEvent(evt);
}
}


setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('Booking_Passengers_0__FirstName');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@';
var selectObj = document.getElementById('Booking_Passengers_0__MiddleName');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('Booking_Passengers_0__LastName');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementById('Booking_Passengers_0__BirthDateMonth');
fillTextField(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementById('Booking_Passengers_0__BirthDateDay');
fillTextField(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementById('Booking_Passengers_0__BirthDateYear');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.getElementById('Booking_Passengers_0__Gender');
if (letter === 'M') {
letter = "0";
} else {
letter = "1";
}
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('Booking_Passengers_0__Email');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('Booking_Passengers_0__Mobile');
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.getElementById('Booking_BookingContact_FirstName');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('Booking_BookingContact_LastName');
fillTextField(letter, selectObj);

// address field
var letter = '%18$@ %19$@';
var selectObj = document.getElementById('Booking_BookingContact_StreetAddress1');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('Booking_BookingContact_PostalCode');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('Booking_BookingContact_City');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('Booking_BookingContact_CellPhoneNumber');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('Booking_BookingContact_Email');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.getElementById('Booking_BookingContact_ConfirmEmail');
fillTextField(letter, selectObj);

// address field
var letter = '%18$@ %19$@';
var selectObj = document.getElementById('Booking_BillingAddress_StreetAddress1');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('Booking_BillingAddress_PostalCode');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('Booking_BillingAddress_City');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('Booking_Payment_CardHolder');
fillTextField(letter, selectObj);
}, 1500);
