import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PostItemContainer } from "./postlist";
import { EmptyListContainer } from "./emptylist";
import { Post, ReadMore } from "../components";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";
import { getAllPosts, getOnePost } from "../services/api";

export function PostContainer() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const postItem = await getOnePost(id);
    const allPosts = await getAllPosts();

    const filteredPosts = allPosts.filter(
      (postFilter) => postFilter.id !== postItem.id
    );
    setPost(postItem);
    setPosts(filteredPosts);
  }, [id]);

  return post ? (
    <>
      <Post>
        <Post.Header>
          <Post.Date>Published December 28, 2021</Post.Date>
          <Post.Title>{capitalizeFirstLetter(post.title)}</Post.Title>
        </Post.Header>
        <Post.Image src="/assets/images/223791.png" alt="cover" />
        <Post.Text>{post.body}</Post.Text>
      </Post>
      <ReadMore>
        <ReadMore.Title>Read More</ReadMore.Title>
        <ReadMore.List>
          {posts.length &&
            posts
              .slice(0, 4)
              .map((postFiltered) => (
                <PostItemContainer post={postFiltered} key={postFiltered.id} />
              ))}
        </ReadMore.List>
      </ReadMore>
    </>
  ) : (
    <EmptyListContainer />
  );
}
