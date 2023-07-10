import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <>
    <div className="cart-empty-view-container">
      <img
        src="https://res.cloudinary.com/chantishinagam/image/upload/v1688544098/Tasty_kitchens_cart_empty_image_wjftf7.png"
        alt="empty cart"
        className="cart-empty-image"
      />
      <h1 className="cart-empty-heading">No Order Yet!</h1>
      <p className="cart-empty-description">
        Your cart is empty. Add something from the menu.
      </p>

      <Link to="/">
        <button type="button" className="order-now-button">
          Order Now
        </button>
      </Link>
    </div>
  </>
)

export default EmptyCartView
