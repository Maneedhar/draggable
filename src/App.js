import styled from "styled-components";
import Home from "./Home";
import ReducerProvider from "./reducer/Context";

const PageContainer = styled.div`
  background: #E5E5E5;
  min-height: 100vh;
`;

function App() {
  return (
    <ReducerProvider>
      <PageContainer>
        <Home />
      </PageContainer>
    </ReducerProvider>
  );
}

export default App;
