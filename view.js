let wildPokemon = ["Pikachu","Charmander","Ditto"];
let pokeBalls = 5;
let metPokemon = "";
let caughtPokemon = 0;
let message = ""
let inventory =""

updateView();
function updateView(){
document.getElementById("app").innerHTML = /*HTML*/
`

<div>${metPokemon}</div>
<div>Caught Pokemon : ${caughtPokemon}</div>

<div>Pokeballs : ${pokeBalls}</div>
<button onclick="catchPokemon()">Catch</button>
<button>Punch</button>
<button onclick = "runAway()">Run</button>
<button onclick = "meetPokemon()">meetpokemon</button>
<div> Player</div>
<img src = "img/last ned.webp"> 
<button onclick = "showInventory()">Inventory</button>
<div id="bag"></div>
<div>${message}</div>
`;
}

function meetPokemon(){
let randomIndex = Math.floor(Math.random() * wildPokemon.length);
metPokemon = wildPokemon[randomIndex];
updateView();
}

function catchPokemon(){
if (pokeBalls >0 && metPokemon !==""){
    pokeBalls--;
    caughtPokemon++;
    inventory += metPokemon;
    metPokemon = ""
};
updateView();
}

function runAway(){
    if (metPokemon !== ""){
    message = "You got away safely!";}
    metPokemon = ""
updateView();
}

function showInventory(){
let inventoryDisplay = inventory += metPokemon;
document.getElementById("bag").innerHTML = inventoryDisplay;

}
