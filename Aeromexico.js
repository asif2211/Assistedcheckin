// first name field
var letter = '%1$@'; var selectObj = document.getElementById('first_name-0');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('last_name-0');
fillTextField(letter, selectObj);

// gender field
var letter = '%7$@';
if(letter=='M'){
var selectObj = document.getElementById("gender-0-MALE");
if(selectObj){
selectObj.click();
}
}
else{
var selectObj = document.getElementById("gender-0-FEMALE");
if(selectObj){
selectObj.click();
}
}

// country code field
var letter = '%28$@'; var selectObj = document.getElementById('phone0-1-countryCode');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@'; var selectObj = document.getElementById('phone0-1-areaCode-raw');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@'; var selectObj = document.getElementById('phone0-1-number-raw');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementById('contactInfo-email-1');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@'; var selectObj = document.getElementById('email_retype-1');
fillTextField(letter, selectObj);

//payment info
function paymentPage() {
// cardholder name field
var letter = '%1$@ %3$@';
var selectObj = document.querySelector('input[id*="nameoncard" i]');
fillTextField(letter, selectObj);
}

// DOB fields
function dobFields() {
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
}


//current data
// travellerDetails for iphone
function travellerDetails()
{
// first name field
var element = document.getElementById("firstName");
if(element)
{
var ev = new Event('input', { bubbles: true});
ev.simulated = true;
element.value = "%1$@";
element.style.background="#f19c4f"
element.defaultValue = "Something new";
element.dispatchEvent(ev);
}

// middle name field
var element = document.getElementById("middleName");
if(element)
{
var ev = new Event('input', { bubbles: true});
ev.simulated = true;
element.value = "%11$@";
element.style.background="#f19c4f"
element.defaultValue = "Something new";
element.dispatchEvent(ev);
}
// last name field
var element = document.getElementById("lastName");
if(element)
{
var ev = new Event('input', { bubbles: true});
ev.simulated = true;
element.value = "%3$@";
element.style.background="#f19c4f"
element.defaultValue = "Something new";
element.dispatchEvent(ev);
}
var letter = '%7$@';
if(letter=='Male'){
var selectObj = document.querySelector('div[class="FormInput-wrapper FormInput-wrapper--toggle"] label[for="gender"]+ ul li button[type="button"]');
if(selectObj){
selectObj.click();
}
}
else{
var selectObj = document.querySelector('div[class="FormInput-wrapper FormInput-wrapper--toggle is-correct"] label[for="gender"]+ul li[class="Toggle-listItem"] button[class="Toggle-button Toggle-button--form"]');
if(selectObj){
selectObj.click();
}
}
// DOB

// phone number field

//Month
    var letter = '%4$@';
    var selectObj = document.querySelector('div[class="Dropdown FormInputDateDropdown-dropdown"] select[name="bday bday-month"]');
    fillDropDown(letter, selectObj);

//Day
    var letter = '%5$@';
    var selectObj = document.querySelector('div[class="Dropdown FormInputDateDropdown-dropdown"] select[name="bday bday-day"]');
    fillDropDown(letter, selectObj);

//Years
    var letter = '%6$@';
    var selectObj = document.querySelector('div[class="Dropdown FormInputDateDropdown-dropdown"] select[name="bday bday-year"]');
    fillDropDown(letter, selectObj);

var letter = '%8$@%9$@%10$@'; var selectObj = document.querySelector('div[class="FormInputPhone-input"] input[type="number"][id="phoneNumbers.phoneNumber0"]');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.querySelector('div[class="FormInput FormInput--large"] input[id="email"]');
fillTextField(letter, selectObj);


}
