import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReducerContext } from '../reducer/Context';
import DraggableBlock from './Block';

const SidebarContainer = styled.div`
  background: #2D2D2D;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  height: 100%;
  margin-left: auto;
  height: 100vh;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  color: #fff;
`;

const BlocksContainer = styled.div``

const Sidebar = () => {
  const { state } = useContext(ReducerContext);
  const { blocks } = state;
  return (
    <SidebarContainer>
      <Header>Blocks</Header>
      <BlocksContainer>
        {blocks.map(block => {
          return <DraggableBlock label={block.name} key={block.name} />
        })}
      </BlocksContainer>
    </SidebarContainer>
  )
}

export default Sidebar
