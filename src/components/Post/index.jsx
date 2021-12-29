import React from "react";
import {
  Container,
  Header,
  PublishedDate,
  Title,
  SubCategory,
  ImageBackground,
  Image,
  Text,
} from "./styles/post";

export default function Post({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Post.Header = function PostHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Post.Date = function PostDate({ children, ...restProps }) {
  return <PublishedDate {...restProps}>{children}</PublishedDate>;
};

Post.Title = function PostTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Post.SubCategory = function PostSubCategory({ children, ...restProps }) {
  return <SubCategory {...restProps}>{children}</SubCategory>;
};

Post.Image = function PostImage({ children, ...restProps }) {
  return (
    <ImageBackground>
      <Image {...restProps} />
    </ImageBackground>
  );
};

Post.Text = function PostText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
