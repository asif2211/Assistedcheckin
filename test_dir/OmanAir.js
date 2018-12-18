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
// mutation observer for child Nodes mutation
var target = document.getElementById('card-details-0');
// create an observer instance
var observer = new MutationObserver(function(mutations) {
setTimeout(function () {
if(document.querySelector('input[id*="nameOnCard"]')){
paymentPage();
observer.disconnect();
}
}, 900);
});
// configuration of the observer:
var config = { attributes: true, subtree: false, attributeFilter: ['class']};
// pass in the target node, as well as the observer options
if(target) {
observer.observe(target, config);
}
}, 1000);


setTimeout(function () {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('first_name-0');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@';
var selectObj = document.getElementById('middle_name-0');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('last_name-0');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
if (letter == 'M') {
var selectObj = document.getElementById('gender-0-MALE');
if (selectObj) {
selectObj.click();
}
} else {
var selectObj = document.getElementById('gender-0-FEMALE');
if (selectObj) {
selectObj.click();
}
}

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementById('dob-0_1');
if (letter < 10) {
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementById('dob-0_0');
fillTextField(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementById('dob-0_2');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('phone0-1-countryCode');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementById('phone0-1-areaCode-raw');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@';
var selectObj = document.getElementById('phone0-1-number-raw');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('contactInfo-email-1');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@';
var selectObj = document.getElementById('email_retype-1');
fillTextField(letter, selectObj);
}, 1000);