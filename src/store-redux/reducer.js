import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [],
  pokemonid: 1
};

const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CHANGE_ID: {
      console.log(action);
      return {
          ...state, pokemonid: action.id
      }
    }

    case ACTIONS.Types.DECREMENTID: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default Reducer;