// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');
let astronautCount = Number(input.question("How many astronauts are going on this mission? "));


// Declare and initialize the 12 variables here:
let date = "Date: Monday 2019-03-18";
let time = "Time: 10:05:34 AM";

let astronautStatus = "ready";
let averageAstronauntMassKg = 80.7;
let crewMassKg = astronautCount*averageAstronauntMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg*fuelMassKg+shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%"
let weatherStatus = "clear"

// Write code to generate the LC04 report here:
console.log("-------------------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("-------------------------------------");
console.log(date);
console.log(time);
console.log("");
console.log("-------------------------------------");
console.log("> ASTRONAUT INFO");
console.log("-------------------------------------");
console.log("*count: "+astronautCount);
console.log("*status: "+astronautStatus)
console.log("");
console.log("-------------------------------------");
console.log("> FUEL DATA");
console.log("-------------------------------------");
console.log("* Fuel temp celsius: "+fuelTempCelsius+ " C");
console.log("* Fuel level: "+fuelLevel);
console.log("")
console.log("-------------------------------------");
console.log("> MASS DATA")
console.log("-------------------------------------");
console.log("* Crew mass: "+crewMassKg);
console.log("* Fuel mass: "+fuelMassKg);
console.log("* Shuttle mass: "+shuttleMassKg);
console.log("* Total mass: "+totalMassKg);
console.log("")
console.log("-------------------------------------");
console.log("> FLIGHT PLAN");
console.log("-------------------------------------");
console.log("* weather: "+weatherStatus);
console.log("");
console.log("-------------------------------------");
console.log("> OVERALL STATUS")
console.log("-------------------------------------");
console.log("* Clear for takeoff: YES");


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.