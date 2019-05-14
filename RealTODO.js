
function todoList() {

  var item = document.getElementById("myInput").value;
  var task = document.createTextNode(item)
  var newItem = document.createElement("ul")
  newItem.appendChild(task)
  document.getElementById("listofTasks").appendChild(newItem)

  var day = document.getElementById("Daystocomplete").value="\n\nDay(s)";
  var complete = document.createTextNode(day)

  newItem.appendChild(complete)
  document.getElementById("listofTasks").appendChild(newItem)
}


object.onmouseover = function(){myScript};
object.addEventListener("mouseover", myScript);
