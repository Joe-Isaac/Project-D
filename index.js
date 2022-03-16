let click = document.querySelector("#input-btn");
let ulEl = document.querySelector("#ulEl");
let inputEl = document.querySelector("#input-el");
let myUl = document.querySelector("#myUl");
let listItems = "";
let clear = document.getElementById("clear");
var myLeads = [];

//This clears the local storage

/* The default method to listen for clicks has been to attach the onclick event to the event
Then we attach a function call to that button
function saveLead() {
    console.log("Button clicked");
}
*/

//This is the more professional way of writing event listeners in javascript.

click.addEventListener("click", function() {
    console.log("This event listener has been dispatched");
    myLeads.push(inputEl.value);
    console.log(myLeads);
    listItems += `<li>
    <a target='_blank' href='${myLeads[myLeads.length - 1]}'>
    ${myLeads[myLeads.length - 1]}
    </a>
    </li>`; //this is called using template strings, to replace concatenation
    //This shows the values stored in the variable so far
    ulEl.innerHTML = listItems;

    cleared(); //This function will clear the input box automatically
    //remember the lesson on innerhtml vs textcontent
    //innerhtml hides values, and you asked what values are there to be hidden. This here is an example, the li tags are instead parsed, rather than displayed.
    //were going to add all the values in the array to local storage to make it persistent.
    //We know that localStorage only deals with strings.
    //This is handled by JSON.stringify
    //To convert back to an array we use JSON.parse.
    //The logic is that we  convert the array to a string, store it in local storage and then convert it back to an array to ready it for the sequential array operations.
    localStorage.setItem("My Leads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("My Leads"));
});

let myClick = document.querySelector("#btn-2");
myClick.addEventListener("click", function() {
    myClick.textContent = "The box has now been opened";
    console.log("I want to open the box");
});

let newEl = document.getElementById("container");
newEl.innerHTML = "<button onclick='disp()'> Buy </button";

function disp() {
    newEl.innerHTML += "Thank you for buying";
}
//document.createElement("button");
//button.textContent = myLeads[myLeads.length - 1];

//to grab items from the text box, use .value

//using .createElement and .append to create li elements and append them to their uls
function create() {
    let me = document.createElement("li");
    me.textContent += "my name repeats for lack of data structure";
    myUl.append(me);
}

create();
create();
create();

//clearing the input field for more values to be entered
clear.addEventListener("click", function() {
    inputEl.value = ""; //this is how  to clear the field using a button.
    //th-e input field can also be cleared without using the button.
    console.log("This button works");
});

//This function when called clears the input field

function cleared() {
    inputEl.value = "";
    console.log("A function to clear the input box has been invoked");
}

const sender = "Joey";
const recipient = "James";
const email = `Hey ${recipient}
            Hows it going?
            Cheers ${sender}`;
console.log(email);

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("My Leads"));
var kulkid = "";
console.log(leadsFromLocalStorage);
for (var q = 0; q < leadsFromLocalStorage.length; q++) {
    kulkid += `<li>
            <a href=${leadsFromLocalStorage[q]}>
            ${leadsFromLocalStorage[q]}
            </a> </li>`;
}
console.log(kulkid);
myUl.innerHTML += kulkid;