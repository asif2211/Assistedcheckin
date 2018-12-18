// fill functions for dropdown and textfields
function fillDropDown(letter, selectObj, setDelay){
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'change');
selectObj.style.background = '#f19c4f';
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

setTimeout(function () {
var target = document.body;
var observer = new MutationObserver(function() {
setTimeout(function() {
if (document.getElementsByName('firstName')[0]) {
paymentPage();
observer.disconnect();
}
}, 1500);
});
var config = {subtree: true, childList: true};
if(target) {
observer.observe(target, config);
}
}, 1000);

function paymentPage() {
// email field
var letter = '%11$@';
var selectObj = document.getElementsByName('email')[0];
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.getElementsByName('reTypeEmail')[0];
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementsByName('dayTimeNumber')[0];
fillTextField(letter, selectObj);

// DOB fields
function setMonth() {
var letter = '%4$@';
var selectObj = document.getElementsByName('dateOfBirth.month')[0];
if (letter < 10) {
letter = '0' + letter;
}
fillDropDown(letter, selectObj, setDay);
}

function setDay() {
var letter = '%5$@';
var selectObj = document.getElementsByName('dateOfBirth.day')[0];
if (letter < 10) {
letter = '0' + letter;
}
fillDropDown(letter, selectObj);
}

// year
var letter = '%6$@';
var selectObj = document.getElementsByName('dateOfBirth.year')[0];
fillDropDown(letter, selectObj, setMonth);

// first name field
var letter = '%1$@';
var selectObj = document.getElementsByName('firstName')[0];
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@';
var selectObj = document.getElementsByName('middleNames')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementsByName('lastName')[0];
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.getElementsByName('location.country')[0];
fillDropDown(letter, selectObj, setState);

// state field
function setState() {
var letter = '%24$@';
var selectObj = document.getElementsByName('location.region')[0];
fillDropDown(letter, selectObj);
}

// first name field
var letter = '%1$@';
var selectObj = document.getElementsByName('accountHolder.firstName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementsByName('accountHolder.lastName')[0];
fillTextField(letter, selectObj);

// country field
var letter = '%25$@';
var selectObj = document.getElementsByName('billingAddress.country')[0];
fillDropDown(letter, selectObj, setState2);

// state field
function setState2() {
var letter = '%24$@';
var selectObj = document.getElementsByName('billingAddress.region')[0];
fillDropDown(letter, selectObj);
}

// billing address 1 field
var letter = '%18$@';
var selectObj = document.getElementsByName('billingAddress.street')[0];
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@';
var selectObj = document.getElementsByName('billingAddress.unit')[0];
fillTextField(letter, selectObj);

// city field
var letter = '%20$@';
var selectObj = document.getElementsByName('billingAddress.city')[0];
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter = '%22$@';
var selectObj = document.getElementsByName('billingAddress.postalCode')[0];
fillTextField(letter, selectObj);
}
