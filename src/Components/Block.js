import React from 'react';
import styled from 'styled-components';

import icon from '../assets/grip-vertical.svg'

const BlockWrapper = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background: #fff;
  width: 278px;
  height: 50px;
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  cursor: pointer;

  .label {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .icon {
    margin: 0 10px;
  }
`;

const DraggableBlock = ({ label }) => {
  const handleDragStart = (e, label) => {
    e.dataTransfer.setData("id", label);
  }

  return (
      <BlockWrapper
        draggable
        onDragStart={(e) => handleDragStart(e, label)}
      >
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="label">{label}</div>
      </BlockWrapper>
  )
}



export default DraggableBlock;
