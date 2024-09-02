import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "./api/posts";

const PostsList1 = () => {
  const postsQuery = useQuery({
    querykey: ["posts"],
    queryFn: getPosts,
  });

  if (postsQuery.status === "loading") return <h1>Loading...</h1>;
  if (postsQuery.status === "error") {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  }

  console.log(postsQuery.data);
  return (
    <div>
      <h1>Posts List 1</h1>
      <ol>
        {postsQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default PostsList1;
