import React from "react";

const Card = ({ post }) => {
  const { id, body, title } = post;
  return (
    <div className="card-container">
      <div className="card">
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>body: {body}</p>
      </div>
    </div>
  );
};

export default Card;
