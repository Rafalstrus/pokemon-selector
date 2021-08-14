import ACTIONS from "./action";
import store from './store';



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