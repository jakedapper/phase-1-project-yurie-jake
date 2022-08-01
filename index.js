// display/profile pic
let pokemonArray = [1,4,7,25];
let evolvedArray = [2,3,5,6,8,9];

pokemonArray.forEach(pokeId => renderPokemon(pokeId));

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
            
            document.getElementById("pok").append(newPokemon);
  });
}
