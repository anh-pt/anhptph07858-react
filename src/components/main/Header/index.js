import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                
              </div>
            </div>
            <div className="col-sm-6">
              <div className="shopping-item">
                <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart" /> <span className="product-count">5</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

Header.propTypes = {

}

export default Header
