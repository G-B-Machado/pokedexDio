const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon`;

function convertPokemonToLi(pokemon){
    return`
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">#Bulbasaur</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="" alt="#Bulbasaur">
                </div>
            </li>
        `
}

const pokemonList = document.getElementById('pokemonList')
console.log(pokemonList)

fetch(url)
    .then((response) => response.json())
    .then((bodyJson) => bodyJson.results)
    .then((pokenons) => {
        for (let i = 0; i < pokenons.length; i++) {
            const pokemon = pokenons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
    })
    .catch((error) => console.error(error))
