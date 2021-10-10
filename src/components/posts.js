import React, { useState, useEffect } from "react";

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

  return <h2>Posts</h2>;
}
