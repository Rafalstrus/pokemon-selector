import { useSelector } from 'react-redux';

import './pokemon-card.styles.css'

export const PokeCard = () => {
    const pokeid: number = useSelector((state: any) => state.pokemonid)
    const pokeinfo: any = useSelector((state: any) => state.pokemoninfo)
    const pokename: string = useSelector((state: any) => state.pokemonname)
    var pokeimg: string = ""
    var poketypes: any = []

    if (Object.keys(pokeinfo).length !== 0) {
        pokeimg = pokeinfo.sprites.front_default
        for (let i = 0; i < pokeinfo.types.length; i++) {
            poketypes.push(pokeinfo.types[i].type)
        }
    }
    console.log(poketypes)
    return (
        <div id="poke-card">
            <p>{pokename +" ("+pokeid+")"}</p>
            <img src={pokeimg} alt=""></img>
            {console.log(pokeinfo)}
            {
                poketypes.map((type: any) => {
                    console.log(type)
                    //here are table with damage statistics
                    
                    return (
                        <div key={type.name}>
                            <p >{type.name}</p>
                            <img 
                            className ="types-images"
                            alt="" src={"/types-assets/"+type.name+".svg"}
                            ></img>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}