// first name field
var letter = '%1$@'; var selectObj = document.getElementById('paxForm:contactAdr:firstName');;
fill_textfield(letter,selectObj);

// middle name field
var letter = '%2$@'; var selectObj = document.getElementById('paxForm:contactAdr:middleName');
fill_textfield(letter,selectObj);

// last name field
var letter = '%3$@'; var selectObj = document.getElementById('paxForm:contactAdr:lastName');
fill_textfield(letter,selectObj);

// billing address 1 field
var letter = '%18$@ %19$@'; var selectObj = document.getElementById('paxForm:contactAdr:street');
fill_textfield(letter,selectObj);

// postcode(zipcode) field
var letter ='%22$@'; var selectObj = document.getElementById("paxForm:contactAdr:zip");
fill_textfield(letter,selectObj);

// city field
var letter = '%20$@'; var selectObj = document.getElementById('paxForm:contactAdr:city');
fill_textfield(letter,selectObj);

// country field
var letter = '%25$@'; var selectObj = document.getElementById('paxForm:contactAdr:country');
fill_dropdown(letter,selectObj);

// phone number field
var letter = '%8$@%9$@%10$@'; var selectObj = document.getElementById('paxForm:contactAdr:phone');
fill_textfield(letter,selectObj);

// email field
var letter = '%11$@'; var selectObj = document.getElementById('paxForm:contactAdr:email');
fill_textfield(letter,selectObj);

// confirm email field
var letter = '%11$@'; var selectObj = document.getElementById('paxForm:contactAdr:emailRepeat');
fill_textfield(letter,selectObj);
