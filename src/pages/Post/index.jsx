import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components/macro";
import { PostContainer } from "../../containers/post";

export const GoBack = styled(ReactRouterLink)`
  text-decoration: none;
  font-size: 0.8rem;
  color: #a9a9a9;
  font-weight: 500;
  margin-bottom: 2rem;
  display: block;
`;

export default function Post() {
  return (
    <>
      <GoBack to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </GoBack>
      <PostContainer />
    </>
  );
}
