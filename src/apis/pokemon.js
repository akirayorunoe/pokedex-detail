export const fetchPokemon = async (id) => {
    console.log(`https://pokeapi.co/api/v2/pokemon/${+id}`)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${+id}`);
    return res.json();
};