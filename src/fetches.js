export const fetchPokeInfo = async (nameorId) =>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+nameorId)
    var data = await response.json()
    return await data
}