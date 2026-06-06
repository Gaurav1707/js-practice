const { useId } = require("react");

const Apival = "https://api.nationalize.io/?name=nathaniel";
const space = document.querySelector("#fact");
// console.log("hello");
// console.log(document);
// console.log(document.dir);
// console.log(document.getElementsByTagName("p"));
// let appEnd = document.querySelector("h2");
// let boxes = document.querySelectorAll(".box");
// console.log(document.querySelectorAll(".box"));
// document.get
// let idx = 1;
// for(div of boxes){
//     div.innerText = `hello  ${idx}`;
//     idx++;
// }
let newBtn = document.createElement("button");
newBtn.innerText = 'click here !';
newBtn.style.background="red";
newBtn.style.fontSize = "20px";
document.querySelector("body").prepend(newBtn);
document.querySelector("h2").setAttribute("headingHTML","headingCSS");


const apiCall = async() => {
console.log("Getting data...");
let response = await fetch(Apival);
console.log(response);
let data = await response.json();
console.log(data);
 space.innerText = data.country[0].country_id;
};
newBtn.addEventListener("click",apiCall);
let UsI = document.getElementById("usId");
if(UsI.value==="US"){
    document.style.background= "red";
}
