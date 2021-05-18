
//-- TODO: add Time to the next send function -->

// - - - - - - - - - - - -- - - - - - - - - - - - - - - oninput replacement - - - - - - - - - -- - -

function diss() {

  document.getElementById("draft").style.display = "block";

  var comments = document.getElementById('write_a_comment').value;
  var comment = comments
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/}/g, "&#125;")
  .replace(/{/g, "&#123;")
  .replace(/ /g, "&#32;")
  .replace(/¢/g, "&#162;")
  .replace(/€/g, "&#8364;")
  .replace(/¥/g, "&#165;")
  .replace(/:/g, "&#58;")
  .replace(/"/g, "&#34")
  .replace(/'/g, "&#39;")
  .replace(/=/g, "&#61;")
  .replace(/%/g, "&#37;")
  .replace(/÷/g, "&#247;")
  .replace(/£/g, "&#163;")
  .replace(/’/g, "&#8217;")
  .replace(/‘/g, "&#8216;")
  .replace(/“/g, "&#8220;")
  .replace(/”/g, "&#8221;")
  //.replace(//g, "")
  ;

  document.getElementById('pree').innerHTML = comment;

}

//- - - - - - - - - - - - - - - - - - - - - - - - - when you post (send) script - - - - - - - - -



function send() {

var comment=document.getElementById('write_a_comment').value;

//encodeURLcomponent(comment);
if(comment == ' ' || comment == '  ' || comment == '   ' || comment == '    ' || comment == '     ' || comment == '      ' || comment == '       ' || comment == '        ' || comment == '         ' || comment == '          '){

  abort();

}else{

  var comment=document.getElementById('write_a_comment').value;

if(comment == '') {

  call2();

}else {

document.getElementById("draft").style.display = "none";

var comments = document.getElementById('pree').innerHTML;
var comment = comments
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
.replace(/}/g, "&#125;")
.replace(/{/g, "&#123;")
.replace(/ /g, "&#32;")
.replace(/¢/g, "&#162;")
.replace(/€/g, "&#8364;")
.replace(/¥/g, "&#165;")
.replace(/:/g, "&#58;")
.replace(/"/g, "&#34")
.replace(/'/g, "&#39;")
.replace(/=/g, "&#61;")
.replace(/%/g, "&#37;")
.replace(/÷/g, "&#247;")
.replace(/£/g, "&#163;")
.replace(/’/g, "&#8217;")
.replace(/‘/g, "&#8216;")
.replace(/“/g, "&#8220;")
.replace(/”/g, "&#8221;")
//.replace(//g, "")
;


var t = new Date();
var hour = t.getHours();
var mun = t.getMinutes();
var d = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var month = month[d.getMonth()];

var date = t.getDate();
var year = t.getFullYear();
var minute = mun.toString().padStart(2, "0");
const isAm = t.getHours() < 12;
var amPm = t.isAm ? "AM" : "PM";


var dov = document.getElementById('id').innerHTML+='+1';
var identities = document.getElementById('id').innerHTML = eval(dov);

var dovlike = document.getElementById('id2').innerHTML+='+1';
var identities2 = document.getElementById('id2').innerHTML = eval(dovlike);

var dovcomment = document.getElementById('id3').innerHTML+='+1';
var identities3 = document.getElementById('id3').innerHTML = eval(dovcomment);

var comment1 = '.replace(/</g, "&lt;")';

var _1 = '<div id="git' + identities + 'a">';
var _111 = '<div>';
var _2 = '<div id="p_i_cture">';
var _3 = '<div id="all">';
var _4 = '<div class="prsn_prof" id="">';
var _5 = '<img src="' + 'picture source' +'" id="prsn_pic" alt="" />';
var _6 = '<span id="">';
var _7 = '</span>';
var _8 = '</div>';
var _9 = '<p>';
var _10 = '</p>';
var _11 = '<div id="display_pst">';
var _12 = '<p id="f">';
var _13 = '<p class="post_text">';
//var _14 = _111 + '<img src="' + img1 +'" class="img" alt="" />' + _8;
var _15 = '<a href="help/report.html" id="">';
var live = "document.getElementById('gitClone_y" + identities2 + "a').innerHTML+= '+1'";
var com = "document.getElementById('gitget_y" + identities3 + "a').innerHTML+= '+1'";
var _1556 = "document.getElementById('gitget_y" + identities3 + "a').innerHTML = eval(" + com + "); document.getElementById('gitClone_y_" + identities2 + "textarea').value = '';";
var _1555 = "document.getElementById('gitClone_y" + identities2 + "a').innerHTML = eval(" + live + "); document.getElementById('sma').style.fill = '#ff0000'";
var _15551 = "document.getElementById('gitClone_y_" + identities2 + "a').style.display = 'block'; document.getElementById('git" + identities + "a').style.display = 'none';";
var _155 = '<a class="like" onclick="' + _1555 + '">';
var _1554 = "document.getElementById('gitClone_y_" + identities2 + "a').style.display = 'none';";
var _1544 = "document.getElementById('gitClone_y_" + identities2 + "a').style.display = 'block';";
var _166 = '<a class="commentes" onclick="' + _1544 + '" >';
var _16 = '</a>';
var _177 = "if(confirm('are you sure you want to delete this post') == true){document.getElementById('post_text1').removeChild(document.getElementById('git" + identities + "a'))}";
var _17 = '<a onclick="' + _177 + '">';
var _18 = '<table>';
var _19 = '</table>';
var _20 = '<tr>';
var _21 = '</tr>';
var _22 = '<th>';
var _23 = '</th>';
var _24 = '<?xml version="1.0" encoding="iso-8859-1"?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;fill:ffffff;" xml:space="preserve" height="40px" width="auto" ><g fill="none" id="sma">	<g class="sma" stroke="#000000" stroke-width="40">		<path d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268			c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514		 c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482			s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514			C512,93.417,453.532,30,376,30z" style="fill:ffffff;"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

var s1 = '<div id="gitClone_y_' + identities2 + 'a" class="comment"';
var s2 = '</div>';
var s3 = '<div>';
var com = '<div class="tata">';
var comcom = '<div class="inside">';
var variadles = "var t = new Date();var hour = t.getHours();var mun = t.getMinutes();var d = new Date();var month = new Array(); month[0] = 'January';month[1] = 'February';month[2] = 'March';month[3] = 'April';month[4] = 'May';month[5] = 'June';month[6] = 'July';month[7] = 'August';month[8] = 'September';month[9] = 'October';month[10] = 'November';month[11] = 'December';var month = month[d.getMonth()];var date = t.getDate();var year = t.getFullYear();var minute = mun.toString().padStart(2, '0');const isAm = t.getHours() < 12;var amPm = t.isAm ? 'AM' : 'PM';";
var yeah = "var commar = document.getElementById('gitClone_y_" + identities2 + "textarea').value; var donut = commar;";
var commenta = variadles + yeah + "if(commar == '' || commar == ' ' || commar == '  ' || commar == '   ' || commar == '    ' || commar == '     ' || commar == '      ' || commar == '       ' || commar == '        ' || commar == '         ' || commar == '          '){}else{document.getElementById('gitClone_y_" + identities2 + "commentBox_A').innerHTML+= '<div><span></span><div><p>' + donut + '</p><p>' + date + ' ' + month + ' ' + year + ' ' + hour + ':' + minute + ' ' + amPm + '</p>' + '</div></div>'; " + _1556 + "}";
var s4 = '<textarea class="commentText" id="gitClone_y_' + identities2 + 'textarea" placeholder="Please write your comment here."></textarea>';
var s5 = '<a class="cool" onclick="' + commenta + '" >Comment</a><a class="cool" onclick="' + _1554 + '">Done</a>';
var s6 = '<div class="textarea">';
var s7 = '<div id="gitClone_y_' + identities2 + 'commentBox_A" class="commentDisplay"';

var next = s1 + '<h3>Comments<h3>' + s6 + s4 + s5 + s2 + s7 + s2 + s2 + s2;

 var main = _1 + '<div class="pst_and_pic">' + _12 + _111 + _3 + _18 + _20 + _22 + _4 + _5 + _23 + _22 + _6;
var vice = main + _9 + 'Your name' + _10 + _7 + _23 + _21 + _19 + _8 + _11 + _13 + comment + '</p>' + document.getElementById('resultant').innerHTML  + "<i class='time'>" + date + " " + month + " " + year + " " + hour + ":" + minute + " " + amPm + "</i>";
var second = _8 + _111 + _155 + '<i id="gitClone_y' + identities2 + 'a">0</i> ' + 'Likes' + _16;

var finale = _166 + '<i id="gitget_y' + identities3 + 'a">0</i> ' + 'Comments' + _16 + _15 + '<i></i>' + 'Report' +_16 + _17;

var six = finale + '<i></i>' + 'Delete';


var sev = six +_16 + _8 + _8 + _8;
var grand = vice + second + sev + next + _8;

document.getElementById('post_text1').innerHTML = grand + document.getElementById('post_text1').innerHTML;

abort();

}
}
//- - - - - - - - - - - - - - - - - - - - - - - - - the display image script


var photo = document.getElementById('result').src;

if(photo == "") {

document.getElementById('result1').style.display = "none";

}else {

document.getElementById('result1').style.display = "block";

}
}
