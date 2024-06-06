import styled from "styled-components";
import { Summary } from "./components/Summary";
import { WinningBids } from "./components/WinningBids";
import { WinningIds } from "./components/WinningIds";
import { Header } from "./components/Header";

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
  background: #101820 !important;
  padding: ${({ theme }) => theme.sizes[96] + " " + theme.sizes[32]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    padding: ${({ theme }) => theme.sizes[48] + " " + theme.sizes[16]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.sizes[32] + " " + theme.sizes[8]};
  }
`;

const StyledUpperRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes[24]};
  padding-left: ${({ theme }) => theme.sizes[16]};
  padding-right: ${({ theme }) => theme.sizes[16]};
  padding-bottom: ${({ theme }) => theme.sizes[40]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xxxxl}) {
    flex-direction: column;
  }
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.text} !important;

  margin: ${({ theme }) => theme.sizes[40]} 0;

  span {
    opacity: 0.2;
  }
`;

export default App;
