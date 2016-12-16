function buttonAction() {
    var list = document.getElementById("thelist").children;
    var li = document.createElement("li");
    var item = document.createTextNode("item " + list.length);
    li.appendChild(item);
    document.getElementById("thelist").appendChild(li);
}

function changeTitle() {
    document.getElementById("h").innerHTML = this.innerHTML;
}

function changeTitleBack() {
    document.getElementById("h").innerHTML = "Hello World!";
}

button = document.getElementById('b');
button.addEventListener("click", buttonAction);

var listItems = document.getElementsByTagName("li");
var ctr = 0;
while (ctr < listItems.length) {
    listItems[ctr].addEventListener("mouseover", changeTitle);
    listItems[ctr].addEventListener("mouseout", changeTitleBack);
    ctr++;
}

var fib = function(i) {
  var a = 0; var b = 0; var temp;

  for(; i >= 0; i--) {
    temp = a + b;
    a = a + b;
    b = temp;
  }

  return temp;
}
