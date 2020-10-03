import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function Pemberitahuan(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

			
				<Modal show={show} onHide={handleClose} animation={false}>
				  <Modal.Header closeButton>
				    <Modal.Title>Login</Modal.Title>
				  </Modal.Header>

				  <Modal.Body>
				    <p>Anda berhasil Login.</p>
				  </Modal.Body>
				  <Modal.Footer>
				    <Button variant="secondary" onClick={handleClose}>Close</Button>
				    <Button variant="primary" onClick={handleClose}>Save Usernama & Password</Button>
				  </Modal.Footer>
				</Modal>
			</>
		)

}
export default Pemberitahuan;