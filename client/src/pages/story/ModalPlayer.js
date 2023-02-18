import React, { useState } from 'react'

function ModalPlayer() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    console.log('click')
    setShowModal(!showModal)
  }

  return (
    <>
      <div
        className={`modal fade ${showModal ? 'show d-block' : 'show d-none'}`}
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        onClick={handleClick}
      >
        <div className="modal modal-dialog-centered">
          <div
            className="modal-content"
            style={{
              height: 'calc(100vh - 75px)',
              position: 'absolute',
              bottom: '0px',
            }}
          >
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalPlayer
