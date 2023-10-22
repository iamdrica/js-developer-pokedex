document.addEventListener('DOMContentLoaded', () => {
    const pokemonDetails = document.getElementById('pokemonDetails');
    const searchButton = document.getElementById('searchButton');
    const pokemonNameInput = document.getElementById('pokemonName');

    searchButton.addEventListener('click', () => {
        const pokemonName = pokemonNameInput.value.trim().toLowerCase();
        if (pokemonName) {
            getPokemonDetails(pokemonName);
        } else {
            alert('Por favor, insira o nome ou número do Pokémon.');
        }
    });


    function getPokemonDetails(pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Pokemon não encontrado.');
                }
                return response.json();
            })
            .then((data) => {
                const abilities = data.abilities.map((ability) => ability.ability.name).join(', ');
                const species = data.species.name;
                const weight = data.weight / 10; // Converter decigramas para quilogramas
                const height = data.height / 10; // Converter decímetros para metros
                const photo = data.sprites.front_default;

                const detailsHTML = `
                    <h2>${data.name}</h2>
                    <p>Species: ${species}</p>
                    <p>Height: ${height} m</p>
                    <p>Weight: ${weight} kg</p>
                    <p>Abilities: ${abilities}</p>
                    <img src="${photo}" alt="${data.name}">
                `;

                pokemonDetails.innerHTML = detailsHTML;
            })
            .catch((error) => {
                alert(error.message);
                console.error(error);
            });
    }
});
