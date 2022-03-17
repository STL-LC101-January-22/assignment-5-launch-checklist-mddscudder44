// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "" || testInput === null || testInput === 0) {
        return `Empty`
    } else if ((!isNaN(Number(testInput)))) {
        return `Is a Number`
    } else {
        return `Not a Number`
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.getElementById("faultyItems");
    pilot = document.querySelector("input[name=pilotName]").value;
    copilot = document.querySelector("input[name=copilotName]").value;
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    cargoMass = document.querySelector("input[name=cargoMass]").value;

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === `Empty` || validateInput(copilot) === `Empty` || validateInput(fuelLevel) === `Empty` || validateInput(cargoLevel) === `Empty`) {
        alert("All fields are required");
    } else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
        alert('Please enter a numerical value for Fuel Level and Cargo Mass')
    } else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number') {
        alert("Please do not enter numbers for name of pilor or co-pilot")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`
        list.style.visibility = 'hidden'
    }






    if (Number(fuelLevel.value) < 10000) {
        fuelStatus.innerHTML = 'Not enough fuel for journey'
        list.style.visibility = 'visible'
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatus.style.color = 'red'
    } else if (Number(cargoLevel) > 10000) {
        cargoStatus.innerHTML = 'Cargo mass too heavy for takeoff'
        list.style.visibility = 'visible'
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatus.style.color = 'red'
    } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        list.style.visibility = 'visible'
        fuelStatus.innerHTML = 'Enough fuel for journey'
        cargoStatus.innerHTML = 'Cargo mass is optimal'
        launchStatus.innerHTML = 'Shuttle ready for launch'
        launchStatus.style.color = 'green'
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
