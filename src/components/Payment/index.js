import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Payment = () => (
  <>
    <Header activeTab="CART" />
    <div className="payment-section">
      <div className="payment-container">
        <img
          src="https://res.cloudinary.com/chantishinagam/image/upload/v1688540346/Tasty_kitchens_payment_success_check_circle_th75hw.png"
          alt="success"
        />
        <h1 className="payment-heading">Payment Successful</h1>
        <p className="payment-description">
          Thank you for ordering Your payment is successfully completed.
        </p>

        <Link to="/">
          <button type="button" className="payment-home-page-button">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Payment
