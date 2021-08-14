import ACTIONS from "./action";
import {getDataFromApi} from './fetchers'

const defaultState = {
  pokemonid: 1,
  pokemoninfo: {},
  pokemonName: ""
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CHANGE_ID: {
      console.log(action);
      let id = (action.id >= 1) ? ((action.id <= 898) ? action.id : 898) : 1;
      return {
        ...state,
        pokemonid: id
      }
    }
    case ACTIONS.Types.SET_DATA_FROM_API: {
      var info = getDataFromApi(3)
      console.log(info)
      return {
        ...state,
        pokemoninfo: action.info
      }
    }
    default:
      return state;
  }
};

export default Reducer;