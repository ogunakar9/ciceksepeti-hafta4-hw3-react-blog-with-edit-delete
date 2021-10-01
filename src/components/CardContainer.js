import React from "react";
import Card from "./Card";

const CardContainer = ({
  posts,
  removeCard,
  editCard,
  filteredPosts,
  isFiltering,
  showMessage,
  showModal,
  setShowModal,
  saveEdit,
  editPostContent,
  setEditPostContent,
}) => {
  return (
    <div className="cards__main-container">
      {isFiltering ? (
        showMessage ? (
          <div>
            <h1>There aren't any cards related to your search</h1>
          </div>
        ) : (
          filteredPosts.map((post) => {
            return (
              <Card
                key={post.id}
                post={post}
                removeCard={removeCard}
                editCard={editCard}
                showModal={showModal}
                setShowModal={setShowModal}
                saveEdit={saveEdit}
                editPostContent={editPostContent}
                setEditPostContent={setEditPostContent}
              />
            );
          })
        )
      ) : (
        posts.map((post) => {
          return (
            <Card
              key={post.id}
              post={post}
              removeCard={removeCard}
              editCard={editCard}
              showModal={showModal}
              setShowModal={setShowModal}
              saveEdit={saveEdit}
              editPostContent={editPostContent}
              setEditPostContent={setEditPostContent}
            />
          );
        })
      )}
    </div>
  );
};

export default CardContainer;
