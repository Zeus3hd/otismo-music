import styled from "styled-components";

export const Wrapper = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  top: 0;
  left: 0;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: ${({ theme: { colors }, scrolled }) =>
    scrolled ? colors.cardBackground : "transparent"};
  transition: all 0.4s ease-in-out;
  box-shadow: ${({ theme: { colors }, scrolled }) =>
    scrolled
      ? "0px 3px 4px rgba(0, 0, 0, 0.05)"
      : "0px 3px 4px rgba(0, 0, 0, 0)"};
  > button,
  a {
    color: ${({ theme: { colors }, scrolled }) =>
      scrolled ? colors.textSecondary : colors.textPrimary};
  }
`;

export const BackButton = styled.button`
  font-family: inherit;
  background: transparent;
  font-weight: 500;
  border: none;
  text-shadow: 0 0 2px ${({ theme: { colors } }) => colors.greyThree};
  font-size: 1.3rem;
  cursor: pointer;
`;

export const HomeLink = styled.a`
  font-family: inherit;
  background: transparent;
  font-weight: 500;
  border: none;
  text-shadow: 0 0 2px ${({ theme: { colors } }) => colors.greyThree};
  font-size: 1.3rem;
  cursor: pointer;
`;

export const HomeDarkContainer = styled.div`
  display: flex;
  align-items: center;
  > .toggler {
    margin-left: 1rem;
  }
`;
