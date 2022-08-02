let pokemonArray = [1,4,7,25];
let evolvedArray = [2,3,5,6,8,9];

//render the started pokemon onto the page
pokemonArray.forEach(pokeId => renderPokemon(pokeId));

//gets pokemon images using ID and renders them
function renderPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemon => {;
           // console.log(pokemon.sprites.front_default);
            newPokemon = document.createElement("div");
            newPokemon.className = "card";
            let name = document.createElement("h2");
            name.textContent = pokemon.name;
            let image = document.createElement("img");
            image.src = pokemon.sprites.front_default;
            newPokemon.append(name,image);

            //pokemon image changes when mouseover event occurs
            image.addEventListener("mouseover", (e) => {
                if(e.target.src == pokemon.sprites.front_default){
                    e.target.src = pokemon.sprites.back_default;
                }
                else if(e.target.src == pokemon.sprites.back_default){
                    e.target.src = pokemon.sprites.front_default;

              }
            });
            
            document.getElementById("poke").append(newPokemon);
  });
}




















//.addEventListener('click', (e)=>renderPokemon)

//const displayName = document.getElementById('name')
//const displayHeight = document.getElementById('height')
//const displayWeight = document.getElemenyById('weight')
//const displayType = document.getElementById('type')

//function renderPokemon(pokemon){
//    displayName.textContent = pokemon.name
//    displayHeight.textContent = pokemon.height
//    displayWeight.textContent = pokemon.weight 
//    displayType.textContent = pokemon.types.forEach(object => type.name)
//}












//const evolvedArray = [2,3,5,6,8,9]

//fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

