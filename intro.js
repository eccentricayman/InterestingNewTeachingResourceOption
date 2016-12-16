function buttonAction() {
    var list = document.getElementsByTagName("li");
    var li = document.createElement("li");
    var item = document.createTextNode("item " + list.length)
    li.appendChild(item);
    document.getElementById("thelist").appendChild(li);
}

button = document.getElementById('b');
button.addEventListener("click", buttonAction);

var listItems = document.getElementsByTagName("li")
for (listItem in ListItems) {

}
