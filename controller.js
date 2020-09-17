"use strict";

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

let description = function(pokemon) {
    return '<li>' + '<img src=./pokemon/' + pokemondata[pokemon]["Number"] + '.png>' + 
    '<div> Name: ' + pokemon + '</div>' +
    '<div> Number: ' + pokemondata[pokemon]["Number"] + '</div>' +
    '<div> Region: ' + pokemondata[pokemon]["Region"] + '</div>' +
    '</li>';
}

 let list = function(pokemondata) {
    for (let pokemon in pokemondata) {
        document.getElementById('pokemon').innerHTML += description(pokemon);
    }
}

console.log(pokemondata["Blastoise"]["Region"])

/* let content = document.getElementById('pokemon');
let arr = ["bulbasaur", "ivysaur", "venusaur"];

let list = ""

for (let element in arr) {
    list += "<li>" + arr[element] + "</li>";
}

content.innerHTML = list; */

list(pokemondata);
