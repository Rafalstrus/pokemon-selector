export const fetchPokeInfo = async (nameorId) => {
    var data ={}
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nameorId)
        .then(async (response) => {
            if (!response.ok) {
                console.clear()
                data = { "error": "404" }
            }
            else{
                data = await response.json()
            }
        })

        
    return await data
}