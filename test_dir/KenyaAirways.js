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

// using addEventListener
window.addEventListener('hashchange', function() {
setTimeout(function () {
if (document.title.search('Passenger') !== -1) {
passengerDetails();
}
if (document.title.search('Payment') !== -1) {
paymentPage();
}
}, 1500);
});

// mutation observer
setTimeout(function () {
var target = document.querySelector('div[class="payment"]');
var observer = new MutationObserver(function() {
if(document.getElementsByName('nameOnCard')[0]) {
paymentPageIpad();
observer.disconnect();
}
});
var config = {subtree: true, childList: true};
if(target) {
observer.observe(target, config);
}
}, 1000);

// for iphone site
function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('FIRST_NAME_1');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('LAST_NAME_1');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementById('COUNTRY');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@';
var selectObj = document.getElementById('AREA_CODE');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@';
var selectObj = document.getElementById('PHONE_NUMBER');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('CONTACT_POINT_EMAIL_1');
fillTextField(letter, selectObj);
}