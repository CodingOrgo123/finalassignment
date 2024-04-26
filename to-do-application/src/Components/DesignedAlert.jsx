import React, { useState, useEffect } from 'react';
import '../Styles/DesignedAlert.css'; // Import your custom alert styles

const DesignedAlert = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false); // Set initial visibility to false

  useEffect(() => {
    if (message) {
      setVisible(true); // Show the alert only if there's a message
      const timer = setTimeout(() => {
        handleClose();
      }, 7000); // Auto-dismiss after 7 seconds

      return () => clearTimeout(timer);
    }
  }, [message]); // Trigger effect when message changes

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return visible ? (
    <div className={`designed-alert ${type}`}>
      <div className="alert-content">
        <p style={{ color: 'darkblue' }}>{message}</p>
      </div>
      <span className="close" onClick={handleClose}>&times;</span>
      <div className="bottom-line"></div>
    </div>
  ) : null;
};

export default DesignedAlert;
