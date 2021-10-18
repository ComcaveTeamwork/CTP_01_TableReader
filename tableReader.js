
"use strict";

// Variablen, die zwischengespeichert werden um hier im Script damit arbeiten zu können.
let persons = [];
const dispBtn1 = document.getElementById("dispBtn1");
const ul1 = document.getElementById("ul1");

var dispBtn2 = document.getElementById("dispBtn2");
var file = document.getElementById("file");
const ol1 = document.getElementById("ol1");
// let stg_url;
let personString;
var file_type;


var file_type;
//guard
var tableCreated = false;
// --------------------------------------------------------------------------------------

// Die eigentlichen Funktionsaufrufe!
dispBtn1.addEventListener("click", showList);
pushNames();
personstoStg();


readDataFromFile("Liste.md");


// --------------------------------------------------------------------------------------

//Implementing file upload function and displaying filename in the console

dispBtn2.addEventListener("click", load_File);
file.addEventListener("change", printFileLocation);
// Implementierungen der einzelnen Funktionen.
// Load_file Function
function load_File(){
    document.getElementById("file").click();
}

function printFileLocation() {
    if (this.files && this.files[0]) {
        printToConsole(this.files[0].name);
        }
}

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
// Funktion in Bearbeitung!
function pushName(fName, lName, locaName) {
    persons.push({
        firstName: fName,
        lastName: lName,
        location: locaName
    });
    }
    
  
function pushNames (){

    pushName("Anton","Mustermann", "Duesseldorf");
    pushName("Moritz","Mustermann", "Duisburg");
    pushName("Berta","Bertelsmann", "Bielefeld");
    pushName("Julius","Cäsar", "Rom");
    pushName("Sabiha","Goekcen", "Side"); // added new names
    pushName("Cahit","Arf", "Istanbul");
}

// Adding a new function to convert Persons array in to string variable

 function personstoStg() {
    
    personString = "firstname" + "    | "+"lastname"+"\n"+"---------" + "    | "+"---------"+"\n";
    
     for (let i=0; i < persons.length ; i++)
     {
    let len = persons[i].firstName.length;
    if (len < 9);
        {
            let addspc = 9 - len;
           for(let e= 0; e < addspc ; e++) 
           {
            persons[i].firstName = persons[i].firstName + " ";
           }
            
        }
    personString = personString + persons[i].firstName + "    | " + persons[i].lastName;
    if ((i< persons.length -1))
     personString = personString + "\n";

     }
     // printing the value in to console
         printToConsole(personString);
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

        if (request.status >= 200 & request.status < 300)
        {
        let responseStrg = request.responseText;
        printToConsole(stringToArray(responseStrg));
        }
        else console.warn(request.statusText, request.responseText);
        
    });

    request.send();
}





// wandelt einen String in ein Array aus Strings um
function stringToArray(strgParam) {
    let strgArray = strgParam.split('\n');
    strgArray.splice(1,1);
    return strgArray;
}



//diese Funktion liest eine Datei ein mit Hilfe der Files API ein
document.getElementById('file').onchange = function () {

    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {

        let responseStrg = this.result;
        printToConsole(stringToArray(responseStrg));

       };
    reader.readAsText(file);
   
};
//funktion erstellt tabelle mit persons array bei click auf dispBtn5
function create_table (){

    // guard verhindert das mehrfache erstellen von tabellen
    if (tableCreated) return;

    //body tl und tbody für tabellen erstellt 
    var documentBody = document.body;
    var table = document.createElement("tl");
    var tableBody = document.createElement("tbody");
  

    // loop zum erstellen von row und cell in der tabelle und befüllen mit persons array
    for (let i = 0; i < persons.length; i++){
  
        var row = document.createElement("tr");
  
        var firstNameCell = document.createElement("td");
        var firstNameCellData = document.createTextNode(persons[i].firstName);
        firstNameCell.appendChild(firstNameCellData);
  
        var lastNameCell = document.createElement("td");
        var lastNameCellData = document.createTextNode(persons[i].lastName);
        lastNameCell.appendChild(lastNameCellData);
  
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
  
        tableBody.appendChild(row);
  
    }
  
    table.appendChild(tableBody);
    documentBody.appendChild(table);
    //guard
    tableCreated = true;
  
  }