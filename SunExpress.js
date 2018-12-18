// first name field
var letter = '%1$@'; var selectObj = document.getElementById('form1:firstName_1');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('form1:surName_1');
fillTextField(letter, selectObj);

// DOB fields
var day = '%5$@';
var month = '%4$@';
var year = '%6$@';
var selectObj = document.getElementById('form1:birthdate_adult_1');
if(month<10){
month = '0' + month;
}
if(day<10){
day = '0' + day;
}
var dob = day + '/' + month + '/' + year;
fillTextField(dob, selectObj);

// gender field
var letter = '%7$@';
var selectObj = document.getElementById('selectedGenderContactText');
if(letter=='M'){
letter = "Mr.";
}
else{
letter = "Mrs.";
}
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@'; var selectObj = document.getElementById('form1:contactFirstName');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('form1:contactLastName');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@'; var selectObj = document.getElementById('form1:phoneCountry');
fillTextField(letter, selectObj);

// area code field
var letter = '%8$@'; var selectObj = document.getElementById('form1:contactPhoneAreaCode');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@'; var selectObj = document.getElementById('form1:contactPhoneNumber');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementById('form1:contactEmail');
fillTextField(letter, selectObj);

// confirm email field
var letter = '%11$@'; var selectObj = document.getElementById('form1:reEmail');
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@'; var selectObj = document.getElementById('form1:ccinput_cHolder');
fillTextField(letter, selectObj);

// address field
var letter = '%18$@ %19$@'; var selectObj = document.getElementById('form1:addressinput_street');
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementById('form1:addressinput_zip');
fillTextField(letter, selectObj);

// city field
var letter = '%20$@'; var selectObj = document.getElementById('form1:addressinput_city');
fillTextField(letter, selectObj);
