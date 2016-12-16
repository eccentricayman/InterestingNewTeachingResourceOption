function buttonAction() {
    var list = document.getElementsByTagName("li");
    var index = 0;
    for (i = 0 ; i < list.length ; i++) {
        index = i;
    }
    var li = document.createElement("li");
    var item = document.createTextNode("item " + (index + 1))
    li.appendChild(item);
    document.getElementById("thelist").appendChild(li);
}

button = document.getElementById('b');
button.addEventListener("click", buttonAction);

var listItems = document.getElementsByTagName("li")
for (listItem in ListItems) {
    
}
