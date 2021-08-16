import ACTIONS from "./action";
import store from './store';



const mapStateToProps = (state :any) => ({
    item: state.item
});

const mapDispatchToProps = (dispatch :any) => ({
    changeID: (id :number)=> dispatch(ACTIONS.changeID(id)),
    setDataFromApi: (data :any) => dispatch(ACTIONS.setDataFromApi(data)),
    changeName: (name :string) => dispatch(ACTIONS.changeName(name))
});

export {
    mapStateToProps,
    mapDispatchToProps,
}
export default store