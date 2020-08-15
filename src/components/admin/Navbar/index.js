import React from 'react'
import { Link} from "react-router-dom";

const Navbar = props => {
    return (
        <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
            <div className="sidebar-wrapper">
              <div className="logo">
                <a className="simple-text">
                  Creative Tim
                </a>
              </div>
              <ul className="nav">
                <li className="nav-item active">
                  <Link to="/admin/" className="nav-link">
                    <i className="nc-icon nc-chart-pie-35" />
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/admin/category">
                  <i className="nc-icon nc-layers-3"></i>
                    <p>Quản lý danh mục</p>
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/admin/products">
                  <i className="nc-icon nc-app"></i>
                    <p>Quản lý sản phẩm</p>
                  </Link>
                </li>
                <li>
                  <a className="nav-link" href="./table.html">
                  <i className="nc-icon nc-single-copy-04"></i>
                    <p>Quản lý bài viết</p>
                  </a>
                </li>
              
              </ul>
            </div>
          </div>

    )
}



export default Navbar
