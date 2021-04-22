import actionTypes from "./actionTypes";

export const updateModal = (modal) => {
  return {
    type: actionTypes.updateModal,
    modal,
  };
}

export const updateDragged = (payload) => {
  return {
    type: actionTypes.dragged,
    payload
  };
};
