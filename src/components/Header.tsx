import styled from "styled-components";
import LOGO from "../assets/logo.png";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={LOGO} alt="logo" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2.5rem 0;
`;

const StyledImage = styled.img`
  width: 12.5rem;
`;
