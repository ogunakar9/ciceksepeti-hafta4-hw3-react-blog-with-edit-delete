import React from "react";
import Card from "./Card";

const CardContainer = ({
  posts,
  removeCard,
  editCard,
  filteredPosts,
  isFiltering,
  showModal,
  setShowModal,
  saveEdit,
  editPostContent,
  setEditPostContent,
  loading,
}) => {
  return (
    <div className="cards__main-container">
      {isFiltering ? (
        filteredPosts.length === 0 && !loading ? (
          //no cards contain searched text and only show msg when not loading
          <div className="cards__no-card-message">
            <h1>There aren't any cards related to your search</h1>
          </div>
        ) : (
          //filtered array
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
      ) : //here length = 0 when all cards deleted and only show msg when not loading
      posts.length === 0 && !loading ? (
        <div>
          <h1>There aren't any cards related to your search</h1>
        </div>
      ) : (
        //array without filter but includes edits and removals
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
