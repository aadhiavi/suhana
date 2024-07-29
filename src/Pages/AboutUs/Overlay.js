import React from 'react';
import './AboutUs.css';

const Overlay = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="overlay">
            <div className="overlay-content">
                <h2>Form Submitted Successfully!</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Overlay;
