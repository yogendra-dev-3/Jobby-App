import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/">
        <button type="button" className="img-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            alt="website logo"
            className="header-image"
          />
        </button>
      </Link>
      <div className="header-buttons">
        <Link to="/">
          <button className="header-button" type="button">
            Home
          </button>
        </Link>

        <Link to="/jobs">
          <button className="header-button" type="button">
            Jobs
          </button>
        </Link>
      </div>
      <ul>
        <li>
          <button
            onClick={onClickLogout}
            type="button"
            className="logout-button"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
