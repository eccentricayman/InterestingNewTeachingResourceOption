function buttonAction1() {
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
button1.addEventListener("click", buttonAction1);

var ctr = 0;
var listItems = document.getElementById("thelist").children;
while (ctr < listItems.length) {
    listItems[ctr].addEventListener("mouseover", changeTitle);
    listItems[ctr].addEventListener("mouseout", changeTitleBack);
    ctr++;
}

var fib = function(i) {
  var a = 1; var b = 0; var temp = 0;

  for(; i > 0; i--) {
    temp = a;
    a = a + b;
    b = temp;
  }

  return temp;
}

function buttonAction2() {
    var list = document.getElementById("ol-ibonacci").children;
    var li = document.createElement("li");
    li.innerHTML = fib(list.length+1);

    document.getElementById("ol-ibonacci").appendChild(li);
}

button2 = document.getElementById('b-ibonacci');
button2.addEventListener("click", buttonAction2);
