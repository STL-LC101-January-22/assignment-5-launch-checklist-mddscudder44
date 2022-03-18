//const { formSubmission } = require("./scriptHelper");

//const { addDestinationInfo, formSubmission } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
/*window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
    
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

    });
});

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
      
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   }) 

   
});
*/

/*window.addEventListener('load', function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponsethen(function (response) {
        listedPlanets = response;
        console.log(listedPlanets);
    }).then(function() {

        let chosenPlanet = pickPlanet(listedPlanets);
        console.log(chosenPlanet);

        let destinationInformation = addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
        console.log(destinationInformation);

    });

    let form = document.querySelector('form');
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    let listVariable = document.querySelector("#faultyItems");
    listVariable.style.visibility = "hidden";

    form.addEventListener("submit", function(event) {
        let formSubmissionSub = formSubmission(window.document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        if(!formSubmissionSub) {
            event.preventDefault();
        }
        if(formSubmissionSub) {
            event.preventDefault();
        }
    })
})*/


window.addEventListener("load", function() {
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
   
     let chosenPlanet = pickPlanet(listedPlanets);
     console.log(chosenPlanet);
     let destinationInfo = addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
     console.log(destinationInfo);
    })
     let form = document.querySelector("form")
     let pilotName = document.querySelector("input[name=pilotName]");
     let copilotName = document.querySelector("input[name=copilotName]");
     let fuelLevelAmnt = document.querySelector("input[name=fuelLevel]");
     let cargoMass = document.querySelector("input[name=cargoMass]");
     let listVar = document.querySelector("#faultyItems");
     listVar.style.visibility = "hidden";
     
     form.addEventListener("submit", function(event) {
         let formSubmissionVar = formSubmission(window.document, listVar, pilotName.value, copilotName.value, fuelLevelAmnt.value, cargoMass.value);
         if(!formSubmissionVar) {
             event.preventDefault();
         }
         if(formSubmissionVar) {
             event.preventDefault();
         }
     })
 });