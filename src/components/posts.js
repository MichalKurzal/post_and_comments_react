import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";

import Post from "./post";

export default function Posts() {
  const [_posts, setposts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataJSON = await data.json();
      console.log(dataJSON);
      setposts(dataJSON);
    } catch {
      console.log("Error! No connection to API");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {_posts.map((post) => (
        <Post key={post.id} postContent={post} />
      ))}
    </Box>
  );
}
