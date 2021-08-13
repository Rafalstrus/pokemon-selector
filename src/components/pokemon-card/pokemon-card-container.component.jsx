import { useSelector } from 'react-redux';

import './pokemon-card.styles.css'

export const PokeCard = props => {
    const pokeid = useSelector((state) => state.pokemonid )
    //const pokeinfo = useSelector((state) => state.pokemoninfo)
    //const pokename = useSelector((state) => state.pokename)

    return (
        <div>
            {pokeid}
        </div>
    )
}