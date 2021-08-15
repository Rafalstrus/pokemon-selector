import ACTIONS from "./action";

const defaultState = {
  pokemonid: 1,
  pokemoninfo: {},
  pokemonname: ""
};

const Reducer =  (state = defaultState, action) => {
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
      let id = (action.info.id >= 1) ? ((action.info.id <= 898) ? action.info.id : 898) : 1;
      if(action.info.error !=="404"){
        console.log(state)
        return {
          ...state,
          pokemoninfo: action.info,
          pokemonname: action.info.name,
          pokemonid: id
        }
      }
      return{ ...state}
    }
    case ACTIONS.Types.CHANGE_NAME: {
      return {
        ...state,
        pokemonname: action.name
      }
    }
    default:
      return state;
  }
};

export default Reducer;