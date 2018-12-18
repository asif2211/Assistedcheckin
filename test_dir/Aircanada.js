
// fill functions for dropdown and textfields
function fillDropDown(letter, selectObj, setDelay){
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'change');
//selectObj.style.background = '#f19c4f';
if (setDelay) {
setTimeout(setDelay, 1000);
}
}
}

function fillTextField(letter, selectObj){
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'blur');
selectObj.style.background = '#f19c4f';
}
}

//when option not define change event in attrs. (importent when page first time load)
function fireEvent(element, event){
if (document.createEventObject) {
// dispatch for IE
var evt = document.createEventObject();
return element.fireEvent('on'+event,evt);
}
else{
// dispatch for firefox + others
var evt = document.createEvent("HTMLEvents");
evt.initEvent(event, true, true ); // event type,bubbling,cancelable
return !element.dispatchEvent(evt);
}
}

// using addEventListener
window.addEventListener('hashchange', function() {
setTimeout(passengerDetails, 1500);
setTimeout(paymentPage, 1500);
});


(function () {
var target = document.querySelector('body');
var observer = new MutationObserver(function() {
setTimeout(function () {
if (selectObj=document.getElementById('fullName')) {

paymentPage();
observer.disconnect();
}
}, 2000);
});
var config = {childList: true, subtree: true};
if (target) {
observer.observe(target, config);
}
}());


function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('FIRST_NAME_0');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@';
var selectObj = document.getElementById('MIDDLE_NAME_0');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('LAST_NAME_0');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementById('DOB_MONTH_0');
fillDropDown(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementById('DOB_DAY_0');
if (letter) {
if (letter < 10) {
letter = '0' + letter;
}
letter = 'string:' + letter;
}
fillDropDown(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementById('DOB_YEAR_0');
if (letter) {
letter = 'string:' + letter;
}
fillDropDown(letter, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.getElementById('GENDER_0');
fillDropDown(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('PHONE_COUNTRY_CODE_1_0');
fillDropDown(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementById('PHONE_AREA_CODE_1_0');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@';
var selectObj = document.getElementById('PHONE_NUMBER_1_0');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('CONTACT_EMAIL_1');
fillTextField(letter, selectObj);
}
setTimeout(passengerDetails, 1500);


function paymentPage () {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementById('fullName');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('countryCode');
fillDropDown(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementById('area');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@';
var selectObj = document.getElementById('phone');
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementById('addressFirstline');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementById('addressSecondLine');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementById('city');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementById('postalCode');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('email');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.getElementById('country');
fillDropDown(letter, selectObj, setState);

// state field
function setState() {
var letter = '%24$@';
var selectObj = document.getElementById('province');
fillDropDown(letter, selectObj);
}
}
setTimeout(paymentPage, 1500);
