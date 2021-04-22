import React, { useContext } from 'react'
import styled from 'styled-components';
import { updateModal } from '../reducer/actions';
import actionTypes from '../reducer/actionTypes';
import { ReducerContext } from '../reducer/Context';
import PositionForm from './Form';
// import EditorModal from './EditorModal';

const PageContainer = styled.div`
  width: 100%
`

const Page = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const { blocks } = state;

  const { modalDispatch } = dispatch

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = e => {
    const id = e.dataTransfer.getData("id");
    modalDispatch(updateModal(<PositionForm id={id} />));
  }

  return (
    <PageContainer
      onDragOver={e => handleDragOver(e)}
      onDrop={e => handleDrop(e)}
    >
      {blocks.map(block => {
        if (block.page === 'page') {
          const Type = block.type;
          return <p key={block.type}>this is a {block.name}</p>
        }
        return null
      })}
    </PageContainer>
  )
}

export default Page
