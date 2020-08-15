import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Header from '../../components/admin/Header'
import Footer from '../../components/admin/Footer'
import '../../assets/admin/css/bootstrap.min.css'
import '../../assets/admin/css/light-bootstrap-dashboard.css?v=2.0.0'
import '../../assets/admin/css/demo.css'

export default ({ children }) => {
    return (
        <div className="wrapper">
          <Navbar />
            <div className="main-panel">
                <Header />
                <div className="content">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}