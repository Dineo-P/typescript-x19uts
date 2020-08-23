// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter </h1>`;


//declaring variables
let conMin:number;
let convHour:number;
let seconds:number;


//function to convert min into sec
function convertM(minutes:number, seconds:number){
  conMin = seconds/minutes;
 return conMin;
}

convertM(1,60)
console.log(conMin);


//convert hours into min then sec
function  convertH(minutes:number, hours:number,seconds:number){

  convHour = (minutes/hours) * conMin;
  return convHour;
}

convertH(60,1,60);
console.log(convHour);

// Main Function to add seconds of hours and min
function add(conMin:number,ConvHour:number){
seconds =conMin + convHour
return seconds;
}
add(60,3600);
console.log(seconds);