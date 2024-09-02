import "./App.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PostsList1 from "./PostsList1";
import PostsList2 from "./PostsList2";
import { useState } from "react";

// const POSTS = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 2" },
// ];

function App() {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  // const queryClient = useQueryClient();
  // const postsQuery = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: (obj) =>
  //     wait(1000).then(() => {
  //       console.log(obj);
  //       return [...POSTS];
  //     }),
  //   // queryFn: () => Promise.reject("Error Message"),
  // });

  // const newPostMutation = useMutation({
  //   mutationFn: (title) => {
  //     return wait(1000).then(() =>
  //       POSTS.push({ id: crypto.randomUUID(), title })
  //     );
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["posts"]);
  //   },
  // });

  // if (postsQuery.isLoading) return <h1>Loading...</h1>;
  // if (postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>;

  return (
    <div>
      {/* {postsQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate("New Post")}
      >
        Add New
      </button> */}

      <button onClick={() => setCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => setCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <br />
      {currentPage}
    </div>
  );
}

// function wait(duration) {
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }

export default App;
