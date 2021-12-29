import React from "react";

// Styled Components
import { Container, Image } from "./styles/emptylist";

export default function EmptyList({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

EmptyList.Image = function EmptyListImage({ ...restProps }) {
  return <Image {...restProps} />;
};
