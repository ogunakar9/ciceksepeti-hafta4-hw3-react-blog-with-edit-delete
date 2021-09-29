import React from "react";
import Card from "./Card";

const CardContainer = ({posts}) => {
  return (
    <div className="cards__main-container">
      {posts.map((post) => {
        return <Card key={post.id} post={post} />;
      })}
    </div>
  );
};

export default CardContainer;
