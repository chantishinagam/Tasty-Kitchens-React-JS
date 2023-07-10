import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import './index.css'

const CartTotal = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalOrderCost = 0
      cartList.forEach(eachCartItem => {
        totalOrderCost += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <hr className="cart-hr-line" />
          <div data-testid="total-price" className="cart-summary-container">
            <div className="total-container">
              <h1 className="order-total-value">Order Total:</h1>
              <div className="total-price-container">
                <BiRupee color="#3e4c59" size={25} />
                <p className="total-cost" data-testid="total-price">
                  {totalOrderCost}
                </p>
              </div>
            </div>
            <Link to="/payment" className="place-order-container">
              <button type="button" className="place-order-button">
                Place Order
              </button>
            </Link>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartTotal
