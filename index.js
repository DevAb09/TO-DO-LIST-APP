const inputbox = document.getElementById ("input-box")
const listcontainer = document.getElementById ("list-container")

function addTask( ) {
    if(inputbox.value === ""){
        alert("You Must Write something");
    }
    else {
      let li = document.createElement('li');
      li.innerHTML = inputbox.value;
      listcontainer.appendChild(li);
      let span = document.createElement ("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);

    }
    inputbox.value=''
    saveData ()
}



listcontainer.addEventListener ("click", function(m) {
    if (m.target.tagName === "LI") {
        m.target.classList.toggle("checked");
        saveData ()
    }
    else if (m.target.tagName === "SPAN") {
        m.target.parentElement.remove();
        saveData ()
    }
}, false);




function saveData () {
    localStorage.setItem("myTask", listcontainer.innerHTML)

}



function showList (){
    listcontainer.innerHTML = localStorage.getItem("myTask")
}

showList ()



// function clearData () {
//     localStorage.clear()
// }

// clearData ()











































































































