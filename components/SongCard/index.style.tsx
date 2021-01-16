import styled from "styled-components";

export const Container = styled.a`
  height: 300px;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  :hover {
    .details {
      opacity: 1;
    }
  }
  box-shadow: rgba(100, 100, 111, 0.6) 0px 7px 29px 0px;
`;

export const CardImg = styled.div<{ img: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const CardDetails = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #292c4b 100%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0.6rem;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

export const SongName = styled.p`
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  margin: 0.5rem 0;
`;
export const AlbumName = styled.p`
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const ArtistName = styled.p`
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 600;
  margin: 0.5rem 0;
`;

export const Play = styled.div`
  margin: 1rem 0;
  > svg {
    height: 2rem;
    fill: ${({ theme: { colors } }) => colors.white};
  }
`;
