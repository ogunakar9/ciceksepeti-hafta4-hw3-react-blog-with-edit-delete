import "./scss/main.scss";
import CardContainer from "./components/CardContainer";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Notification, { CreateNotification } from "./components/Notification";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [timeoutVar, setTimeoutVar] = useState(null);
  const [editPostContent, setEditPostContent] = useState({
    title: "",
    body: "",
    id: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data = data.splice(0, 15);
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
    const newPosts = posts.filter((p) => p.id !== id);
    setPosts(newPosts);
    const newFiltered = filteredPosts.filter((p) => p.id !== id);
    setFilteredPosts(newFiltered);

    CreateNotification(setShowNotification, timeoutVar, setTimeoutVar);
  };

  const editCard = () => {
    setShowModal(true);
  };

  const saveEdit = (id, editTitle, editBody) => {
    const newPosts = posts.map((p) => {
      if (p.id === id) {
        p.title = editTitle;
        p.body = editBody;
      }

      return p;
    });

    setPosts(newPosts);
    setShowModal(false);

    CreateNotification(setShowNotification, timeoutVar, setTimeoutVar);
  };

  return (
    <div className="main-container">
      <Header
        filterPosts={filterPosts}
        isFiltering={isFiltering}
        setIsFiltering={setIsFiltering}
        filteredPosts={filteredPosts}
      />
      <Modal
        showModal={showModal}
        editPostContent={editPostContent}
        setEditPostContent={setEditPostContent}
        saveEdit={saveEdit}
        setShowModal={setShowModal}
      />
      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />
      <CardContainer
        posts={posts}
        removeCard={removeCard}
        editCard={editCard}
        isFiltering={isFiltering}
        filteredPosts={filteredPosts}
        showModal={showModal}
        setShowModal={setShowModal}
        saveEdit={saveEdit}
        setEditPostContent={setEditPostContent}
      />
      <Footer />
    </div>
  );
}

export default App;
