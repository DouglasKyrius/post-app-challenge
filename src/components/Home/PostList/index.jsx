import React from "react";

import { Container } from "./styles/postlist";

export default function PostList({ posts, children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
