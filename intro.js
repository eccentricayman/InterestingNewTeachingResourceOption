function buttonAction() {
    var list = document.getElementById("thelist").children;
    var li = document.createElement("li");
    li.innerHTML = "item " + list.length;
    document.getElementById("thelist").appendChild(li);

    li.addEventListener("mouseover", changeTitle);
    li.addEventListener("mouseout", changeTitleBack);
}

function changeTitle() {
    document.getElementById("h").innerHTML = this.innerHTML;
}

function changeTitleBack() {
    document.getElementById("h").innerHTML = "Hello World!";
}

function updateListlength() {
  return document.getElementById("thelist").children.length;
}

button1 = document.getElementById('b');
button1.addEventListener("click", buttonAction);

var ctr = 0;
var list = document.getElementById("thelist").children;
while (ctr < list.length) {
    listItems[ctr].addEventListener("mouseover", changeTitle);
    listItems[ctr].addEventListener("mouseout", changeTitleBack);
    ctr++;
}

var fib = function(i) {
  var a = 1; var b = 0; var temp;

  for(; i >= 0; i--) {
    temp = a + b;
    a = a + b;
    b = temp;
  }

  return temp;
}

var list = document.getElementById("ol-ibonacci").children;
button2 = document.getElementById('b-ibonacci');
button2.addEventListener("click", fib(list.length));
