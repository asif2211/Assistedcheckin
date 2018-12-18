// fill functions for dropdown, and textfields.
function fillDropDown(letter, selectObj, setDelay) {
if(selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'change');
selectObj.style.background = '#f19c4f';
if(setDelay){
setTimeout(setDelay, 1000);
}
}
}

function fillTextField(letter, selectObj) {
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
}

// need to create general fireEvent function on these functions
function fireEvent(element, event) {
if (document.createEventObject){
// dispatch for IE
var evt = document.createEventObject();
return element.fireEvent('on'+event,evt)
}
else{
// dispatch for firefox + others
var evt = document.createEvent("HTMLEvents");
evt.initEvent(event, true, true ); // event type,bubbling,cancelable
return !element.dispatchEvent(evt);
}
}

// hotel site template
//firstname field
var letter = '%1$@ %3$@';
var selectObj = document.getElementsByName('tripPreferencesRequest.hotelTripPreferences.hotelRoomPreferences[0].contactName')[0];
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.getElementsByName('tripPreferencesRequest.hotelTripPreferences.hotelRoomPreferences[0].preferredPhoneCountryCode')[0];
fillDropDown(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';var selectObj = document.getElementsByName("tripPreferencesRequest.hotelTripPreferences.hotelRoomPreferences[0].preferredPhoneNumber")[0];
fillTextField(letter, selectObj);

// Card holder name field
var letter = '%1$@ %3$@';
var selectObj = document.getElementsByName('cardholder_name')[1];
fillTextField(letter, selectObj);

// zip code field
var letter = '%22$@';
var selectObj = document.getElementsByName('zipcode')[0] || document.querySelector('input[data-tealeaf-name="zipcode_1"]');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementsByName('email')[1];
fillTextField(letter, selectObj);
