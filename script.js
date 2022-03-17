//const { formSubmission } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        
       // if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
            //alert("All fields are required");
        //};

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