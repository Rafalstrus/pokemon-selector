import { useSelector } from 'react-redux';

import { PokeTypes } from './pokemon-types.component'
import { PokeStats } from './pokemon-stats.component'

import { Box } from '@material-ui/core/'
import './pokemon-card.styles.css'



export const PokeCard = () => {
    const pokeid: number = useSelector((state: any) => state.pokemonid)
    const pokeinfo: any = useSelector((state: any) => state.pokemoninfo)
    const pokename: string = useSelector((state: any) => state.pokemonname)
    var pokeimg: string = ""
    var pokeimgBack: string = ""
    var pokeimgShiny: string = ""
    var pokeimgBackShiny: string = ""
    var poketypes: any = []
    var pokestats: any = []

    if (Object.keys(pokeinfo).length !== 0) {
        //spirits link to imgs
        pokeimg = pokeinfo.sprites.front_default
        pokeimgBack = pokeinfo.sprites.back_default
        pokeimgShiny = pokeinfo.sprites.front_shiny
        pokeimgBackShiny = pokeinfo.sprites.back_shiny
        //types and stats json arrays pushing to arrays
        for (let i = 0; i < pokeinfo.types.length; i++) {
            poketypes.push(pokeinfo.types[i].type)
        }
        for (let i = 0; i < pokeinfo.stats.length; i++) {
            pokestats.push(pokeinfo.stats[i])
        }
    }
    return (
        <div id="poke-card">
            <div>
            <p>{pokename + " (" + pokeid + ")"}</p>
            <Box
            className="poke-images-container"
            >
                <img
                    className="poke-images"
                    src={pokeimg}
                    alt=""></img>
                <img
                    className="poke-images"
                    src={pokeimgBack}
                    alt=""></img>
            </Box>
        </div>
        <PokeTypes
            poketypes={poketypes}
        />
        <PokeStats
            pokestats={pokestats}
        />
        <div
            id="shiny-box">
            <p>Shiny</p>
            <Box
            className="poke-images-container"
            >
                <img
                    className="poke-images"
                    src={pokeimgShiny}
                    alt=""></img>
                <img
                    className="poke-images"
                    src={pokeimgBackShiny}
                    alt=""></img>
            </Box>
        </div>
        </div>
    )
}