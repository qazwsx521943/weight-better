import React, { useState } from 'react'
import './test.css'
import { Button, Box, Typography, Modal } from '@mui/material'
import UserInfo from './components/UserInfo'

function Test() {
  const [showModal, setShowModal] = useState(false)
  const handleClick = () => {
    console.log('click')
    setShowModal(!showModal)
  }

  return (
    <div>
      {/* <button
        style={{ backgroundColor: 'salmon' }}
        onClick={() => {
          handleClick()
        }}
      >
        Click
      </button>
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
      </div> */}
      {/* <Button onClick={handleClick}>Open modal</Button>
      <Modal
        className="modalBox"
        open={showModal}
        onClose={handleClick}
        sx={{ height: '100px' }}
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

      <UserInfo imgPath={'kris.jpg'} username={'kris1997'}></UserInfo>
    </div>
  )
}

export default Test
