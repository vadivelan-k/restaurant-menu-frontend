import Modal from 'react-bootstrap/Modal';
import samplePizza from '../assets/pizza.jpg';

interface ModalProps {
  title: String;
  body: String;
  show: boolean;
  handleClose: any;
  buttonText: String;
  buttonClass: string;
}

const ModalComponent = ({ title, body, show, handleClose, buttonText, buttonClass }: ModalProps) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <div style={{display: 'flex'}}>
          <img src={samplePizza} style={{ width: '300px', height: '450px'}} />
        </div>

        <div>
          <Modal.Header closeButton>
            <Modal.Title>{ title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>{ body }</Modal.Body>
          <Modal.Footer>
            <button className={buttonClass} onClick={handleClose}>
              { buttonText }
            </button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
