let i = 1;

function add() {

    let txt = document.getElementById("txt");
    let saves = document.querySelector("#noteSaved");
    let note = document.createElement("DIV");
    let saveTit = document.createElement("H3");
    let noteTxt = document.createElement("P");
    var viewButton = document.createElement("BUTTON");
    saves.appendChild(note);
    note.appendChild(saveTit);  
    note.appendChild(noteTxt);
    note.appendChild(viewButton);
    viewButton.innerHTML = "View Note";
    viewButton.setAttribute("onclick", "seeNote(this)");
    saveTit.innerHTML = "Note " + i;
    noteTxt.innerHTML = txt.value;
    txt.value = "";
    i++

}

function seeNote(x) {

    let par = x.parentElement.querySelector("P");
    let darkLayer = document.querySelector("#main");
    let notes = document.querySelector("#notes");

    darkLayer.style.cssText = "background-color: rgba(0, 0, 0, 0.6); transition: all 1s ease-in;";
    par.style.cssText = "position: static; top: 30%; left: 70%; overflow: visible; height: auto; transform: scale(2); transition: all 1s ease-in; background-color: #EEE; box-shadow: 0px 0px 20px #FFF";

    notes.querySelector("TEXTAREA").style.backgroundColor = "#555";
    
}

function clean() {
    
    
}