import pokeNames from './all-pokemon-names.json'

import { useRef} from 'react'

import {Button} from '@material-ui/core/';

import { mapStateToProps, mapDispatchToProps } from '../../store-redux/operations';
import { connect } from "react-redux";

import {fetchPokeInfo} from '../../fetches'

import './pokemon-select.styles.css'


const PokeSelect = ({setDataFromApi}: any) => {
   const inputRef :any = useRef()
    return(
    <div id="pokemon-select">
        <input
        id="input-search"
        ref ={inputRef}
        list ="pokeNames"
        ></input>
        <datalist id="pokeNames">
            {pokeNames.map((pokeName :string) => (
                <option
                    key={pokeName}
                >{pokeName}
                </option>
            ))}
        </datalist>
        <Button 
        variant="contained"
        onClick ={async ()=>{
            var inputValue = inputRef.current.value
            inputRef.current.value = ""
            var data = await fetchPokeInfo(inputValue)
            setDataFromApi(data)
        }}
        > Select</Button>
    </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(PokeSelect)