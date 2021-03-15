let i = 1;


function add() {
    let vazio = "";
    let txt = document.getElementById("txt");
    let saves = document.querySelector("#noteSaved");
    let note = document.createElement("DIV");
    let saveTit = document.createElement("H3");
    let noteTxt = document.createElement("P");
    let viewButton = document.createElement("BUTTON");

    if (txt.value == vazio) {
        alert("No text found!")
    } else {
    saves.appendChild(note);
    note.appendChild(saveTit);  
    note.appendChild(noteTxt);
    note.appendChild(viewButton);
    viewButton.innerHTML = "View Note";
    viewButton.setAttribute("onclick", "seeNote(this)");
    saveTit.innerHTML = "Note " + i;
    noteTxt.innerHTML = txt.value;
    txt.value = "";
    i++}

}

function seeNote(botao) {

    let par = botao.previousSibling;
    par.setAttribute("onclick", "clean(this)");
    let darkLayer = document.querySelector("#main");
    let notes = document.querySelector("#notes");
    
    darkLayer.style.cssText = "background-color: rgba(0, 0, 0, 0.6); transition: all 1s ease-in;";
    par.style.cssText = "position: absolute; z-index: 99; border-radius: 20px; padding: 15px; max-width: 400px; white-space: normal; text-overflow: clip; background-color: #EEE; box-shadow: 0px 0px 20px #FFF; transform: scale(2); transition: all 2s ease-in-out;";
    notes.querySelector("TEXTAREA").style.cssText = "background-color: #555; transition: all 2s ease-in-out;";

    
}



function clean(par) {

    let notes = document.querySelector("#notes");
    let darkLayer = document.querySelector("#main");

    par.style.cssText = "position: retative; z-index: 0; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; transform: scale(1); transition: all 1s ease-in-out; background-color: #CCC; box-shadow: 0px 0px 0px #CCC;";
    darkLayer.style.cssText = "transition: all 2s ease-in-out; background-color: #CCC; box-shadow: 0px 0px 0px #CCC;";
    notes.querySelector("TEXTAREA").style.cssText = "background-color: #FFF; transition: all 2s ease-in-out;";
}
