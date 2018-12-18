
//for Scroll to top Jeblue
function scrollTop()
{
var element = document.querySelector('jb-transition-button button[class~="secondary-jb-btn"][type="submit"]').getBoundingClientRect()
if(element)
{
window.scrollTo({
'behavior': 'smooth',
'left': 0,
'top':element.top-element.height+10
});
}
}
scrollTop();

//for Scroll to top for Lotpolish
function scrollTop()
{
var element = document.querySelector('form[name="identification_PNR"] div[class="form-group"] p').getBoundingClientRect()
if(element)
{
window.scrollTo({
  'behavior': 'smooth',
  'left': 0,
  'top':element.top-element.height+10
});
}
}
scrollTop();

//for Scroll to top for SAS
function scrollTop()
{
var element = document.getElementById('Outbound').getBoundingClientRect()
if(element)
{
window.scrollTo({
  'behavior': 'smooth',
  'left': 0,
  'top':element.top-element.height+10
});
}
}
scrollTop();

//for Scroll to top for SAS
function scrollTop()
{
var element = document.querySelector('label[for="FirstName"]').getBoundingClientRect()
if(element)
{
window.scrollTo({
  'behavior': 'smooth',
  'left': 0,
  'top':element.top-element.height+10
});
}
}
scrollTop();


//for Scroll to top for Tap Portgal remaining
function scrollTop()
{
var element = document.querySelector('div[class="content-block"] h2[translate="identification.DetailsTitle"]').getBoundingClientRect()
if(element)
{
window.scrollTo({
'behavior': 'smooth',
'left': 0,
'top':element.top-element.height+10
});
}
}
scrollTop();
