import pokeNames from './all-pokemon-names.json'

import { useRef} from 'react'

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';
import { connect } from "react-redux";

import {fetchPokeInfo} from '../../fetches'

import './pokemon-select.styles.css'


const PokeSelect = ({setDataFromApi}) => {
   const inputRef = useRef()
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
            var x = await fetchPokeInfo(inputRef.current.value)
            setDataFromApi(x)
        }}
        > change</button>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(PokeSelect)