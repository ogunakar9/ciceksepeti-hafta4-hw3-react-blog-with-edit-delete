import "./scss/main.scss";
import CardContainer from "./components/CardContainer";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  const filterPosts = (searchQuery) => {
    const newFiltered = posts.filter((p) => {
      return (
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setFilteredPosts(newFiltered);
  };

  const removeCard = (id) => {
    const newPosts = () => posts.filter((p) => p.id !== id);
    setPosts(newPosts);
    const newFiltered = () => filteredPosts.filter((p) => p.id !== id);
    setFilteredPosts(newFiltered);

    // TODO: find out why deleting every post doesnt show message.
    // console.log(newPosts.length) always 0;
    if (filteredPosts.length === 0 || newPosts.length === 0) {
      setShowMessage(true);
      // console.log(showMessage) always true;
    } else {
      setShowMessage(false);
    }
  };

  const editCard = (id) => {
    // const newPosts = () => posts.filter(p => p.id !== id);
  };

  return (
    <div className="main-container">
      <Header
        filterPosts={filterPosts}
        isFiltering={isFiltering}
        setIsFiltering={setIsFiltering}
        filteredPosts={filteredPosts}
        setShowMessage={setShowMessage}
      />
      <CardContainer
        posts={posts}
        removeCard={removeCard}
        editCard={editCard}
        isFiltering={isFiltering}
        filteredPosts={filteredPosts}
        showMessage={showMessage}
      />
      <Footer />
    </div>
  );
}

export default App;
