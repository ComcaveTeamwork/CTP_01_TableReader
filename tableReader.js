
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
    
    persons.push({
       firstName: "Sabiha",
       lastName: "Goekcen"
    });
    
    persons.push({
        firstName: "Cahit"
        lastName: "Arf"
    
    });

}


// Simple Ausgabe in die Konsole.
function printToConsole(outputStr) {
    console.log(outputStr);
}
