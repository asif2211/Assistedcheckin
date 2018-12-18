//Payment form for copa airlines

// cardholder name field
var letter = '%1$@ %3$@'; var selectObj = document.getElementById('creditCard.cardHolderName');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// country code field
var letter = '%28$@'; var selectObj = document.getElementById('creditCard.cardHolderPhone.phoneNumberCountryCode');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// phone number field
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementById('creditCard.cardHolderPhone.phoneNumber');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// email field
var letter = '%11$@'; var selectObj = document.getElementById('creditCard.cardHolderEmail');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// billing address 1
var letter = '%18$@'; var selectObj = document.getElementById('billingAddress.addressLine1');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// billing address 2
var letter = '%19$@'; var selectObj = document.getElementById('billingAddress.addressLine2');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// city field
var letter = '%20$@'; var selectObj = document.getElementById('billingAddress.city');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

// country field
var letter = '%25$@'; var selectObj = document.getElementById('billingAddress.country');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
if(selectObj.onchange){
selectObj.onchange();
}
if(set_state){
setTimeout(set_state,1000);
}
}
function set_state() {
// state field
var letter = '%24$@'; var selectObj = document.getElementById('billingAddress.stateDisplay');
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
}

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementById("billingAddress.postalCode");
if (selectObj && letter != "") {
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}

//Gender
var letter= '%3$@'; var selectObj=document.querySelector("#booksmart > div > div > div.l-body > div > section:nth-child(6) > div > div > form > div:nth-child(6) > div > label:nth-child(1) > input");
if(selectObj && letter != ""){selectObj.checked="true";fireEvent(selectObj, 'chagne');
fireEvent(selectObj, 'input');}
