

//First Name
var letter='%1$@';var selectObj=document.getElementById('firstName');
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}
//Last Name
var letter='%3$@';var selectObj=document.getElementById("lastName");
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}
//Email Address
var letter='%11$@';var selectObj=document.getElementById("email");
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}
//Number
var letter='(%28$@)%8$@-%9$@-%10$@';var selectObj=document.getElementById('phNumber');
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}




//First Name
var letter='%1$@';var selectObj=document.getElementById('first-name');
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}
//Last Name
var letter='%3$@';var selectObj=document.getElementById("last-name");
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}
//Email Address
var letter='%11$@';var selectObj=document.getElementById("email");
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}
//Number
var letter='0%28$@%8$@%9$@%10$@';var selectObj=document.getElementById('phone');
if(selectObj && letter != ""){selectObj.value = letter;selectObj.style.background = '#f19c4f';}


//Payment page

//Address1
var letter='%18$@';var selectObj=document.getElementById("address1");
if(selectObj && letter!=""){
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
//Address2
var letter='%19$@';var selectObj=document.getElementById("address2");
if(selectObj){
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
//City
var letter='%20$@';var selectObj=document.getElementById("city");
if(selectObj && letter!=""){
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}
//Zip Code
var letter='%22$@';var selectObj=document.getElementById("zipCode");
if(selectObj){
selectObj.value = letter;
selectObj.style.background = '#f19c4f';
}


//state
function k_setState(){
var letter='%24$@';
var state = '%21$@';
var selectObj=document.getElementById('stateCode2');
if(selectObj && state != ''){
selectObj.value = letter;
if(selectObj.value == letter){
selectObj.style.background = '#f19c4f';
} else{
for(i=0; i< selectObj.options.length; i++){
if(selectObj.options[i].text.toLowerCase() == state.toLowerCase() ){
selectObj.selectedIndex = i;
selectObj.style.background = '#f19c4f';
break;
}
}
}
}
}
//when option not define change event in attrs. (importent when page first time load)
function fireEvent(element,event){
if (document.createEventObject){
// dispatch for IE
var evt = document.createEventObject();
return element.fireEvent('on'+event,evt)
}
else{
// dispatch for firefox + others
var evt = document.createEvent("HTMLEvents");
evt.initEvent(event, true, true ); // event type,bubbling,cancelable
return !element.dispatchEvent(evt);
}
}
//Country
var letter='%25$@';
var selectObj=document.getElementById('country');
if(selectObj){
selectObj.value = letter;
if(selectObj.value == letter){
selectObj.style.background = '#f19c4f';
fireEvent(selectObj,'change');
setTimeout("k_setState();",3000);
}
}



var sel= document.querySelector('select[class="select-pays"] option');
var opt = sel.options[sel.selectedIndex];
alert(sel.innerText)
function getSelectedOption(sel) {
    var opt;
    for ( var i = 0; sel.childNodes.length; i++ ) {
        opt = sel.options[i];

        }
    return opt;
}

// get selected option in sel (reference obtained above)
var opt = getSelectedOption(sel);

// display its value and text
alert(opt)
