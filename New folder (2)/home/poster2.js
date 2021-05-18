


//- - - - - - - - - - - - - - - - - - - - - - - - - when you choose a picture script


save = function() {
navigator.vibrate([100,10,100]);
var src = document.getElementById('result').src;
document.getElementById('link').href = src;
}

function readFile() {
var reader = new FileReader();
var file = document.getElementById('demo').files[0];
reader.onload = function(e) {

if(document.getElementById('result').alt == ""){

document.getElementById('result').src = e.target.result;
document.getElementById('result').alt = "sorry you can't see this picture at the moment";


}else {

if(document.getElementById('result2').alt == ''){

document.getElementById('result2').src = e.target.result;
document.getElementById('result2').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result3').alt == ''){

document.getElementById('result3').src = e.target.result;
document.getElementById('result3').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result4').alt == ''){

document.getElementById('result4').src = e.target.result;
document.getElementById('result4').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result5').alt == ''){

document.getElementById('result5').src = e.target.result;
document.getElementById('result5').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result6').alt == ''){

document.getElementById('result6').src = e.target.result;
document.getElementById('result6').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result7').alt == ''){

document.getElementById('result7').src = e.target.result;
document.getElementById('result7').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result8').alt == ''){

document.getElementById('result8').src = e.target.result;
document.getElementById('result8').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result9').alt == ''){

document.getElementById('result9').src = e.target.result;
document.getElementById('result9').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result10').alt == ''){

document.getElementById('result10').src = e.target.result;
document.getElementById('result10').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result11').alt == ''){

document.getElementById('result11').src = e.target.result;
document.getElementById('result11').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result12').alt == ''){

document.getElementById('result12').src = e.target.result;
document.getElementById('result12').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result13').alt == ''){

document.getElementById('result13').src = e.target.result;
document.getElementById('result13').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result14').alt == ''){

document.getElementById('result14').src = e.target.result;
document.getElementById('result14').alt = "sorry you can't see this picture at the moment";

}else {

if(document.getElementById('result15').alt == ''){

document.getElementById('result15').src = e.target.result;
document.getElementById('result15').alt = "sorry you can't see this picture at the moment";

}else {

alert('you can put a maximum of 15 pictures.<br> You can remove some pictures by clicking at them');

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

}

reader.readAsDataURL(file);

document.getElementById("display_pst").style.display = "block";
}

chooseFile = function() {
navigator.vibrate([100,10,100]);
document.getElementById('demo').click();

}

function abort() {

 document.getElementById('result').src = '';
 
 document.getElementById('result').alt = '';

  document.getElementById('result2').src = '';
 
 document.getElementById('result2').alt = '';

  document.getElementById('result3').src = '';
 
 document.getElementById('result3').alt = '';

  document.getElementById('result4').src = '';
 
 document.getElementById('result4').alt = '';

  document.getElementById('result5').src = '';
 
 document.getElementById('result5').alt = '';

  document.getElementById('result6').src = '';
 
 document.getElementById('result6').alt = '';

  document.getElementById('result7').src = '';
 
 document.getElementById('result7').alt = '';

  document.getElementById('result8').src = '';
 
 document.getElementById('result8').alt = '';

  document.getElementById('result9').src = '';
 
 document.getElementById('result9').alt = '';

  document.getElementById('result10').src = '';
 
 document.getElementById('result10').alt = '';

  document.getElementById('result11').src = '';
 
 document.getElementById('result11').alt = '';

 document.getElementById('result12').src = '';
 
 document.getElementById('result12').alt = '';

  document.getElementById('result13').src = '';
 
 document.getElementById('result13').alt = '';

  document.getElementById('result14').src = '';
 
 document.getElementById('result14').alt = '';

  document.getElementById('result15').src = '';
 
 document.getElementById('result15').alt = '';
 
 
 
 
 document.getElementById('write_a_comment').value = '';

 document.getElementById("draft").style.display = "none";
 
}

//- - - - - - - - - - - - -  - - - - - - - - - - - - - - - -remove pictures


function result1() {

 document.getElementById('result').src = '';
 
 document.getElementById('result').alt = '';


}

function result2() {

document.getElementById('result2').src = "";
document.getElementById('result2').alt = "";

}

function result3() {

document.getElementById('result3').src = "";
document.getElementById('result3').alt = "";

}

function result4() {

document.getElementById('result4').src = "";
document.getElementById('result4').alt = "";

}

function result5() {

document.getElementById('result5').src = "";
document.getElementById('result5').alt = "";

}

function result6() {

document.getElementById('result6').src = "";
document.getElementById('result6').alt = "";

}

function result7() {

document.getElementById('result7').src = "";
document.getElementById('result7').alt = "";

}

function result8() {

document.getElementById('result8').src = "";
document.getElementById('result8').alt = "";

}

function result9() {

document.getElementById('result9').src = "";
document.getElementById('result9').alt = "";

}

function result10() {

document.getElementById('result10').src = "";
document.getElementById('result10').alt = "";

}

function result11() {

document.getElementById('result11').src = "";
document.getElementById('result11').alt = "";

}
function result12() {

document.getElementById('result12').src = "";
document.getElementById('result12').alt = "";

}

function result13() {

document.getElementById('result13').src = "";
document.getElementById('result13').alt = "";

}

function result14() {

document.getElementById('result14').src = "";
document.getElementById('result14').alt = "";

}

function result15() {

document.getElementById('result15').src = "";
document.getElementById('result15').alt = "";

}




// - - - - - - - - - - - -- - - - - - - - - - - - - - -oninput- - - - - - - - - -- - -

function diss() {
  
  document.getElementById("draft").style.display = "block";
  document.getElementById('pree').innerHTML = document.getElementById('write_a_comment').value;

}

//- - - - - - - - - - - - - - - - - - - - - - - - - when you post script - - - - - - - - -



function send() {

var comment=document.getElementById('write_a_comment').value;

//encodeURLcomponent(comment);

   if(comment == '') {

    navigator.vibrate([100,10,100]);
    alert('please write something');

  }else {
document.getElementById("draft").style.display = "none";

var comment=document.getElementById('pree').innerHTML;

let img1 = document.getElementById('result').src;
let img2 = "<img id='' src='" + document.getElementById('result2').src + "' alt='" + document.getElementById('result2').alt + "' />";
let img3 = "<img id='' src='" + document.getElementById('result3').src + "' alt='" + document.getElementById('result3').alt + "' />";
let img4 = "<img id='' src='" + document.getElementById('result4').src + "' alt='" + document.getElementById('result4').alt + "' />";
let img5 = "<img id='' src='" + document.getElementById('result5').src + "' alt='" + document.getElementById('result5').alt + "' />";
let img6 = "<img id='' src='" + document.getElementById('result6').src + "' alt='" + document.getElementById('result6').alt + "' />";
let img7 = "<img id='' src='" + document.getElementById('result7').src + "' alt='" + document.getElementById('result7').alt + "' />";
let img8 = "<img id='' src='" + document.getElementById('result8').src + "' alt='" + document.getElementById('result8').alt + "' />";
let img9 = "<img id='' src='" + document.getElementById('result9').src + "' alt='" + document.getElementById('result9').alt + "' />";
let img10 = "<img id='' src='" + document.getElementById('result10').src + "' alt='" + document.getElementById('result10').alt + "'/>";
let img12 = "<img id='' src='" + document.getElementById('result11').src + "' alt='" + document.getElementById('result11').alt + "' />";
let img11 = "<img id='' src='" + document.getElementById('result12').src + "' alt='" + document.getElementById('result12').alt + "' />";
let img13 = "<img id='' src='" + document.getElementById('result13').src + "' alt='" + document.getElementById('result13').alt + "' />";
let img14 = "<img id='' src='" + document.getElementById('result14').src + "' alt='" + document.getElementById('result14').alt + "' />";
let img15 = "<img id='' src='" + document.getElementById('result15').src + "' alt='" + document.getElementById('result15').alt + "' />";

var dov = document.getElementById('id').innerHTML+='+1';
var identities = document.getElementById('id').innerHTML = eval(dov);

var _1 = '<div class="' + identities + '" id="pst_and_pic">';
var _111 = '<div>';
var _2 = '<div id="p_i_cture">';
var _3 = '<div id="all">';
var _4 = '<div class="" id="prsn_prof">';
var _5 = '<img src="' + 'picture source' +'" id="prsn_pic" alt="" />';
var _6 = '<span id="">';
var _7 = '</span>';
var _8 = '</div>';
var _9 = '<p>';
var _10 = '</p>';
var _11 = '<div id="display_pst">';
var _12 = '<p id="f">';
var _13 = '<p id="post_text">';
var _14 = _111 + '<img src="' + img1 +'" class="img" alt="" />' + _8;
var _15 = '<button id="">';
var _16 = '</button>';

 var main = _1 + _12 + identities + _10 + _111 + _3 + _4 + _111 + _5 + _8 + _8 + _6;
var vice = main + _9 + 'Your name' + _10 + _7 + _8 + _11 + _13 + comment + _10 + _14;
var second = _8 + _111 + _15 + 'Like' + _16;

// - - - - - - -  - - -- - - - - - - - - - - -  - - - pictures

 var one = _2 + img2 + _8 + _2 + img3 + _8 + _2 + img4; 
    var one_and_half = _8 + _2 + img5 + _8 + _2 + img6 + _8 + _2 + img7 + _8 + _2;
 var two = one_and_half + img8 + _8 + _2 + img9 + _8 + _2 + img10 + _8 + _2;
 var three = img11 + _8 + _2 + img12 + _8 + _2 + img13 + _8 + _2 + img14 + _8 + _2 + img15 + _8;

//- - - - - - - - - - - - - - - - - - - - - - - - - - the end

var finale = _15 + 'Comment' + _16 + _15+ 'Report' +_16 + _15;

var six = finale + '<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
<path fill="#231F20" d="M10.289,14.211h3.102l1.444,25.439c0.029,0.529,0.468,0.943,0.998,0.943h18.933
	c0.53,0,0.969-0.415,0.998-0.944l1.421-25.438h3.104c0.553,0,1-0.448,1-1s-0.447-1-1-1h-3.741c-0.055,0-0.103,0.023-0.156,0.031
	c-0.052-0.008-0.1-0.031-0.153-0.031h-5.246V9.594c0-0.552-0.447-1-1-1h-9.409c-0.553,0-1,0.448-1,1v2.617h-5.248
	c-0.046,0-0.087,0.021-0.132,0.027c-0.046-0.007-0.087-0.027-0.135-0.027h-3.779c-0.553,0-1,0.448-1,1S9.736,14.211,10.289,14.211z
	 M21.584,10.594h7.409v1.617h-7.409V10.594z M35.182,14.211L33.82,38.594H16.778l-1.384-24.383H35.182z"/>
<path fill="#231F20" d="M20.337,36.719c0.02,0,0.038,0,0.058-0.001c0.552-0.031,0.973-0.504,0.941-1.055l-1.052-18.535
	c-0.031-0.552-0.517-0.967-1.055-0.942c-0.552,0.031-0.973,0.504-0.941,1.055l1.052,18.535
	C19.37,36.308,19.811,36.719,20.337,36.719z"/>
<path fill="#231F20" d="M30.147,36.718c0.02,0.001,0.038,0.001,0.058,0.001c0.526,0,0.967-0.411,0.997-0.943l1.052-18.535
	c0.031-0.551-0.39-1.024-0.941-1.055c-0.543-0.023-1.023,0.39-1.055,0.942l-1.052,18.535C29.175,36.214,29.596,36.687,30.147,36.718
	z"/>
<path fill="#231F20" d="M25.289,36.719c0.553,0,1-0.448,1-1V17.184c0-0.552-0.447-1-1-1s-1,0.448-1,1v18.535
	C24.289,36.271,24.736,36.719,25.289,36.719z"/>
</svg>';

var sev = six +_16 + _8 + _8 + _8;
var grand = vice + one + two + three + second + sev;

document.getElementById('post_text1').innerHTML = document.getElementById('post_text1').innerHTML + grand;

abort();

}


//- - - - - - - - - - - - - - - - - - - - - - - - - the display image script


var photo = document.getElementById('result').src;

if(photo == "") {

document.getElementById('result1').style.display = "none";

}else {

document.getElementById('result1').style.display = "block";

}
}


