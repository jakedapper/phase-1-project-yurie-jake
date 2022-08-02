let pokemonArray = [1,4,7,25];
let evolvedArray = [2,3,5,6,8,9];

//render the started pokemon onto the page
pokemonArray.forEach(pokeId => {
  renderPokemon(pokeId)
  //renderPokemonDisplay(pokeId)
});

const imageDisplay = document.getElementById('imgDisplay')
const displayDiv = document.getElementById("displayPokemon")
const displayName = document.getElementById('name')
const displayHeight = document.getElementById('height')
const displayWeight = document.getElementById('weight')
const displayType = document.getElementById('type')
const shinyBtn = document.getElementById('Shiny')
const evolveBtn = document.getElementById('Evolve')

const pokeForm = document.getElementById('newPokemon')
//const pokeForm = document.getElementById('newPokemon')

//const displayImg = document.getElementById('displayImg')
// function renderPokemon(pokemon){
//   displayName.textContent = pokemon.name
//   displayHeight.textContent = pokemon.height
//   displayWeight.textContent = pokemon.weight 
//   displayType.textContent = pokemon.types.forEach(object => type.name)
// }

function capitalize(string){
  return string[0].toUpperCase() + string.slice(1)
}

//gets pokemon images using ID and renders them
function renderPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemon => {;
           // console.log(pokemon.sprites.front_default);
            let newPokemon = document.createElement("div");
            let deleteBtn = document.createElement("button")
            deleteBtn.textContent = "DELETE"
            newPokemon.className = "card";
            newPokemon.append(deleteBtn)
            deleteBtn.addEventListener('click', (e)=>{
              newPokemon.remove()
            })
            let name = document.createElement("h2");
            name.textContent = capitalize(pokemon.name);
            let image = document.createElement("img");
            image.src = pokemon.sprites.front_default;
            newPokemon.append(name,image);
            image.setAttribute('id', id)
            image.setAttribute('class', 'pokeImg')
            image.addEventListener('click', (e)=>renderPokemonDisplay)
            //pokemon image changes when mouseover event occurs
            image.addEventListener("mouseover", (e) => {
                if(e.target.src == pokemon.sprites.front_default){
                    e.target.src = pokemon.sprites.back_default;
                }
                else if(e.target.src == pokemon.sprites.back_default){
                    e.target.src = pokemon.sprites.front_default;

              }
              // image.addEventListener('click', (e) => renderPokemon(pokemon))
            });
            image.addEventListener('click', (e) => renderPokemonDisplay(id))
            
            document.getElementById("poke").append(newPokemon);
  });
}

function renderPokemonDisplay(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemon => {
            displayName.textContent = pokemon.name
            imageDisplay.src = pokemon.sprites.front_default;
            console.log(displayName)
            displayHeight.textContent = pokemon.height
            displayWeight.textContent = pokemon.weight 
            console.log('click')
            let pokeType = pokemon.types[0].type.name
            console.log(pokeType)
            displayType.textContent = pokeType
            // let pokeImage = document.querySelector(id)
            //displayType.textContent = pokemon.types.forEach(object => type.name)
            //console.log(pokemon.types.forEach(object => type.name))
            shinyBtn.addEventListener('click', (e)=>{  
              if(imageDisplay.src == pokemon.sprites.front_default){
                imageDisplay.src = pokemon.sprites.front_shiny
              }else if(imageDisplay.src ==pokemon.sprites.front_shiny){
                imageDisplay.src = pokemon.sprites.front_default
              }
            })
        })
}


const pokeForm = document.getElementById('newPokemon')
const formInput = document.getElementById('formInput')

pokeForm.addEventListener('submit', (e)=> handleNewPokemon(e))

function handleNewPokemon(e){
  e.preventDefault();
  
  let id = formInput.value
  renderPokemon(id)
  renderPokemonDisplay(id)
  
  // console.log(formInput.value)
  // fetch(`https://pokeapi.co/api/v2/pokemon/${formInput.value}`)
  // .then(res=>res.json())
  // .then(pokemon=>)

}
