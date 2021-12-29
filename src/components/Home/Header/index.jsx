import React from "react";
import { Container, Title, SubTitle } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
