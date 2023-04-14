const poke_container = document.getElementById('poke_container');

const fetchPokemon = async () => {
    for(let i=1; i<=150; i++){
        await getPokemon(i)
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon)
    createPokemonCard(pokemon)
}

const createPokemonCard = pokemon => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const pokeInnerHTML = `
    ${pokemon.name}`;
    pokemonEl.innerHTML = pokeInnerHTML
    poke_container.appendChild(pokemonEl)
}

fetchPokemon();