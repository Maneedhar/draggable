import actionTypes from "./actionTypes"

export const initialState = {
  blocks: [
    {
      name: 'Label',
      type: 'label',
      page: 'sidebar',
    },
    {
      name: 'Input',
      type: 'input',
      page: 'sidebar',
    },
    {
      name: 'Button',
      type: 'button',
      page: 'sidebar',
    }
  ],
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.dragged:
      const draggedBlocks = state.blocks.filter(block => {
        if (block.name === action.payload) {
          block.page = 'page';
        }
        return block;
      });
      return {
        ...state,
        blocks: draggedBlocks,
      }
    default:
      return state
  }
}