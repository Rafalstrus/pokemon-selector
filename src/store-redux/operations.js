import ACTIONS from "./action";
import store from './store';


export function getDataFromApi({setDataFromApi}) {
    return async function({setDataFromApi}) {
      return await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
        .then(({ data }) => {
        setDataFromApi('{art: "a"}');
      });
    };
  }

const mapStateToProps = state => ({
    item: state.item
});

const mapDispatchToProps = dispatch => ({
    changeID: id => dispatch(ACTIONS.changeID(id)),
    setDataFromApi: data => dispatch(ACTIONS.setDataFromApi(data))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store