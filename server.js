const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Use CORS to allow requests from your React app
app.use(cors({ origin: "http://localhost:3000" }));

// Sample posts data
const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

// GET endpoint to return posts
app.get("/posts", (req, res) => {
  // Sorting the posts by title if requested
  const sortedPosts = posts.sort((a, b) => a.title.localeCompare(b.title));
  res.json(sortedPosts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
