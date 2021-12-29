import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
`;

export const PublishedDate = styled.p`
  font-size: 0.8rem;
  color: #a9a9a9;
  font-weight: 500;
`;

export const Title = styled.h1``;

export const SubCategory = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 1rem;
  }
`;

export const ImageBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 512px;
  background-color: #e2e2e2;
  border-radius: 20px;
  margin-bottom: 0.5rem;

  @media (max-width: 1000px) {
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 50%;

  @media (max-width: 1000px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Text = styled.p`
  padding: 1rem;
  margin-top: 1.5rem;
  line-height: 1.5;
`;
