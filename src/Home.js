import React from 'react';
import styled from 'styled-components';
import Modal from './Components/Modal';
import Page from './Components/Page';
import Sidebar from './Components/Sidebar';

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Page />
      <Sidebar />
      <Modal />
    </Container>
  )
}

export default Home