import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const Card = ({
  post,
  removeCard,
  editCard,
  editPostContent,
  setEditPostContent,
}) => {
  const { id, body, title } = post;
  const srcImg = `https://picsum.photos/300?random=${id + 1}`;

  const handleEdit = () => {
    setEditPostContent({
      ...editPostContent,
      id,
      title,
      body,
    });

    editCard();
  };
  return (
    <>
      <div className="card__container">
        <div className="card">
          <div className="card__img">
            <img src={srcImg} alt="card__img" />
          </div>
          <div className="card__non-image-container">
            <div className="card__text">
              <p>id: {id}</p>
              <p>title: {title}</p>
              <p>body: {body}</p>
            </div>
            <div className="card__icons">
              <FaTrashAlt onClick={() => removeCard(id)} />
              <FaEdit onClick={() => handleEdit()} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
