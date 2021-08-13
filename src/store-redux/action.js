const Types = {
  CHANGE_ID: "CHANGE_ID",
  SET_DATA_FROM_API: "SET_DATA_FROM_API"
};
// actions
const changeID = id => ({
  type: Types.CHANGE_ID,
  id: id
});

const setDataFromApi = info =>({
  type : Types.SET_DATA_FROM_API,
  payload: info
})
const exportedObject ={
  changeID,
  setDataFromApi,
  Types
}
export default exportedObject