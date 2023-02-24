import React, { useState, useEffect } from "react";

function FetchPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/blogs")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={post.image} alt={post.imageLabel} />
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}

export default FetchPosts;
