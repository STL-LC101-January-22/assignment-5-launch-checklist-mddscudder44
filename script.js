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
     let theList = document.querySelector("#faultyItems");
     theList.style.visibility = "hidden";
     
     form.addEventListener("submit", function(event) {
         let submitForm = formSubmission(window.document, theList, pilotName.value, copilotName.value, fuelLevelAmnt.value, cargoMass.value);
         if(!submitForm) {
             event.preventDefault();
         }
         if(submitForm) {
             event.preventDefault();
         }
     })
 });