document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const pokemonNameInput = document.getElementById('pokemonName');

    searchButton.addEventListener('click', () => {
        const pokemonName = pokemonNameInput.value.trim().toLowerCase();
        if (pokemonName) {
            getPokemonDetails(pokemonName);
        } else {
            alert('Por favor, insira o nome ou número do Pokémon.');
        }
    });
    clearButton.addEventListener('click', () => {

   // Limpar o campo de busca e as infos do pokemon
   pokemonNameInput.value = '';

   pokemonDetails.innerHTML = '';

    });

    });

    
