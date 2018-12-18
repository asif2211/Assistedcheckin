
setTimeout(function () {
var target = document.getElementById('info_registro_pasajeros');
var observer = new MutationObserver(function() {
setTimeout(function(){
passengerDetails();
observer.disconnect();
}, 1000);
});
var config = { attributes: true, subtree: false, attributeFilter: ['class']};
if(target) {
observer.observe(target, config);
}
}, 1000);


function passengerDetails() {
// first name field
var letter = '%1$@';
var selectObj = document.getElementById('tbx_px1_nombres');
fillTextField(letter, selectObj);

// last name field
var letter = '%3$@';
var selectObj = document.getElementById('tbx_px1_apellidos');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.getElementById('tbx_px1_telefono');
fillTextField(letter, selectObj);

// email field
var letter = '%11$@';
var selectObj = document.getElementById('tbx_px1_email');
fillTextField(letter, selectObj);
}