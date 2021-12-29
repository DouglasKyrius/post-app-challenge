import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.015);
  }
`;

export const ImageBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: #e2e2e2;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`;

export const Image = styled.img`
  width: 40%;
`;

export const Title = styled.h3`
  margin: 0.5rem 0 1rem 0;
  flex: 1;
`;

export const Text = styled.p`
  position: relative;
  max-height: 50px;
  overflow: hidden;
  padding-right: 0.6rem;
  font-size: 0.8rem;
  color: #a9a9a9;

  &::after {
    position: absolute;
    content: "...";
    bottom: 0;
    right: 0;
    font-size: 1.5rem;
  }

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 30px, white);
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: inherit;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const AuthorName = styled.h6``;

export const CreatedAt = styled.p`
  font-size: 0.6rem;
  color: #a9a9a9;
  font-weight: 600;
`;
