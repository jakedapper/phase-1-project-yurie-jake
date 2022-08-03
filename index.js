let pokemonArray = [1,4,7,25];
let evolvedArray = [2,3,5,6,8,9];
let currentPokemonId = 0;

//render the started pokemon onto the page
pokemonArray.forEach(pokeId => {
  renderPokemon(pokeId)
  //renderPokemonDisplay(pokeId)
});

//DOM Variables and Type PokeCard refs
const fire ="https://pokecardmaker.net/assets/Pokemon/Fire/SS_Basic_Fire.png"
const grass = "https://pokecardmaker.net/assets/Pokemon/Grass/SS_Basic_Grass.png"
const water = "https://pokecardmaker.net/assets/Pokemon/Water/SS_Basic_Water.png"
const electric = "https://pokecardmaker.net/assets/Pokemon/Lightning/SS_Basic_Lightning.png"
const imageDisplay = document.getElementById('imgDisplay')
const displayDiv = document.getElementById("displayPokemon")
const displayName = document.getElementById('name')
const displayHeight = document.getElementById('height')
const displayWeight = document.getElementById('weight')
const displayType = document.getElementById('type')
const shinyBtn = document.getElementById('Shiny')
const evolveBtn = document.getElementById('Evolve')
const pokeForm = document.getElementById('newPokemon')


//utility helper functions
function capitalize(string){
  return string[0].toUpperCase() + string.slice(1)
}

//gets pokemon images using ID and renders them
function renderPokemon(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemon => {;
           // console.log(pokemon.sprites.front_default);
           console.log(pokemon.name)
            let newPokemon = document.createElement("div");
            let deleteBtn = document.createElement("button")
            deleteBtn.textContent = "DELETE"
            deleteBtn.setAttribute('class', "delete")
            newPokemon.className = "card";
            newPokemon.append(deleteBtn)
            let name = document.createElement("h2");
            name.setAttribute('class', 'card-name')
            name.textContent = capitalize(pokemon.name);
            let image = document.createElement("img");
            image.src = pokemon.sprites.front_default;
            newPokemon.append(name,image);
            newPokemon.setAttribute('id', id)
            image.setAttribute('class', 'pokeImg')
           // image.addEventListener('click', (e)=>renderPokemonDisplay)

            //pokemon image changes when mouseover event occurs
            image.addEventListener("mouseover", (e) => {
                if(e.target.src == pokemon.sprites.front_default){
                    e.target.src = pokemon.sprites.back_default;
                }
                else if(e.target.src == pokemon.sprites.back_default){
                    e.target.src = pokemon.sprites.front_default;
              
              }
              deleteBtn.addEventListener('click', (e)=>{
                newPokemon.remove()
              })
            });
            
            image.addEventListener('click', () => renderPokemonDisplay(id))
            document.getElementById("card-list").append(newPokemon);
          });
        }

function renderPokemonDisplay(id){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon.name)
            displayName.textContent = capitalize(pokemon.name)
            imageDisplay.src = pokemon.sprites.front_default;
            //console.log(displayName)
            displayHeight.textContent = (pokemon.height/10) + " m"
            displayWeight.textContent = (pokemon.weight/10) + " kgs"
            //console.log('click')
            let pokeType = pokemon.types[0].type.name
            console.log(pokeType)

            displayType.textContent = capitalize(pokeType)
            currentPokemonId = id;

            if(pokeType === 'grass'){
                displayDiv.style.backgroundImage 
                = "url('https://pokecardmaker.net/assets/Pokemon/Grass/SS_Basic_Grass.png')";
                }else if(pokeType === 'electric'){
                    displayDiv.style.backgroundImage 
                    = "url('https://pokecardmaker.net/assets/Pokemon/Lightning/SS_Basic_Lightning.png')";
                 }else if(pokeType === "water"){
                    displayDiv.style.backgroundImage 
                    = "url('https://pokecardmaker.net/assets/Pokemon/Water/SS_Basic_Water.png')";
                 } else if(pokeType === "fire") {
                    displayDiv.style.backgroundImage 
                    = "url('https://pokecardmaker.net/assets/Pokemon/Fire/SS_Basic_Fire.png')"
                 }
                 else{
                    displayDiv.style.backgroundImage 
                    = "url('https://pokecardmaker.net/assets/Pokemon/Colorless/SS_Basic_Colorless.png')"
                 }
                 
                 shinyBtn.addEventListener('click', (e)=>{  
                   if(imageDisplay.src == pokemon.sprites.front_default){
                     imageDisplay.src = pokemon.sprites.front_shiny
                   }else if(imageDisplay.src ==pokemon.sprites.front_shiny){
                     imageDisplay.src = pokemon.sprites.front_default
                   }
                 })
                })
              }

renderPokemonDisplay(1);              
evolveBtn.addEventListener("click", ()=>evolve(currentPokemonId));

function evolve(id){
    //console.log(e.target);
    console.log(id);
    
    if(id ==1 || id == 2 || id ==4 || id ==5 || id == 7 || id ==8 || id ==25){
        currentPokemonId = id + 1;
        document.getElementById(id).remove();
   
        renderPokemon(currentPokemonId);
        renderPokemonDisplay(currentPokemonId);
        
        console.log(currentPokemonId);

    }
    
    else{
        console.log("evolution unavailable");
    }
}

const formInput = document.getElementById('formInput')

pokeForm.addEventListener('submit', handleNewPokemon)

function handleNewPokemon(e){
  e.preventDefault();
  
  let id = formInput.value
  renderPokemon(id)
  renderPokemonDisplay(id)


}

