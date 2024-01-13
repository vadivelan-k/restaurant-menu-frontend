import { useState } from 'react';
import ModalComponent from './ModalComponent';
import './SectionItem.css';

interface ItemProps {
  item: {
    id: String;
    label: String;
    description: String;
    price: Number;
  }
}

const SectionItem = ({ item }: ItemProps) => {
  const [display, setDisplay] = useState(false);
  const handleClose = () => {
    setDisplay(false);
  }
  const handleShow = () => {
    setDisplay(true);
  }

  return (
    <>
      <div className="col" key={`item-${item.id}`}>
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{item.label}</h4>
          </div>
          <div className="card-body" onClick={handleShow}>
            <p className="card-text">{item.description}</p>
            <span className='price'>Price {`$${item.price}`}</span>
            { display }
            <button type="button" className="w-50 btn btn-sm btn-outline-primary">Add</button>
          </div>
        </div>
      </div>
      <ModalComponent
        title={item.label}
        body={item.description}
        show={display}
        handleClose={handleClose}
      />
    </>
  )
}

export default SectionItem;
