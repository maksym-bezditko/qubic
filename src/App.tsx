import styled from "styled-components";
import { Summary } from "./components/Summary";
import { WinningBids } from "./components/WinningBids";
import { WinningIds } from "./components/WinningIds";

const App = () => {
  return (
    <StyledMain>
      <h1>Qubic IPO Statistics</h1>

      <StyledUpperRow>
        <Summary />

        <WinningIds />
      </StyledUpperRow>

      <WinningBids />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  padding: 100px 32px 100px 32px;
`;

const StyledUpperRow = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 15px;
  padding-right: 15px;
`;

export default App;
