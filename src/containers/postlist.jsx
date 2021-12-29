import React from "react";
import { PostList, PostItem } from "../components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export function PostListContainer({ posts }) {
  const { count } = useInfiniteScroll();

  return (
    <PostList>
      {posts.slice(0, count).map((post) => (
        <PostItemContainer post={post} key={post.id} />
      ))}
    </PostList>
  );
}

export function PostItemContainer({ post: { body, title, id } }) {
  return (
    <PostItem>
      <PostItem.Link to={`/post/${id}`}>
        <PostItem.Image src="/assets/images/223791.png" alt="cover" />
        <PostItem.Title>{capitalizeFirstLetter(title)}</PostItem.Title>
        <PostItem.Text>{body}</PostItem.Text>
        <PostItem.Footer>
          <PostItem.Author>
            <PostItem.AuthorAvatar
              src="/assets/images/author.jpg"
              alt="avatar"
            />
            <div>
              <PostItem.AuthorName>John Doe</PostItem.AuthorName>
              <PostItem.CreatedAt>December 28, 2021</PostItem.CreatedAt>
            </div>
          </PostItem.Author>
          <p>➝</p>
        </PostItem.Footer>
      </PostItem.Link>
    </PostItem>
  );
}
