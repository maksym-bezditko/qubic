import styled from "styled-components";
import { Summary } from "./components/Summary";
import { WinningBids } from "./components/WinningBids";
import { WinningIds } from "./components/WinningIds";
import { Header } from "./components/Header";
import { OVERWRITE_SYNCFUSION_CSS } from "./utils/constants";

const App = () => {
  return (
    <StyledMain>
      <Header />

      <StyledH1>
        <span>Qubic</span> IPO Statistics
      </StyledH1>

      <StyledUpperRow>
        <Summary />

        <WinningIds />
      </StyledUpperRow>

      <WinningBids />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  ${OVERWRITE_SYNCFUSION_CSS}

  background: #101820 !important;
  padding: 6rem 2rem;
`;

const StyledUpperRow = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2.5rem;
`;

const StyledH1 = styled.h1`
  color: white !important;

  margin: 2.5rem 0;

  span {
    opacity: 0.2;
  }
`;

export default App;
