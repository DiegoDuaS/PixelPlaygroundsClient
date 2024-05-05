import React from 'react'
import PropTypes from 'prop-types'
import './popup.css'

const Popup = ({ isOpen, closePopup, handleDelete, postName }) => {
  if (isOpen === false) return null

  return (
      <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className="popup-text-container">
            <p className='popup-text'>¿Seguro que quiere borrar el post de {postName}?</p>
          </div>
          <div className="popup-button-container">
            <button className="container-button" onClick={handleDelete}>
              Si
            </button>
            <button className="container-button" onClick={closePopup}>
              No
            </button>
          </div>
        </div>
      </div>
  )
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  postName: PropTypes.string.isRequired
}

export default Popup
