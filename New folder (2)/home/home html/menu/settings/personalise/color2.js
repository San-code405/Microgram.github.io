function color() {
  document.getElementById('loader').style.display = 'block';
var color=document.getElementById("color").value;
document.getElementById("value").value=color;
document.getElementById("container").style.backgroundColor=color;
var rgb=document.getElementById("container").style.backgroundColor;
document.getElementById("rgb").value=rgb;
document.getElementById("value").style.borderColor=color;
document.getElementById("rgb").style.borderColor=color;
document.getElementById("color").style.borderColor=color;
var main1 = document.getElementById('container');
main1.style.backgroundImage = 'none';
main1.style.backgroundSize = 'cover';
document.getElementById('loader').style.display = 'none';
}

    var text = document.getElementById('value');
    function copy(event) {
    event.preventDefault();
    text.select();
    navigator.vibrate([100,10,100]);
    document.execCommand('copy');
    alert(text.value+' Copied to clip board !');
    }
    var text2 = document.getElementById('rgb');
    function copyrgb(event) {
    event.preventDefault();
    text2.select();

    navigator.vibrate([100,10,100]);
    document.execCommand('copy');
    alert(text2.value+' Copied to clip board !');

    }

    function resertColor(){
      document.getElementById('loader').style.display = 'block';
      document.getElementById("color").value = '#ffffff';
      var color=document.getElementById("color").value;
      document.getElementById("value").value=color;
      document.getElementById("container").style.backgroundColor=color;
      var rgb=document.getElementById("container").style.backgroundColor;
      document.getElementById("rgb").value=rgb;
      document.getElementById("value").style.borderColor=color;
      document.getElementById("rgb").style.borderColor=color;
      document.getElementById("color").style.borderColor=color;
      var main1 = document.getElementById('container');
      main1.style.backgroundImage = 'none';
      main1.style.backgroundSize = 'cover';
      setColor();

      document.getElementById('loader').style.display = 'none';

    }
