const Types = {
  CHANGE_ID: "CHANGE_ID",
  DELETE_ITEM: "DELETE_ITEM"
};
// actions
const changeID = id => ({
  type: Types.CHANGE_ID,
  id: id
});

const deleteItem = id => ({
  type: Types.DELETE_ITEM,
  payload: id
});

export default {
  changeID,
  deleteItem,
  Types
};