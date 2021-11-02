
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

// Adding a new function to convert Persons array in to string variable

 function personstoStg() {
    
    
    personString = "";
    
     for (let i=0; i < persons.length ; i++)
     {
    let len = persons[i].firstName.length;
    if (i==0) {
        let titleSpaces = longestString() - 8;
        personString = personString + printableName("Vorname ", "Nachname", titleSpaces);
        personString = personString + printableName("--------", "--------", titleSpaces);
    }
    let addspc = longestString() - len;
    personString = personString + printableName(persons[i].firstName, persons[i].lastName, addspc);
    
  
     }
     // printing the value in to console
         printToConsole(personString);
 }

 function printableName(vorname, nachname, numspaces){
    let personString = vorname;
    for(let e= 0; e < numspaces ; e++) 
    {
        personString = personString + " ";
    } 
    personString = personString + " | "+ nachname + "\n";
    return personString;
 }

 // adding a function to get the length of the logest reason

 function longestString(){
    
     let long1 = 8;
    for (let a=0; a<persons.length; a++){
        if (persons[a].firstName.length > long1){
          long1= persons[a].firstName.length;
     
        }
    return long1;
  }
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
        let responseStrg = request.responseText; // renamed stg_url to responseStrg and moved the declaration to local scope
        printToConsole(stringToArray(responseStrg));
        }
        else console.warn(request.statusText, request.responseText);
        
    });

    request.send();
}




//diese Funktion liest die Datei und legt sie in ein String-Array
// (eine Zeile als einzelnes Element in einem Array)

function stringToArray(strgParam) {
    let strgArray = strgParam.split('\n');
    strgArray.splice(1,1);
    return strgArray;
}






document.getElementById('file').onchange = function () {

    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {

        let responseStrg = this.result;
        printToConsole(stringToArray(responseStrg));

       };
    reader.readAsText(file);
   
};

