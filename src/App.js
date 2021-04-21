import styled from "styled-components";
import Home from "./Home";

const PageContainer = styled.div`
  background: #E5E5E5;
  min-height: 100vh;
`;

function App() {
  return (
    <PageContainer>
      <Home />
    </PageContainer>
  );
}

export default App;
