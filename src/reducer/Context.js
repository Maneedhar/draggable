import React, { createContext, useReducer } from 'react'
import { modalReducer } from './modal';
import { initialState, reducer } from './reducer';

export const ReducerContext = createContext();

const ReducerProvider = (props) => {
  const [state, stateDispatch] = useReducer(reducer, initialState);

  const [modalState, modalDispatch] = useReducer(modalReducer, null);

  return (
    <ReducerContext.Provider 
      value={{ 
        state: {
          ...state,
          ...modalState
        },
        dispatch: { stateDispatch, modalDispatch }
      }}
    >
      {props.children}
    </ReducerContext.Provider>
  )
}

export default ReducerProvider;