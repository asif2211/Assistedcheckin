// contact details
// first name field
var letter = '%1$@'; var selectObj = document.getElementsByName('ContactFirstName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementsByName('ContactLastName')[0];
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@'; var selectObj = document.getElementById('CountryDiallingCode');
fillDropDown(letter, selectObj);

// area code field
var letter = '%8$@'; var selectObj = document.getElementById('PhoneAreaCode');
fillTextField(letter, selectObj);

// phone number field
var letter = '%9$@%10$@'; var selectObj = document.getElementById('Phone');
fillTextField(letter, selectObj);

// mobile phone number field
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementsByName('Mobile')[0];
fillTextField(letter, selectObj);

// billing address 1 field
var letter = '%18$@'; var selectObj = document.getElementsByName('Address1')[0];
fillTextField(letter, selectObj);

// billing address 2 field
var letter = '%19$@'; var selectObj = document.getElementsByName('Address2')[0];
fillTextField(letter, selectObj);

// state field
var letter = '%21$@'; var selectObj = document.getElementsByName('AddressState')[0];
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementsByName('AddressPostCode')[0];
fillTextField(letter, selectObj);

// mobile phone number field for travellers
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementsByName('Phone2')[0];
fillTextField(letter, selectObj);

// first name field
var letter = '%1$@'; var selectObj = document.getElementsByName('P1FirstName')[0];
fillTextField(letter, selectObj);

// middle name field
var letter = '%2$@'; var selectObj = document.getElementsByName('P1MiddleName')[0];
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementsByName('P1LastName')[0];
fillTextField(letter, selectObj);

// DOB fields
// month
var letter = '%4$@'; var selectObj = document.getElementsByName('P1DOB_M')[0];
if(letter<10){
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// day
var letter = '%5$@'; var selectObj = document.getElementsByName('P1DOB_D')[0];
if(letter<10){
letter = '0' + letter;
}
fillTextField(letter, selectObj);

// year
var letter = '%6$@'; var selectObj = document.getElementsByName('P1DOB_Y')[0];
fillTextField(letter, selectObj);

// cardholder name field
var letter = '%1$@ %3$@'; var selectObj = document.getElementsByName('Cardholder')[0];
fillTextField(letter, selectObj);

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementsByName('CardBillingZIP')[0];
fillTextField(letter, selectObj);
