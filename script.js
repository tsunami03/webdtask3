console.log("Hello World")
let add = document.querySelector(".add_button");
let note_title = document.getElementById("title");
let note_text = document.getElementById("input");
let container = document.querySelector(".container");


add.addEventListener("click", ()=> {
    if (note_title.value==`` && note_text.value==``){
        alert("Note Blank!")
    }
    else{
        addNotes()
    }
    
    note_title.value = ``;
    note_text.value = ``;
})

function addNotes(){

    let titleVal = note_title.value;
    let inputVal = note_text.value;

    let new_card = document.createElement("div");
    new_card.classList.add("saved_card");
    new_card.innerHTML=`
    <p class="note_title"><b>${titleVal}</b></p>
    <br>
    <p class="note_text"> ${inputVal}</p>
    <button class = "delete_button">&#x1f5d1;</button>`;

    container.appendChild(new_card);
    titleVal = "";
    inputVal = "";

    del = new_card.querySelector(".delete_button");
    
    del.addEventListener("click", ()=> new_card.remove());


}
