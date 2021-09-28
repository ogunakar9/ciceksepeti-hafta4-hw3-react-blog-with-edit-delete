import "./scss/main.scss";
import CardContainer from "./components/CardContainer";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  //TODO: filter items
  const filterPosts = () => {

  }

  return (
    <div className="main-container">
      <Header />
      <CardContainer posts={posts}/>
      <Footer />
    </div>
  );
}

export default App;
