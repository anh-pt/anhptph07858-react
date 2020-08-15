import React from 'react'



const Dashboard = props => {

    return (
        <div><h1>Thông tin cần biết</h1> <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" style={{width:'400px', height:'300px',fontSize:'30px'}}>
            <i className="nc-icon nc-app"></i>&nbsp;Danh mục <span className="badge badge-light">9</span>
            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <button type="button" className="btn btn-primary" style={{width:'400px', height:'300px',fontSize:'30px'}}>
            <i className="nc-icon nc-layers-3"></i>&nbsp;Sản phẩm <span className="badge badge-light">9</span>
            </button>
        </div>
    )
}

export default Dashboard
