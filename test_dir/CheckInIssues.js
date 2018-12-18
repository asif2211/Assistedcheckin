// value by place holder is not vlaid not exist in list


var selectObj = document.querySelector('form div[class~="mat-form-field-infix"] input[name="departureAirport"]');

selectObj.value = "YTO"
fireEvent(selectObj,'click')
fireEvent(selectObj,'input')
var clickmenu = document.getElementsByClassName('mat-option')[0]
fireEvent(clickmenu,'click')

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

