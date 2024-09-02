import axios from "axios";

export function getPosts() {
  return axios
    .get("http://localhost:4000/posts", { params: { _sort: "title" } })
    .then((res) => {
      console.log("Response data:", res.data); // Log the response data
      return res.data;
    })
    .catch((error) => {
      console.error("Error fetching posts:", error); // Log any errors
      throw error;
    });
}
