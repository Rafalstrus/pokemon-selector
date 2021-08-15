import { useSelector } from 'react-redux';

import './pokemon-card.styles.css'

export const PokeCard = () => {
    const pokeid = useSelector((state) => state.pokemonid)
    const pokeinfo = useSelector((state) => state.pokemoninfo)
    const pokename = useSelector((state) => state.pokemonname)
    var pokeimg = ""
    
    if(Object.keys(pokeinfo).length!==0){
         pokeimg = pokeinfo.sprites.front_default
    }
    return (
        <div id="poke-card">
            <p>{pokeid}</p>
            <img src={pokeimg} alt=""></img>
            {console.log(pokeinfo)}
            <p>{pokename}</p>
        </div>
    )
}