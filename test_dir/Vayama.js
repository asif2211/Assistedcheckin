/// for passenger details page
function passengerDetails() {
// gender field
var letter = '%7$@';
if(letter=='M'){
var selectObj = document.getElementById('passengerGenderMale0');
if(selectObj) {
selectObj.click();
}
} else {
var selectObj = document.getElementById('passengerGenderFemale0');
if(selectObj) {
selectObj.click();
}
}

// first name field
var letter = '%1$@';
var selectObj = document.getElementById('passengerFirstName0');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('passengerLastName0');
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@';
var selectObj = document.getElementsByName('passengerDob0_ctrl_month')[0];
if(letter<10){
letter = '0' + letter;
}
fillDropDown(letter, selectObj);

// day
var letter = '%5$@';
var selectObj = document.getElementsByName('passengerDob0_ctrl_day')[0];
if(letter<10){
letter = '0' + letter;
}
fillDropDown(letter, selectObj);

// year
var letter = '%6$@';
var selectObj = document.getElementsByName('passengerDob0_ctrl_year')[0];
fillDropDown(letter, selectObj);
}
