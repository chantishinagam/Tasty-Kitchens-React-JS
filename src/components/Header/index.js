import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import './index.css'

class Header extends Component {
  state = {
    showHamburger: false,
  }

  onShowNavMenu = () => {
    this.setState(prevState => ({showHamburger: !prevState.showHamburger}))
  }

  onCloseNavMenu = () => {
    this.setState(prevState => ({showHamburger: !prevState.showHamburger}))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {activeTab} = this.props
    const {showHamburger} = this.state
    const activeHome = activeTab === 'HOME' ? 'active' : ''
    const activeCart = activeTab === 'CART' ? 'active' : ''
    const activeProfile = activeTab === 'PROFILE' ? 'active' : ''

    return (
      <>
        <nav className="nav-header">
          <div className="nav-content">
            <Link to="/" className="heading-link">
              <div className="header-logo-content">
                <img
                  src="https://res.cloudinary.com/chantishinagam/image/upload/v1688279990/Tasty_kitchens_website_logo_rzpmer.png"
                  alt="website logo"
                  className="header-website-logo"
                />
                <h1 className="header-heading">Tasty Kitchens</h1>
              </div>
            </Link>

            <GiHamburgerMenu
              className="hamburger"
              size={25}
              onClick={this.onShowNavMenu}
            />
          </div>
          <ul className="nav-menu">
            <Link to="/" className={`nav-link ${activeHome}`}>
              <li>Home</li>
            </Link>
            <Link to="/profile" className={`nav-link ${activeProfile}`}>
              <li>Profile</li>
            </Link>
            <Link to="/cart" className={`nav-link ${activeCart}`}>
              <li>Cart</li>
            </Link>
          </ul>

          <button
            type="button"
            className="logout-desktop-btn"
            onClick={this.onClickLogout}
            data-testid="logout-button"
          >
            Logout
          </button>
        </nav>
        {showHamburger && (
          <div className="mobile-nav-menu-options">
            <ul className="mobile-nav-menu">
              <Link to="/" className={`nav-link ${activeHome}`}>
                <li>Home</li>
              </Link>
              <Link to="/profile" className={`nav-link ${activeProfile}`}>
                <li>Profile</li>
              </Link>
              <Link to="/cart" className={`nav-link ${activeCart}`}>
                <li>Cart</li>
              </Link>
            </ul>

            <button
              type="button"
              className="logout-mobile-btn"
              onClick={this.onClickLogout}
              data-testid="logout-button"
            >
              Logout
            </button>
            <button
              type="button"
              className="nav-delete-button"
              onClick={this.onCloseNavMenu}
            >
              <AiFillCloseCircle color="#616E7C" size={25} />
            </button>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Header)
