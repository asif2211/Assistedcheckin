// email field
var letter = '%11$@'; var selectObj = document.getElementById('emailField');
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var container = document.getElementsByClassName('txtFirstName')[0];
if(container) {
var selectObj = container.getElementsByTagName('input')[0];
}
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var container = document.getElementsByClassName('txtLastName')[0];
if(container) {
var selectObj = container.getElementsByTagName('input')[0];
}
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var container = document.getElementsByClassName('txtPhoneShort')[0];
if(container) {
var selectObj = container.getElementsByTagName('input')[0];
}
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@';
var container = document.getElementsByClassName('txtZipShort')[0];
if(container) {
var selectObj = container.getElementsByTagName('input')[0];
}
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@';
var container = document.getElementsByClassName('txtCardName')[0];
if(container) {
var selectObj = container.getElementsByTagName('input')[0];
}
fillTextField(letter, selectObj);

// new code using currently with mutation
function fillTextField(letter, selectObj){
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'blur')
fireEvent(selectObj, 'change')
fireEvent(selectObj, 'input')
selectObj.style.background = '#f19c4f';
}
}

function fireEvent(element, event) {
if (document.createEventObject) {
var evt = document.createEventObject();
return element.fireEvent('on'+event, evt);
} else {
var evt = document.createEvent('HTMLEvents');
evt.initEvent(event, true, true);
return !element.dispatchEvent(evt);
}
}

(function () {
var target = document.body;
var observer = new MutationObserver(function() {
setTimeout(function () {
if(document.querySelector('.loader')) {
reservationPage();
observer.disconnect();
}
}, 1500);
});p
var config = { attributes: true, subtree: true, attributeFilter: ['style']};
if(target) {
observer.observe(target, config);
}
}());


function reservationPage() {

// email field
var letter = '%11$@'; var selectObj = document.querySelector('label[for="email"]+input[type="email"][name="b1_email"]');
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.querySelector('label[for="fname"]+input[id="firstname"][ng-model="guestDetail.fname"]');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('label[for="lname"]+input[id="lastname"][ng-model="guestDetail.lname"]');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@';
var selectObj = document.querySelector('label[for="zip"]+input[id="zip1"][ng-model="guestDetail.zip"]');
fillTextField(letter, selectObj);
}
