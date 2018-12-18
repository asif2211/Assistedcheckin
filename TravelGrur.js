
function fillTextField(letter, selectObj){
if (selectObj && letter != "") {
selectObj.value = letter;
fireEvent(selectObj, 'change');
selectObj.style.background = '#f19c4f';
}
}

//when option not define change event in attrs. (importent when page first time load)
function fireEvent(element, event){
if (document.createEventObject) {
// dispatch for IE
var evt = document.createEventObject();
return element.fireEvent('on'+event,evt);
}
else{
// dispatch for firefox + others
var evt = document.createEvent("HTMLEvents");
evt.initEvent(event, true, true ); // event type,bubbling,cancelable
return !element.dispatchEvent(evt);
}
}

(function () {
// mutation observer
var target = document.body;
// create an observer instance
var observer = new MutationObserver(function(mutations) {
setTimeout(contactDetails, 1000);
setTimeout(travellerDetails, 1000);
});
// configuration of the observer:
var config = { attributes: true, subtree: false, attributeFilter: ['class']};
// pass in the target node, as well as the observer options
if(target) {
observer.observe(target, config);
}
}());
// for hotels site
function contactDetails() {
// email field
var letter = '%11$@';
var selectObj = document.querySelector('input[ng-model*="email"]');
fillTextField(letter, selectObj);

// country code field
var letter = '%28$@';
var selectObj = document.querySelector('select[ng-model*="stdNum"]');
fillTextField(letter, selectObj);

// phone number field
var letter = '%8$@%9$@%10$@';
var selectObj = document.querySelector('input[ng-model*="mobile"]');
fillTextField(letter, selectObj);
}