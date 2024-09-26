/* eslint-disable react/prop-types */
import './Store.css';
import { FaShoppingCart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

const Store = ({ products }) => {
  return (
    <div className="store">
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div
              className="img-container"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <button className="favorite">
                <FaRegHeart size={25} />
              </button>
            </div>
            <div className="text-container">
              <h2>{product.title}</h2>
              <div className="card-footer">
                <p>${product.price}</p>
                <button className="buy-button">
                  <FaShoppingCart className="icon" /> Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
