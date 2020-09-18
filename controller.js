/*
    Pokedex Website Controller
    SE3316 Lab 1

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

// Declare html element references
const searchbtn = document.getElementById('search-btn');
const searchbar = document.getElementById('search-bar');
const modalcontainer = document.getElementById('modal-container');
const closebtn = document.getElementById('close'); 

let input = "";

// Handle events
// -------------------------------------
searchbar.addEventListener("keyup", function(e) {
    input = e.target.value;
});

searchbtn.addEventListener("click", function() {
    let searchedpokemon = getpokemon(input);
    modalcontainer.classList.add('show');
    list(searchedpokemon, "modal-body");
    console.log(searchedpokemon);
});

closebtn.addEventListener('click', function() {
    modalcontainer.classList.remove('show');
});
// -------------------------------------

// Function that returns an array of all possible matches (up to five)
let getpokemon = function (input) {
    let validpokemon = []

    if (input == "")
        return [];

    for (let pokemon in pokemondata)
    {
        for (let i = 0; i <= pokemon.length - input.length; i++)
        {
            let j = 0;
            let k = i;

            while (input.toLowerCase().charAt(j) == pokemon.toLowerCase().charAt(k)) {                
                if ((j == input.length - 1) && (validpokemon.length < 5)) {
                    validpokemon.push(pokemondata[pokemon])
                }
                j++;
                k++;
            }                    
        }
    }

    return validpokemon;
}

// Create format for each <li> pokemon item that will be within the <ul>
let description = function(pokemon, pokemondata) {
    return '<li>' + '<img src=./pokemon/' + pokemondata[pokemon]["Number"] + '.png>' + 
    '<div> Name: ' + pokemondata[pokemon]["Name"] + '</div>' +
    '<div> Number: ' + pokemondata[pokemon]["Number"] + '</div>' +
    '<div> Region: ' + pokemondata[pokemon]["Region"] + '</div>' +
    '</li>';
}

// Insert the relevent <li> items
let list = function(pokemondata, id) {
    for (let pokemon in pokemondata) {
        document.getElementById(id).innerHTML += description(pokemon, pokemondata);
    }
}

// Execute <ul> formatting
list(pokemondata, "pokemon-list");