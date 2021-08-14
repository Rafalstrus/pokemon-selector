import pokeNames from './all-pokemon-names.json'

import {useEffect, useRef} from 'react'
//import { useDispatch } from 'react-redux';

import './pokemon-select.styles.css'

import  {mapStateToProps, mapDispatchToProps} from '../../store-redux/operations';
import { connect } from "react-redux";

const PokeSelect = ({ setDataFromApi }) => {
   // const dispatch = useDispatch();
   const inputRef = useRef()
    useEffect(() => {
        setDataFromApi('1')
      })
    return(
    <div id="pokemon-select">
        {console.log(pokeNames)}
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
        <button onClick ={()=>{
        setDataFromApi(7)
        }}
        > change</button>
    </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PokeSelect)