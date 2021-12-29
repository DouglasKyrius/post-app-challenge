import React, { useEffect, useState } from "react";
import { PostListContainer } from "../../containers/postlist";
import { HeaderContainer } from "../../containers/header";
import { EmptyListContainer } from "../../containers/emptylist";
import { getAllPosts } from "../../services/api";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, []);

  return (
    <>
      <HeaderContainer />
      {posts.length ? (
        <PostListContainer posts={posts} />
      ) : (
        <EmptyListContainer />
      )}
    </>
  );
}
