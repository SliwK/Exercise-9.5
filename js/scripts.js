var btnElements = document.getElementsByClassName('button');
var length = btnElements.length;

//console.log(btnElements);
//console.log(length);

for(i = 0; i < length; i++) {
  console.log(btnElements[i].innerText);
}
