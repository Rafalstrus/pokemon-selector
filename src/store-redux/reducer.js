import ACTIONS from "./action";

const defaultState = {
  pokemonid: 1
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CHANGE_ID: {
      console.log(action);
      let id = (action.id>=1)? ((action.id<=898)? action.id : 898) : 1 ;
      return {
          ...state, 
          pokemonid: id
      }
    }
    default:
      return state;
  }
};

export default Reducer;