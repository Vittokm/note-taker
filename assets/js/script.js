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
    viewButton.setAttribute("onclick", "seeNote()");
    saveTit.innerHTML = "Note " + i;
    noteTxt.innerHTML = txt.value;
    txt.value = "";
    i++

}

function seeNote(x) {
        
    let saves = document.querySelector("#noteSaved");
    let darkLayer = document.querySelector("#main");
    let notes = document.querySelector("LABEL");
    

    darkLayer.style.cssText = "background-color: rgba(0, 0, 0, 0.6); transition: all 1s ease-in;";
    saves.querySelector("P").style.cssText = "overflow: visible; height: auto; transform: scale(2.5); transition: all 1s ease-in; text-shadow: 0px 0px 20px #FFF";
    
    notes.querySelector("TEXTAREA").style.backgroundColor = "#555"; 
    
}