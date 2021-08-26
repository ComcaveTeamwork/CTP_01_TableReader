
// tableReader.js - Letze Änderung: Maurice König

"use strict";

// Variablen, die zwischengespeichert werden um hier im Script damit arbeiten zu können.
let persons = [];
const dispBtn1 = document.getElementById("dispBtn1");
const ul1 = document.getElementById("ul1"); 

// --------------------------------------------------------------------------------------

// Die eigentlichen Funktionsaufrufe!
dispBtn1.addEventListener("click", showList);
pushNames();
printToConsole(persons);
readDataFromList("Liste.md");

// --------------------------------------------------------------------------------------


// Implementierungen der einzelnen Funktionen.


// showList: Namen aus dem "persons"-Array der oben deklariert wurde, werden als Listenelemente einem anderen Listenelement untergeordnet und deren Text wird gleichgesetzt
// mit dem Namen der Person an Index i.
function showList() {

    for (let i = 0; i < persons.length; i++){

        let newListElement = document.createElement("li");
        newListElement.innerText = persons[i].firstName + " " + persons[i].lastName;
        ul1.appendChild(newListElement);
    }
}

// pushNames: Es werden Objekte mit zwei internen Variablen "firstName" und "lastName" erstellt. Die Wertzuweisungen erfolgen ebenfalls auf direktem Wege. Danach werden die
// Objekte in das Array "persons" gepusht.
function pushNames (){

    const person = {
        firstName: "Anton",
        lastName: "Mustermann"
    }
    
    persons.push(person);
    
    persons.push({
        firstName: "Moritz",
        lastName: "Mustermann"
    });
    
    persons.push({
        firstName: "Berta",
        lastName: "Bertelsmann"
    });
  
  persons.push({
    firstName: "Julius",
    lastName: "Cäsar"
});
  
}


// Simple Ausgabe in die Konsole.
function printToConsole(outputStr) {
    console.log(outputStr);
}

// readDataFromList: Über die Fetch-Methode kann man einen HTTP-Request stellen.
// Im Grunde möchte diese Funktion also nur mit der Datei "Liste.md" kommunizieren,
// die sich ebenfalls in unserem lokalen Verzeichnis, beziehungsweise auf
// unserem lokalen Server befindet. Dann wird der Body des Responses in eine
// Text-Repräsentation umgewandelt und in die Konsole ausgegeben.
// Der "path"-Parameter kann einen beliebigen Pfad wie z.B "AndereListe.md" entgegen
// nehmen, was das gleiche Resultat hervorbringen würde, sofern die Datei gegeben ist.

function readDataFromList (path){

    var data = fetch(path).
    then(data => data.text()).
    then(data => console.log(data));
}
