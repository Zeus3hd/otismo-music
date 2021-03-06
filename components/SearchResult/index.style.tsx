import styled from "styled-components";

export const Wrapper = styled.div``;

export const NoResult = styled.div`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 160%;
  text-shadow: 0px 0px 4px ${({ theme: { colors } }) => colors.greyTwo};
`;
