import React, { useContext } from 'react'
import styled from 'styled-components';
import { deleteElement, dropped, updateModal } from '../reducer/actions';
import { ReducerContext } from '../reducer/Context';
import PositionForm from './Form';

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Label = styled.label`
  position: absolute;
  top: ${props => props.ypos}px;
  left: ${props => props.xpos}px;
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
  &:hover {
    border: 2px solid #D95409;
  }
  &.active {
    border: 2px solid #D95409;
  }
`;

const Input = styled.input`
  position: absolute;
  top: ${props => props.ypos}px;
  left: ${props => props.xpos}px;
  padding: 8px 12px;
  min-height: 24px;
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  border: 1px solid #D9D9D9;
  &:focus {
    outline: none;
    border: 2px solid #D95409;
  }
`;

const Button = styled.div`
  position: absolute;
  top: ${props => props.ypos}px;
  left: ${props => props.xpos}px;
  font-size: ${props => props.fontSize}px;
  font-weight: ${props => props.fontWeight};
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  color: #fff;
  background: #0044C1;
  border-radius: 2px;
  border: 2px solid #0044C1;
  width: 140px;
  &:focus {
    outline: none;
    border: 2px solid #D95409;
  }
`;

const Page = () => {
  const { state, dispatch } = useContext(ReducerContext);
  const { blocks } = state;

  const { modalDispatch, stateDispatch } = dispatch;

  const handleDragStart = (e, label) => {
    e.dataTransfer.setData("id", label);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = e => {
    const id = e.dataTransfer.getData("id");
    const { clientX, clientY } = e;
    const { page } = blocks.filter(block => block.name === id)[0];
    stateDispatch(dropped({ payload: { id, clientX, clientY } }));
    modalDispatch(updateModal(<PositionForm id={id} page={page} />));
  }

  const handleKeyDown = (e, name) => {
    if (e.keyCode === 13) {
      modalDispatch(updateModal(<PositionForm id={name} />));
    } else if (e.keyCode === 46) {
      stateDispatch(deleteElement(name));
    }
  };

  return (
    <PageContainer
      onDragOver={e => handleDragOver(e)}
      onDrop={e => handleDrop(e)}
    >
      {blocks.map(block => {
        const { type, text, page, name } = block;        
        if (page === 'page') {
          if (type === 'input') {
            return (
              <Input
                key={type}
                {...block}
                draggable
                onDragStart={(e) => handleDragStart(e, name)}
                onKeyDown={e => handleKeyDown(e, name )}
              />
            )
          }
          const Component = type === 'button' ? Button : Label
          return (
            <Component
              tabIndex="0"
              draggable
              onDragStart={(e) => handleDragStart(e, name)}
              key={type} 
              {...block}
              onKeyDown={e => handleKeyDown(e, name )}
              onClick={(e) => {
                e.target.classList.toggle('active')
              }}
            >
              {text}
            </Component>
          )
        }
        return null;
      })}
    </PageContainer>
  )
}

export default Page;
