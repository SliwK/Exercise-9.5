var btnElements = document.getElementsByClassName('button');
var length = btnElements.length;

//console.log(btnElements);
//console.log(length);

for(i = 0; i < length; i++) {
  console.log(btnElements[i].innerText);
}

//dodanie dodatkowej nazwy klasy do istniejącej nazwy
var btn1 = document.getElementById("btn1");
btn1.className += ' btn1';
console.log('Button 1 - added class - now:' +btn1.className);

// usunięcie klasy
function delClass() {
   var classToRemove = document.getElementById("btn2");
   btn2.classList.remove("button");
}
delClass();
console.log('Button 2 -removed class' +btn2.className);

//zmiana treści w przycisku

var btnName = document.getElementById("btn3");
document.getElementById("btn3").innerHTML = "Aloha";

console.log('Button 3 - name changed to: ' +btnName.innerHTML);

//ukrycie przycisku - Hallo!
var btnHide = document.getElementById('btn4');
btnHide.style.visibility = 'hidden';

console.log('Button 4 hidden');

//usunięcie przycisku
var btn6 = document.getElementById('btn6');
btn6.parentNode.removeChild(btn6);

console.log('Button 6 was removed');

//dodanie atrybutu html
var btn5 = document.getElementById('btn5');
btn5.setAttribute('data-test','tested');

console.log('button 5 - added attribute : ' + btn5.getAttribute('data-test'));
