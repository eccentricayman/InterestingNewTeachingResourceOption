//First Part
function buttonAction1() {
    var list = document.getElementById("thelist").children;
    var li = document.createElement("li");
    li.innerHTML = "item " + list.length;
    document.getElementById("thelist").appendChild(li);

    li.addEventListener("mouseover", changeTitle); //adds event listener to newly created node
    li.addEventListener("mouseout", changeTitleBack);
    li.addEventListener("click", function(e) { this.remove(); } );
}

function changeTitle() {
    document.getElementById("h").innerHTML = this.innerHTML;
}

function changeTitleBack() {
    document.getElementById("h").innerHTML = "Hello World!";
}

button1 = document.getElementById('b');
button1.addEventListener("click", buttonAction1);

var ctr = 0;
var listItems = document.getElementById("thelist").children;
while (ctr < listItems.length) {
    listItems[ctr].addEventListener("mouseover", changeTitle);
    listItems[ctr].addEventListener("mouseout", changeTitleBack);
    listItems[ctr].addEventListener("click", function(e) { this.remove(); } );
    ctr++;
}

//Second Part
var fib = function(i) { //fibonaci
  var a = 2; var b = 1; var temp = 1;

  for(; i > 1; i--) {
    temp = a;
    a = a + b;
    b = temp;
  }

  return temp;
}

function buttonAction2() {
    var list = document.getElementById("ol-ibonacci").children;
    var li = document.createElement("li");
    li.innerHTML = fib(list.length);

    document.getElementById("ol-ibonacci").appendChild(li);
}

button2 = document.getElementById('b-ibonacci');
button2.addEventListener("click", buttonAction2);
