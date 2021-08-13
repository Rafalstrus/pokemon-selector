import pokeNames from './all-pokemon-names.json'

import { useDispatch } from 'react-redux';


import  {mapStateToProps, mapDispatchToProps,
    getDataFromApi} from '../../store-redux/operations';
import { connect } from "react-redux";

const PokeSelect = () => {
    const dispatch = useDispatch();
    return(
    <div>
        {console.log(pokeNames)}
        <input
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
        <button></button>
    </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PokeSelect)