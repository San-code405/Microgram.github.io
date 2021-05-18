


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
let img2 = "<img id='' src='" + document.getElementById('result2').src + "' alt='' />";
let img3 = "<img id='' src='" + document.getElementById('result3').src + "' alt='' />";
let img4 = "<img id='' src='" + document.getElementById('result4').src + "' alt='' />";
let img5 = "<img id='' src='" + document.getElementById('result5').src + "' alt='' />";
let img6 = "<img id='' src='" + document.getElementById('result6').src + "' alt='' />";
let img7 = "<img id='' src='" + document.getElementById('result7').src + "' alt='' />";
let img8 = "<img id='' src='" + document.getElementById('result8').src + "' alt='' />";
let img9 = "<img id='' src='" + document.getElementById('result9').src + "' alt='' />";
let img10 = "<img id='' src='" + document.getElementById('result10').src + "' alt=''/>";
let img12 = "<img id='' src='" + document.getElementById('result11').src + "' alt='' />";
let img11 = "<img id='' src='" + document.getElementById('result12').src + "' alt='' />";
let img13 = "<img id='' src='" + document.getElementById('result13').src + "' alt='' />";
let img14 = "<img id='' src='" + document.getElementById('result14').src + "' alt='' />";
let img15 = "<img id='' src='" + document.getElementById('result15').src + "' alt='' />";

var _1 = '<div class="" id="pst_and_pic">';
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
var _12 = '<p>';
var _13 = '<p id="post_text">';
var _14 = _111 + '<img src="' + img1 +'" class="img" alt="" />' + _8;
var _15 = '<button id="">';
var _16 = '</button>';

 var main = _1 + _111 + _3 + _4 + _111 + _5 + _8 + _8 + _6;
var vice = main + _9 + 'Your name' + _10 + _7 + _8 + _11 + _13 + comment + _10 + _14;
var second = _8 + _111 + _15 + 'Like' + _16;

// - - - - - - -  - - -- - - - - - - - - - - -  - - - pictures

  // var one = _2 + img2 + _8 + _2 + img3 + _8 + _2 + img4; 
  //  var one_and_half = _8 + _2 + img5 + _8 + _2 + img6 + _8 + _2 + img7 + _8 + _2;
 // var two = one_and_half + img8 + _8 + _2 + img9 + _8 + _2 + img10 + _8 + _2;
 // var three = img11 + _8 + _2 + img12 + _8 + _2 + img3 + _8 + _2 + img14 + _8 + _2 + img15 + _8;

//- - - - - - - - - - - - - - - - - - - - - - - - - - the end

var finale = _15 + 'Comment' + _16 + _15+ 'Report' +_16 + _8 + _8 + _8;
var grand = vice + one + second + finale;

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


