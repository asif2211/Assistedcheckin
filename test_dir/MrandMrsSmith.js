// first name field
var letter = '%1$@'; var selectObj = document.getElementById('step_two_member_firstname');
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@'; var selectObj = document.getElementById('');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('step_two_member_lastname');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementById('step_two_member_default_identity_email');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementById('step_two_member_default_phone_number_number');
fillTextField(letter, selectObj);

// country field
var letter = '%25$@'; var selectObj = document.getElementById('step_two_address_country');
fillDropDown(letter, selectObj, setState);

// state field
function setState() {
var letter = '%21$@'; var selectObj = document.getElementById('step_two_address_state');
if (selectObj && letter != "") {
for(var i=0; i< selectObj.options.length; i++){
if(selectObj.options[i].value.toLowerCase() == letter.toLowerCase() ){
selectObj.selectedIndex = i;
break;
}
}
selectObj.style.background = '#f19c4f';
}
}

// billing address 1 field
var letter = '%18$@'; var selectObj = document.getElementById('step_two_address_line_1');
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@'; var selectObj = document.getElementById('step_two_address_line_2');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@'; var selectObj = document.getElementById('step_two_address_town');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementById('step_two_address_postcode');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@'; var selectObj = document.getElementById('step_two_payment_name_on_card');
fillTextField(letter, selectObj);