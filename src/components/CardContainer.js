import React from "react";
import Card from "./Card";

const CardContainer = ({
  posts,
  removeCard,
  editCard,
  filteredPosts,
  isFiltering,
}) => {
  return (
    <div className="cards__main-container">
      {isFiltering
        ? filteredPosts.map((post) => {
            return (
              <Card
                key={post.id}
                post={post}
                removeCard={removeCard}
                editCard={editCard}
              />
            );
          })
        : posts.map((post) => {
            return (
              <Card
                key={post.id}
                post={post}
                removeCard={removeCard}
                editCard={editCard}
              />
            );
          })}
    </div>
  );
};

export default CardContainer;
