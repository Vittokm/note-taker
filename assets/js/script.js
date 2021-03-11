let i = 1;

function add() {

    let txt = document.getElementById("txt");
    let saves = document.querySelector("#noteSaved");
    let note = document.createElement("DIV");
    let saveTit = document.createElement("H3");
    let noteTxt = document.createElement("P");
    let viewButton = document.createElement("BUTTON");
    saves.appendChild(note);
    note.appendChild(saveTit);  
    note.appendChild(noteTxt);
    note.appendChild(viewButton);
    viewButton.innerHTML = "View Note";
    viewButton.setAttribute("onclick", "seeNote('this')");
    saveTit.innerHTML = "Note " + i;
    noteTxt.innerHTML = txt.value;
    txt.value = "";
    i++

}

function seeNote() {

    let txt = document.querySelector("#noteSaved"); 
    let pZoom = txt.querySelector("P");
    let darkLayer = document.querySelector("#main");

    let notes = document.querySelector("LABEL");
    let btn = document.querySelectorAll("BUTTON");
    
    

    darkLayer.style.cssText = "background-color: rgba(0, 0, 0, 0.6); transition: all 1s ease-in;";
    pZoom.style.cssText = "overflow: visible; height: auto; transform: scale(2.5); transition: all 1s ease-in; text-shadow: 0px 0px 20px #FFF";
    
    notes.querySelector("TEXTAREA").style.backgroundColor = "#555";
    btn.style.display = "none";
}