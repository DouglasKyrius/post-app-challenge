import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 6rem auto;

  @media (min-width: 1200px) {
    width: 900px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2.5rem;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
