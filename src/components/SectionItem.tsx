import { useState } from 'react';
import classNames from 'classnames';
import ModalComponent from './ModalComponent';
import samplePizza from '../assets/pizza.jpg';
import './SectionItem.css';

interface ItemProps {
  item: {
    id: String;
    label: String;
    description: String;
    price: Number;
    disabled: Boolean;
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

  const formatPrice = (price: any) => {
    return parseFloat(price).toFixed(2);
  }

  const buttonClass = classNames('add-button', { 'disabled': item.disabled });
  const buttonText = item.disabled ? 'Sold Out' : 'Add';

  return (
    <>
      <div className="col" key={`item-${item.id}`}>
        <div className="card mb-4 rounded-3 shadow-lg">
          <div className="card-body" onClick={handleShow}>
            <div>
              <img className='product-image' src={samplePizza} />
            </div>
            <h4 className="item-name">{item.label}</h4>
            <p className="card-text">{item.description}</p>
            <div className="flex flex-col price-container">
              <div className="price">
                {`$${formatPrice(item.price)}`}
              </div>
              <div className="button-container">
                <button className={buttonClass} type="button" data-testid="button">
                  { buttonText }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalComponent
        title={item.label}
        body={item.description}
        show={display}
        handleClose={handleClose}
        buttonText={buttonText}
        buttonClass={buttonClass}
      />
      
    </>
  )
}

export default SectionItem;
