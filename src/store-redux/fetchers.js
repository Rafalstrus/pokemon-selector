export async function getDataFromApi(nameorId) {
      await doubleAsync(nameorId)
     .then(respond => { return respond })
    
}
async function doubleAsync(nameorId){
    return await fetch('https://pokeapi.co/api/v2/pokemon/'+nameorId)
        .then((res) => res.json())
}