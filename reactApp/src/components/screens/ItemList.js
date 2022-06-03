import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchItems } from '../../actions/items';

import ProductItem from '../shared/ProductItem';

export const ItemList = ({ formSelector }) => {
  const limit = 4;
  const offset = 0;
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();  

  const { productList } = useSelector(state => state);
  const dataItems = productList.items;

  const query = searchParams.get('q');

  useEffect(() => {
    dispatch(fetchItems(query, offset, limit));
  }, [dispatch, query]);

  return (
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
      {/* ends temp - navbar */}
      <div className="container mt-1 ml-1 mr-1 meli-card no-padding">
        {
          dataItems.map((item) => (
            <ProductItem  key={item.id} item={item} />
          ))
        }
      </div>
      {/* <Pagination /> */}
    </div>
  )
}
