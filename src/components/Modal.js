import React from "react";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({
  showModal,
  saveEdit,
  setShowModal,
  editPostContent,
  setEditPostContent,
}) => {
  const { id, body, title } = editPostContent;

  return showModal ? (
    <div className="modal__container">
      <div className="modal">
        <div className="modal__header">
          <div className="modal__close-btn">
            <FaWindowClose onClick={() => setShowModal(false)} />
          </div>
          <h3>EDIT BLOG CARD ITEM</h3>
        </div>

        <div>
          <div>
            <div className="label">Title</div>
            <input
              name="title"
              defaultValue={title}
              onChange={(e) =>
                setEditPostContent({
                  ...editPostContent,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div>
            <div className="label">Content</div>
            <textarea
              rows="5"
              name="body"
              defaultValue={body}
              onChange={(e) =>
                setEditPostContent({
                  ...editPostContent,
                  body: e.target.value,
                })
              }
            />
          </div>
          <div className="modal__save-btn">
            <button
              onClick={() =>
                saveEdit(id, editPostContent.title, editPostContent.body)
              }
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
