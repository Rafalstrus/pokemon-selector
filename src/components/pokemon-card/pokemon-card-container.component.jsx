import { useSelector } from 'react-redux';

import './pokemon-card.styles.css'

export const PokeCard = () => {
    const pokeid = useSelector((state) => state.pokemonid)
    const pokeinfo = useSelector((state) => state.pokemoninfo)
    const pokename = useSelector((state) => state)

    return (
        <div id="poke-card">
            {console.log(pokeid)}
            {console.log(pokeinfo)}
            {console.log(pokename)}
            {pokeid}
        </div>
    )
}