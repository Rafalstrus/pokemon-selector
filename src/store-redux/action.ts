const Types = {
  CHANGE_ID: "CHANGE_ID",
  SET_DATA_FROM_API: "SET_DATA_FROM_API",
  CHANGE_NAME: "CHANGE_NAME"
};
// actions
const changeID = (id :number) => ({
  type: Types.CHANGE_ID,
  id: id 
});
const changeName = (name :string) =>({
  type : Types.CHANGE_NAME,
  name: name
})
const setDataFromApi = (info :any) =>({
  type : Types.SET_DATA_FROM_API,
  info: info
})
const exportedObject ={
  changeID,
  changeName,
  setDataFromApi,
  Types
}
export default exportedObject