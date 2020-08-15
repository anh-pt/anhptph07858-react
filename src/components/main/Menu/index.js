import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
const Menu = ({category}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Menu</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav"> 
    {category.map(({id,name},index)=>(
      <li className="nav-item active" key={index}>
          <Link to={`/category/${id}/products`} className="nav-link">{name}</Link>
        </li>
      ))}
    </ul>
  </div>
</nav>

    )
}

Menu.propTypes = {

}

export default Menu
