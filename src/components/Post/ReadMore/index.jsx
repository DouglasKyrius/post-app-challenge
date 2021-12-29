import React from "react";

// Styled Components
import { Container, Title, List } from "./styles/readmore";

export default function ReadMore({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ReadMore.Title = function ReadMoreTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

ReadMore.List = function ReadMoreList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
