import ACTIONS from "./action";

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