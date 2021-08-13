import ACTIONS from "./action";
import store from './store';

const mapStateToProps = state => ({
    item: state.item
});

const mapDispatchToProps = dispatch => ({
    changeID: item => dispatch(ACTIONS.changeID(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export{
    mapStateToProps,
    mapDispatchToProps
}
export default store