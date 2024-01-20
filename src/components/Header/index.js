import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <div className="header-container">
      <img
        className="header-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        className="nav-logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
      <div className="header-list-container">
        <ul className="header-list">
          <li className="header-list-item">
            <Link className="link-item" to="/">
              Home
            </Link>
          </li>
          <li className="header-list-item">Products</li>
          <li className="header-list-item">Cart</li>
        </ul>
        <button className="logout-button" type="button">
          LogOut
        </button>
      </div>
    </div>
    <div className="nav-icons">
      <Link to="/">
        <img
          className="icon-size"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
      </Link>
      <img
        className="icon-size"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
      />
      <img
        className="icon-size"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
      />
    </div>
  </div>
)

export default Header
