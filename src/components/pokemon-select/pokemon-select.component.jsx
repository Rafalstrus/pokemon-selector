import pokeNames from './all-pokemon-names.json'

import {useEffect, useRef} from 'react'

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';
import { connect } from "react-redux";

import {fetchPokeInfo} from '../../fetches'

import './pokemon-select.styles.css'


const PokeSelect = ({setDataFromApi}) => {
   const inputRef = useRef()
    useEffect(() => {
      })
    return(
    <div id="pokemon-select">
        <input
        ref={inputRef}
        list ="pokeNames"
        ></input>
        <datalist id="pokeNames">
            {pokeNames.map((pokeName) => (
                <option
                    key={pokeName}
                >{pokeName}
                </option>
            ))}
        </datalist>
        <button onClick ={async ()=>{
            var x = await fetchPokeInfo(3)
            setDataFromApi(x)
        }}
        > change</button>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(PokeSelect)