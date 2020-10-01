/*
    Pokedex Website Controller
    SE3316 Lab 1

    This script populates the unordered list in the main html and
    handles the user input from both search bars.

    Author: Dante De Luca
    ddeluc@uwo.ca
*/

"use strict";

// List of first twenty pokemon with relevent data
let pokemondata = {
    
    "Bulbasaur": {
        "Name": "Bulbasaur",
        "Number": "1",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    },
    "Ivysaur": {
        "Name": "Ivysaur",
        "Number": "2",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "5",
        "Catchable": "Wild",
    },
    "Venusaur": {
        "Name": "Venusaur",
        "Number": "3",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "6",
        "Catchable": "Wild",
    },
    "Charmander": {
        "Name": "Charmander",
        "Number": "4",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    },
    "Charmeleon": {
        "Name": "Charmeleon",
        "Number": "5",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "5",
        "Catchable": "Wild",
    },
    "Charizard": {
        "Name": "Charizard",
        "Number": "6",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "6",
        "Catchable": "Wild",
    },
    "Squirtle": {
        "Name": "Squirtle",
        "Number": "7",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    },
    "Wartortle": {
        "Name": "Wartortle",
        "Number": "8",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "5",
        "Catchable": "Wild",
    },
    "Blastoise": {
        "Name": "Blastoise",
        "Number": "9",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "6",
        "Catchable": "Wild",
    },
    "Caterpie": {
        "Name": "Caterpie",
        "Number": "10",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "1",
        "Catchable": "Wild",
    },
    "Metapod": {
        "Name": "Metapod",
        "Number": "11",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "3",
        "Catchable": "Wild",
    },
    "Butterfree": {
        "Name": "Butterfree",
        "Number": "12",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    },
    "Weedle": {
        "Name": "Weedle",
        "Number": "13",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "1",
        "Catchable": "Wild",
    },
    "Kakuna": {
        "Name": "Kakuna",
        "Number": "14",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "3",
        "Catchable": "Wild",
    },
    "Beedrill": {
        "Name": "Beedrill",
        "Number": "15",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    },
    "Pidgey": {
        "Name": "Pidgey",
        "Number": "16",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "1",
        "Catchable": "Wild",
    },
    "Pidgeotto": {
        "Name": "Pidgeotto",
        "Number": "17",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "3",
        "Catchable": "Wild",
    },
    "Pidgeot": {
        "Name": "Pidgeot",
        "Number": "18",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    },
    "Rattata": {
        "Name": "Rattata",
        "Number": "19",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "1",
        "Catchable": "Wild",
    },
    "Raticate": {
        "Name": "Raticate",
        "Number": "20",
        "Generation": "1",
        "Region": "Global",
        "Rarity": "4",
        "Catchable": "Wild",
    }
}

// Declare html element references and other useful constants
const NAM_SEARCH_BTN = document.getElementById('name-search-btn');
const NAM_SEARCH_BAR = document.getElementById('name-search-bar');
const NUM_SEARCH_BTN = document.getElementById('number-search-btn');
const NUM_SEARCH_BAR = document.getElementById('number-search-bar');
const MODAL_CONTAINER = document.getElementById('modal-container');
const BODY = document.getElementById('body');
const CLOSE_BTN = document.getElementById('close');
const ENTER_KEY_CODE = 13; 

let input = ""; 
let searchdiv = document.createElement('div');;

// Handle events
// -------------------------------------

// Ensure the user types only characters when searching by name
function validateName(event) {
    const regex = RegExp('[a-zA-Z]');

    if (!regex.test(event.key)) {
        return false;
    } else {
        return true;
    }
}

// Enusure the user types only numbers when searching by number
function validateNumber(event) {
    const regex = RegExp('[0-9]');

    if (!regex.test(event.key)) {
        return false;
    } else {
        return true;
    }
}

// Function that handles the key "Enter" when searching name
function enterName(event) {
    if (event.keyCode == ENTER_KEY_CODE) {
        fetch(input, "Name");
    }
}

// Function that handles the key "Enter" when searching number
function enterNumber(event) {
    if (event.keyCode == ENTER_KEY_CODE) {

        if (parseInt(input, 10) <= 20) {
            fetch(input, "Number");
        } else {
            alert("Invalid Input: Number must be less than or equal to 20.");
        }
    }
}

// Handling name search
NAM_SEARCH_BAR.addEventListener("keyup", function(e) {
    input = e.target.value;            
    console.log(e);

    if (input != "") {
        if (BODY.children[3] != searchdiv) {
            BODY.insertBefore(searchdiv, BODY.children[3]);
        }        
        searchdiv.textContent = "test";        
    } else {
        if (BODY.children[3] == searchdiv) {
            BODY.removeChild(BODY.children[3]);
        }
    }
});

NAM_SEARCH_BTN.addEventListener("click", function() {
    fetch(input, "Name");
});

// Handling number search
NUM_SEARCH_BAR.addEventListener("keyup", function(e) {
    input = e.target.value;
    console.log(e);
});

NUM_SEARCH_BTN.addEventListener("click", function() {
    if (parseInt(input, 10) <= 20) {
        fetch(input, "Number");
    } else {
        alert("Invalid Input: Number must be less than or equal to 20.");
    }
});

// Function that closes modal upon clicking the "Close Me" button
CLOSE_BTN.addEventListener('click', function() {
    MODAL_CONTAINER.classList.remove('show');
    document.getElementById('modal-body').innerHTML = "";
});
// -------------------------------------

// Function that returns an array of all possible matches (up to five)
let getPokemon = function (input, field, popup) {
    let validpokemon = []

    if ((input == "") || (input.length > 10))
        return [];

    for (let pokemon in pokemondata)
    {
        let done = false;

        for (let i = 0; i <= pokemondata[pokemon][field].length - input.length; i++)
        {
            if (done)
                continue;

            let j = 0;
            let k = i;

            while ((input.toLowerCase().charAt(j) == pokemondata[pokemon][field].toLowerCase().charAt(k)) && (k < pokemondata[pokemon][field].length)) {                
                if ((j == input.length - 1) && (validpokemon.length < 5 && popup)) {
                    validpokemon.push(pokemondata[pokemon])
                    done = true;
                }
                j++;
                k++;
            }                    
        }
        if (done)
            continue;
    }

    return validpokemon;
}

// Function that creates the list of valid pokemon
let fetch = function(input, field) {
    let searchedpokemon = getPokemon(input, field, true);
    MODAL_CONTAINER.classList.add('show');
    list(searchedpokemon, "modal-body");
    console.log(searchedpokemon);
    console.log(input)
}

// Create format for each <li> pokemon item that will be within the <ul>
let description = function(pokemon, pokemondata, id) {
    let listelement = document.getElementById(id).appendChild(document.createElement('li'));
    listelement.appendChild(document.createElement('img')).setAttribute('src', './pokemon/' + pokemondata[pokemon]["Number"] + '.png');
    listelement.appendChild(document.createElement('div')).textContent = 'Name: ' + pokemondata[pokemon]["Name"];
    listelement.appendChild(document.createElement('div')).textContent = 'Number: ' + pokemondata[pokemon]["Number"];
    listelement.appendChild(document.createElement('div')).textContent = 'Region: ' + pokemondata[pokemon]["Region"];
}

// Insert the relevent <li> items
let list = function(pokemondata, id) {
    for (let pokemon in pokemondata) {
        description(pokemon, pokemondata, id);
    }
}

// Execute <ul> formatting
list(pokemondata, "pokemon-list");

