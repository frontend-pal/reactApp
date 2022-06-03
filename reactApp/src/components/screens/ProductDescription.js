import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchItemDescription } from '../../actions/items';

export const ProductDescription = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const { itemId } = useParams();
    const dispatch = useDispatch();
    const { description: productDetails } = useSelector(state => state.productList);
    const condition = productDetails.attributes.find(x => x.id === 'ITEM_CONDITION') || { value_name: '' };
    const pictures = productDetails.pictures && productDetails.pictures.length > 0 ? productDetails.pictures : [];

    useEffect(() => {
        dispatch(fetchItemDescription(itemId));
    }, [dispatch, itemId])

    useEffect(() => {
        getPicture();
    }, []);

    /**
     * Este metodo llama imagenes del arreglo de urls
     * se usa para asemejar un carrusel basico
     * @param direction Direccion del carousel
    */
    const getPicture = (direction) => {
        // const currentIndex = pictures.findIndex(x => x.id === currentPicture?.id);
        const picturesLength = pictures.length - 1;

        if (pictures.length !== 0) {
            if (direction === 'next') {
                if (count === picturesLength) {
                    setCount(0)
                } else {
                    setCount(count + 1)
                }
            } else {
                if (count === 0) {
                    setCount(picturesLength)
                } else {
                    setCount(count - 1)
                }
            }
        }

    }

    const handleBackButton = () => {

        navigate(-1);
    }

    return (
        <>
            {
                (productDetails) &&
                <div className="full-width">
                    {/* start temp - navbar */}
                    <div className="meli-nav container">
                        <ul className="meli-nav-list">
                            <li className="list-item">
                                Electrónica Audio y Video : Pos
                            </li>
                            <li className="list-item">
                                Reproductores
                            </li>
                            <li className="list-item">
                                iPod / iPad
                            </li>
                            <li className="list-item">
                                32 GB
                            </li>
                        </ul>
                    </div>
                    {/* end temp - navbar */}

                    <div className="container mt-1 ml-1 mr-1 meli-card no-padding">
                        <div className="product-detail">
                            <div className="product-section">
                                <img src={pictures[count]?.url} alt={productDetails?.title} />
                                {
                                    (pictures?.length !== 0) &&
                                    <>
                                        <div className="btn-nav back" onClick={() => getPicture('back')}>
                                            <i className="fi fi-angle-left"></i>
                                        </div>
                                        <div className="btn-nav next" onClick={() => getPicture('next')}>
                                            <i className="fi fi-angle-right"></i>
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="summary-section">
                                <div className="status-section">
                                    <span>{condition?.value_name}</span>
                                    <span> - {productDetails?.sold_quantity} vendidos</span>
                                </div>
                                <div className="name-section">
                                    <p>
                                        {productDetails?.title}
                                    </p>
                                </div>
                                <div className="price-section mb-2">
                                    <div className="price">
                                        <span>$</span>
                                        <span>{productDetails?.price}</span>
                                    </div>
                                </div>
                                <div className="button-section mt-2">
                                    <button className="btn blue w-100 p-1">
                                        Comprar
                                    </button>
                                    <button className="btn  w-100 mt-3 p-1" onClick={handleBackButton}>
                                        &#60; Atras
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-summary">
                            <div className="summary-container">
                                <h2 className="summary-title">Descripcion del producto</h2>
                                <p className="summary-product-description">
                                    {'test de app'}
                                </p>
                            </div>
                        </div>

                    </div >
                </div >


            }
        </>
    )
}
