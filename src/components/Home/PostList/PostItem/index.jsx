import React from "react";

import {
  Item,
  ImageBackground,
  Image,
  Title,
  Text,
  Footer,
  AuthorContainer,
  AuthorAvatar,
  AuthorName,
  CreatedAt,
  Link,
} from "./styles/postitem";

export default function PostItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
}

PostItem.Image = function PostItemImage({ ...restProps }) {
  return (
    <ImageBackground>
      <Image {...restProps} />
    </ImageBackground>
  );
};

PostItem.Title = function PostItemTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

PostItem.Text = function PostItemText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

PostItem.Footer = function PostItemFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

PostItem.Author = function PostItemFooterAuthor({ children, ...restProps }) {
  return <AuthorContainer {...restProps}>{children}</AuthorContainer>;
};

PostItem.AuthorAvatar = function PostItemFooterAuthorAvatar({
  children,
  ...restProps
}) {
  return <AuthorAvatar {...restProps}>{children}</AuthorAvatar>;
};

PostItem.AuthorName = function PostItemFooterAuthorName({
  children,
  ...restProps
}) {
  return <AuthorName {...restProps}>{children}</AuthorName>;
};

PostItem.CreatedAt = function PostItemFooterCreatedAt({
  children,
  ...restProps
}) {
  return <CreatedAt {...restProps}>{children}</CreatedAt>;
};

PostItem.Link = function PostItemLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
