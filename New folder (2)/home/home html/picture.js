
//- - - - - - - - - - - - - - - - - - - - - - - - - when you choose a picture script
// WARNING: copyright 2018. Any distribution, editing or unauthorised use is strictly prohibited

save = function() {
navigator.vibrate([100,10,100]);
var src = document.getElementById('result').src;
document.getElementById('link').href = src;
}

function readFile() {
var reader = new FileReader();
var file = document.getElementById('demo').files[0];
reader.onload = function(e) {

if(document.getElementById('result2').alt == ''){

document.getElementById('result2').src = e.target.result;
document.getElementById('result2').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result2_" src="' + e.target.result + '" draggable="false"/></center>';
}else {

if(document.getElementById('result3').alt == ''){

document.getElementById('result3').src = e.target.result;
document.getElementById('result3').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result3_" src="' + e.target.result + '" draggable="false"/></center>';
}else {

if(document.getElementById('result4').alt == ''){

document.getElementById('result4').src = e.target.result;
document.getElementById('result4').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result4_" src="' + e.target.result + '" draggable="false"/></center>';
}else {

if(document.getElementById('result5').alt == ''){

document.getElementById('result5').src = e.target.result;
document.getElementById('result5').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result5_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result6').alt == ''){

document.getElementById('result6').src = e.target.result;
document.getElementById('result6').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result6_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result7').alt == ''){

document.getElementById('result7').src = e.target.result;
document.getElementById('result7').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result7_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result8').alt == ''){

document.getElementById('result8').src = e.target.result;
document.getElementById('result8').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result8_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result9').alt == ''){

document.getElementById('result9').src = e.target.result;
document.getElementById('result9').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result9_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result10').alt == ''){

document.getElementById('result10').src = e.target.result;
document.getElementById('result10').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result10_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result11').alt == ''){

document.getElementById('result11').src = e.target.result;
document.getElementById('result11').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result11_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result12').alt == ''){

document.getElementById('result12').src = e.target.result;
document.getElementById('result12').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result12_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result13').alt == ''){

document.getElementById('result13').src = e.target.result;
document.getElementById('result13').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result13_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result14').alt == ''){

document.getElementById('result14').src = e.target.result;
document.getElementById('result14').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result14_" src="' + e.target.result + '" draggable="false"/></center>';

}else {

if(document.getElementById('result15').alt == ''){

document.getElementById('result15').src = e.target.result;
document.getElementById('result15').alt = "sorry you can't see this picture at the moment";
document.getElementById('resultant').innerHTML+= '<center><img id="result15_" src="' + e.target.result + '" draggable="false"/></center>';

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

reader.readAsDataURL(file);

document.getElementById("display_pst").style.display = "block";
}

chooseFile = function() {
navigator.vibrate([100,10,100]);
document.getElementById('demo').click();

}
