
"use strict";

// Variablen, die zwischengespeichert werden um hier im Script damit arbeiten zu können.
let persons = [];
const pseudoConsole = document.getElementById("pseudo-console");
// Listen-Elemente
const ul1 = document.getElementById("ul1");
const ol1 = document.getElementById("ol1");

// Buttons
const dispBtn1 = document.getElementById("dispBtn1");
const dispBtn5 = document.getElementById("dispBtn5"); // display table button
const reloadButton = document.getElementById("reload-button");

// Table1 related data
const table1 = document.getElementById("table1");
const table1Body = document.getElementById("table1body");
const table1Header1 = document.getElementById("table1Header1");
const table1Header2 = document.getElementById("table1Header2");
const table1Header1Value = "Vorname";
const table1Header2Value = "Nachname";

// --------------------------------------------------------------------------------------

// Die eigentlichen Funktionsaufrufe!

// EventListener laden
dispBtn5.addEventListener("click", displayTables);
dispBtn1.addEventListener("click", showList);
reloadButton.addEventListener("click", reloadPage);


pushNames();
printToConsole(persons);
readDataFromFile("Liste.md");

// --------------------------------------------------------------------------------------


// Implementierungen der einzelnen Funktionen.


// showList: Namen aus dem "persons"-Array der oben deklariert wurde, werden als Listenelemente einem anderen Listenelement untergeordnet und deren Text wird gleichgesetzt
// mit dem Namen der Person an Index i.
function showList() {

    for (let i = 0; i < persons.length; i++){

        let newOrderedListElement = document.createElement("li");
        let newUnorderedListElement = document.createElement("li");

        newOrderedListElement.innerText = persons[i].firstName + " " + persons[i].lastName;
        newUnorderedListElement.innerText = persons[i].firstName + " " + persons[i].lastName;

        ol1.appendChild(newOrderedListElement);
        ul1.appendChild(newUnorderedListElement);
    }
    
    document.getElementById('dispBtn1').disabled = true;
}

// pushNames: Es werden Objekte mit zwei internen Variablen "firstName" und "lastName" erstellt. Die Wertzuweisungen erfolgen ebenfalls auf direktem Wege. Danach werden die
// Objekte in das Array "persons" gepusht.
// Adding Indu-Pushfunction.

function pushName(fName, lName) {

    persons.push({
        firstName: fName,
        lastName: lName
    });

    }

function pushNames (){

    pushName("Anton","Mustermann");
    pushName("Moritz","Mustermann");
    pushName("Berta","Bertelsmann");
    pushName("Julius","Cäsar");
    pushName("Sabiha","Goekcen"); // added new names
    pushName("Cahit","Arf");
}

// Simple Ausgabe in die Konsole.
function printToConsole(outputStr) {

    console.log(outputStr);
}

// siehe PR-Beschreibung
// PR link: https://github.com/ComcaveTeamwork/CTP_01_TableReader/pull/44
// Wiki Artikel: https://github.com/ComcaveTeamwork/CTP_01_TableReader/wiki/XMLHttpRequest
function readDataFromFile (path)
{
    var request = new XMLHttpRequest();
    request.open("GET", path);
    request.addEventListener("load", function (event){

        if (request.status >= 200 & request.status < 300){

            console.log(request.responseText);
        }

        else console.warn(request.statusText, request.responseText);

    });

    request.send();
}

function displayTables (){

    if (table1Body.children.length == persons.length) return;

    table1Header1.innerText = table1Header1Value;
    table1Header2.innerText = table1Header2Value;

    for (let i = 0; i < persons.length; i++){
        
        var newRow = createElement("tr");
        var firstColumn = createElement("td");
        firstColumn.innerText = persons[i].firstName;
        var secondColumn = createElement("td");
        secondColumn.innerText = persons[i].lastName;
        newRow.appendChild(firstColumn);
        newRow.appendChild(secondColumn);
        table1Body.appendChild(newRow);
    }
}


function createElement (name){

    return document.createElement(name);
}

function reloadPage ()
{
    window.document.location.reload();
}

