import React, { useContext } from 'react';
import styled from 'styled-components';
import { updateModal } from '../reducer/actions';
import { ReducerContext } from '../reducer/Context';

const ModalOverlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
`;

const Modal = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const { modal } = state;
  const { modalDispatch } = dispatch
  function closeModal() {
    if (
      modal &&
      modal.props.onClose &&
      typeof modal.props.onClose === 'function'
    ) {
      modal.props.onClose();
    }
    setTimeout(() => modalDispatch(updateModal(null)));
  }

  if (!modal || modal.props.page === 'page' || !modal.props.id) return null;
  return (
    <ModalOverlay
      onClick={closeModal}
    >
      <div onClick={e => e.stopPropagation()}>{modal}</div>
    </ModalOverlay>
  )
}

export default Modal;
