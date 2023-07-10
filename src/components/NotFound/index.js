import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/chantishinagam/image/upload/v1688529962/Tasty_kitchens_page_not_found_nhpfuv.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>
      <Link to="/">
        <button type="button" className="home-page-button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
