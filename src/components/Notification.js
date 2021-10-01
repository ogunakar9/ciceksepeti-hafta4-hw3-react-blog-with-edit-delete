import React from "react";

//send notification that stays on sceen for 3 seconds
export const CreateNotification = (
  setShowNotification,
  timeoutVar,
  setTimeoutVar
) => {
  setShowNotification(true);
  clearTimeout(timeoutVar);
  const delay = setTimeout(() => {
    setShowNotification(false);
  }, 3000);
  setTimeoutVar(delay);
};

const Notification = ({ showNotification }) => {
  return showNotification ? (
    <div className="notification-container">
      <p>Process successfully completed.</p>
    </div>
  ) : null;
};

export default Notification;
