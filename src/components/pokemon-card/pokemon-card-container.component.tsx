import { useSelector } from 'react-redux';

import './pokemon-card.styles.css'

export const PokeCard = () => {
    const pokeid :number = useSelector((state :any) => state.pokemonid)
    const pokeinfo :any = useSelector((state :any) => state.pokemoninfo)
    const pokename :string = useSelector((state :any) => state.pokemonname)
    var pokeimg :string= ""
    
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