import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const ProductItem = ({ item }) => {    
    const navigate = useNavigate();

    const navigateDescription = (id) => {
        navigate(`/items/${id}`);
      }

    return (
        <div className="product-item">
            <div className="product-section">
                <img src={item?.thumbnail} alt={item?.title} onClick={() => navigateDescription(item?.id)}/>
            </div>
            <div className="summary-section">
                <div className="price-section">
                    <div className="price">
                        <span>$</span>
                        <span>{item?.price}</span>
                    </div>
                    <div className="free-shipping">
                        <div className="available"></div>
                    </div>
                </div>
                <div className="name-section" onClick={() => navigateDescription(item?.id)}>
                    <p>
                        {item?.title}
                    </p>
                </div>
            </div >

            <div className="other-info-section">
                {
                    (item?.available_quantity !== 0) &&
                    <p>
                        Quedan {item?.available_quantity} {item?.available_quantity === 1 ? "Und" : "Und's"}
                    </p>
                }
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    item: PropTypes.object
}

export default ProductItem;