import React from 'react';

// import '../../assets/main/css/bootstrap.min.css';
// import '../../assets/main/css/font-awesome.min.css';
// import '../../assets/main/style.css';
import Header from '../../components/main/Header';
import Menu from '../../components/main/Menu';
export default ({ children }) => {

    return (
        <div>
          <Header />
       
            <div className="content">
                {children}

            </div>
        </div>
    )
}