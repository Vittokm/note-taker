var i = 1;
function add() {
    var txt = document.getElementById("txt");
    var saves = document.querySelector("#noteSaved");
    var note = document.createElement("DIV");
    var noteTxt = document.createElement("P");
    var saveTit = document.createElement("H3");
    var viewButton = document.createElement("BUTTON");
    saves.appendChild(note);
    note.appendChild(saveTit);  
    note.appendChild(noteTxt);
    note.appendChild(viewButton);
    viewButton.innerHTML = "View Note";
    viewButton.setAttribute("onclick", "seeNote()");

    saveTit.innerHTML = "Note " + i;
    noteTxt.innerHTML = txt.value;
    txt.value = "";
    i++
}

function seeNote() {
    alert("BAMMM!"); 
}