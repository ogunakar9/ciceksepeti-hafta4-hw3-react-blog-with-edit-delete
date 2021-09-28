import "./scss/main.scss";
import CardContainer from "./components/CardContainer";
import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <>
      <CardContainer posts={posts}/>
    </>
  );
}

export default App;
