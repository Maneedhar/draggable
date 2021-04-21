import React from 'react';
import styled from 'styled-components';
import Sidebar from './Components/Sidebar';

const Container = styled.div`
  display: flex;
`;

const Page = styled.div``;

const Home = () => {
  return (
    <Container>
      <Page />
      <Sidebar />
    </Container>
  )
}

export default Home
