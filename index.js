// display/profile pic



















.addEventListener('click', (e)=>renderPokemon)

const displayName = document.getElementById('name')
const displayHeight = document.getElementById('height')
const displayWeight = document.getElemenyById('weight')
const displayType = document.getElementById('type')

function renderPokemon(pokemon){
    displayName.textContent = pokemon.name
    displayHeight.textContent = pokemon.height
    displayWeight.textContent = pokemon.weight 
    displayType.textContent = pokemon.types.forEach(object => type.name)
}












const evolvedArray = [2,3,5,6,8,9]

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

