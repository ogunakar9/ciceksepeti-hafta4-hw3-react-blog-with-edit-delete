import React from "react";

export const CreateNotification = (setShowNotification) => {
    const popUp = () => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    };
    popUp();
    clearTimeout(popUp);
  }; 

const Notification = ({showNotification}) => {
    return showNotification ? (
        <div className="notification-container">
            <p>Process successfully completed.</p>
        </div>
    ) : null;
}

export default Notification;