


autofillCheckin.fireEvent = function (element, event) {
if (document.createEventObject) {
var evt = document.createEventObject();
return element.fireEvent('on'+event, evt);
} else {
var evt = document.createEvent('HTMLEvents');
evt.initEvent(event, true, true);
return !element.dispatchEvent(evt);
}
};

setTimeout(function () {
// for selecting booking reference in check-in method dropdown
var letter = 'filekey';
var selectObj = document.getElementById('method');
if (selectObj && letter !== "") {
selectObj.value = letter;
autofillCheckin.fireEvent(selectObj, 'change');
}

// confirmation code field
var letter = '%26$@';
var selectObj = document.getElementById('filekey_nr');
autofillCheckin.fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.getElementById('filekey_fname');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('filekey_name');
autofillCheckin.fillTextField(letter, selectObj);

setTimeout(autofillCheckin.ipadSubmit, 100);
}, 1500);

autofillCheckin.ipadSubmit = function () {
// submit form
var selectObj = document.querySelector('form[class~="lh-ress-form"][action*="logon"] section[class~="boxed-information"] + button[type="submit"]');
var error = document.querySelector('div[class~="message-box"] p[class~="error"] span[class~="message-text"]');
if (error) {
error = error.innerText.search('ticket could not be found') !== -1;
}
autofillCheckin.clickSubmit(selectObj, error);
};
//  Mobile site
setTimeout(function () {
// for selecting booking reference in check-in method dropdown
var letter = 'filekeyOrTicket';
var selectObj = document.getElementById('method');
if (selectObj && letter !== "") {
selectObj.value = letter;
autofillCheckin.fireEvent(selectObj, 'change');
}

// confirmation code field
var letter = '%26$@';
var selectObj = document.getElementById('filekey_or_ticket_nr');
autofillCheckin.fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.getElementById('filekey_or_ticket_fname');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('filekey_or_ticket_name');
autofillCheckin.fillTextField(letter, selectObj);

setTimeout(autofillCheckin.mobileSubmit, 100);
}, 1500);

autofillCheckin.mobileSubmit = function () {
// submit form
var selectObj = document.querySelector('form[class~="lh-ress-form"][action*="logon"] section[class~="boxed-information"] + button[type="submit"]');
var error = document.querySelector('div[class~="message-box"] p[class~="error"] span[class~="message-text"]');
if (error) {
error = error.innerText.search('ticket could not be found') !== -1;
}
autofillCheckin.clickSubmit(selectObj, error);
};

//new code
setTimeout(function () {

// confirmation code field
var letter = '%26$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="Booking reference or ticket number"]');
autofillCheckin.fillTextField(letter, selectObj);

// first name field
var letter = '%1$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="Last name"]');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="First name"]');
autofillCheckin.fillTextField(letter, selectObj);

setTimeout(autofillCheckin.ipadSubmit, 100);
}, 1500);


autofillCheckin.ipadSubmit = function () {
// submit form
var selectObj = document.querySelector('div[class="frequent-flyer-card"] button[class="btn btn-primary"][type="submit"] span');
var error = document.querySelector('div[class~="message-box"] p[class~="error"] span[class~="message-text"]');
if (error) {
error = error.innerText.search('ticket could not be found') !== -1;
}
autofillCheckin.clickSubmit(selectObj, error);
};

// for mobile site code
setTimeout(function () {

// confirmation code field
var letter = '%26$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="Booking reference or ticket number"]');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%1$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="Last name"]');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="First name"]');
autofillCheckin.fillTextField(letter, selectObj);

setTimeout(autofillCheckin.mobileSubmit, 100);
}, 1500);

autofillCheckin.mobileSubmit = function () {
// submit form
var selectObj = document.querySelector('div[class="frequent-flyer-card"] button[class="btn btn-primary"][type="submit"] span');
var error = document.querySelector('div[class~="message-box"] p[class~="error"] span[class~="message-text"]');
if (error) {
error = error.innerText.search('ticket could not be found') !== -1;
}
autofillCheckin.clickSubmit(selectObj, error);
};



// for mobile site code
setTimeout(function () {

// confirmation code field
var letter = '%26$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="Last name"]');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%1$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="Last name"]');
autofillCheckin.fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.querySelector('div[class="input-border-wrapper"] input[placeholder="First name"]');
autofillCheckin.fillTextField(letter, selectObj);

setTimeout(autofillCheckin.mobileSubmit, 100);
}, 1500);

autofillCheckin.mobileSubmit = function () {
// submit form
var selectObj = document.querySelector('div[class="frequent-flyer-card"] button[class="btn btn-primary"][type="submit"] span');
var error = document.querySelector('div[class~="message-box"] p[class~="error"] span[class~="message-text"]');
if (error) {
error = error.innerText.search('ticket could not be found') !== -1;
}
autofillCheckin.clickSubmit(selectObj, error);
};