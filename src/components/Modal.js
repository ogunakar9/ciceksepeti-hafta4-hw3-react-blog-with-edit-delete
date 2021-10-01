import React from "react";

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
            <span onClick={() => setShowModal(false)}>
              <i className="ri-close-line" />
            </span>
          </div>
          <h3>EDIT POST</h3>
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
              rows="7"
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
  ) : null;
};

export default Modal;
