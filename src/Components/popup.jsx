import React from 'react';
import './popup.css'

const Popup = ({ isOpen, closePopup, handleDelete, postName}) => {
    if (isOpen === false) return null
  
    return (
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="popup-text-container">
            <p>¿Seguro que quiere borrar el post de {postName}?</p>
          </div>
          <button className="realizado-button" onClick={handleDelete}>
            Si
          </button>
          <button className="close-button" onClick={closePopup}>
            No
          </button>
        </div>
      </div>
    )
  }
  
  export default Popup