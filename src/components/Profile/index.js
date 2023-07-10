import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import Header from '../Header'
import './index.css'

const Profile = () => (
  <>
    <Header activeTab="PROFILE" />
    <div className="profile-section">
      <div className="profile-container">
        <CgProfile className="profile-icon" />
        <h1 className="profile-heading">
          Chanti Shinagam
          <br />
          (Fellow At Nxtwave)
        </h1>
        <div className="profile-info">
          <p className="profile-description">Email : chanti*****@gmail.com</p>
          <p className="profile-description">Mobile : +91 9*********</p>
        </div>
        <Link to="/">
          <button className="profile-home-page-button" type="button">
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default Profile
