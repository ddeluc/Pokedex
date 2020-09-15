/*fetch("./pokemon-data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    }); */


let pokemon = {
    bulbasaur: {
        number: 1,
        name: "Bulbasaur"
    },
    ivysaur: {
        number: 2,
        name: "Ivysaur"
    },
    venusaur: {
        number: 3,
        name: "Venusaur"
    }
}

/* let list = function(pokemon) {
    for (let mon in pokemon) {
        document.getElementsById('pokemon').innerHTML += '<li>' + mon.name + '</li>';
    }
} */

/* let content = document.getElementById('pokemon');
let arr = ["bulbasaur", "ivysaur", "venusaur"];

let list = ""

for (let element in arr) {
    list += "<li>" + arr[element] + "</li>";
} */

// content.innerHTML = list;

// list(pokemon);
