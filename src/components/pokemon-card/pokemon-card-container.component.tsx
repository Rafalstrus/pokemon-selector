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
    console.log(poketypes)
    return (
        <div id="poke-card">
            <div>
                <p>{pokename + " (" + pokeid + ")"}</p>
                <Box
                    border="solid"
                    overflow="hidden"
                    width="fit-content"
                    margin="auto"
                >
                    <img src={pokeimg} alt=""></img>
                    <img src={pokeimgBack} alt=""></img>
                </Box>
            </div>
            {console.log(pokeinfo)}
            <PokeTypes
                poketypes={poketypes}
            />
            <PokeStats
                pokestats={pokestats}
            />
            <div>
            <p>Shiny</p>
            <Box
                border="solid"
                overflow="hidden"
                width="fit-content"
                margin="auto"
            >
                <img src={pokeimgShiny} alt=""></img>
                <img src={pokeimgBackShiny} alt=""></img>
            </Box>
            </div>
        </div>
    )
}