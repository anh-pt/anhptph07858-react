import React from 'react'
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
const Category = ({category,onRemoveCate}) => {
    const onRemove = (id) =>{
        onRemoveCate(id);
    }
    return (
        <div>
             <h1 className="h3 mb-2 text-gray-800"><Link to="/admin/category/add"><button type="button" className="btn btn-success">Thêm mới</button></Link></h1>
       
       <div className="card shadow mb-4">
           <div className="card-header py-3">
               <h6 className="m-0 font-weight-bold text-primary">Danh mục sản phẩm</h6>
           </div>
           <div className="card-body">
               <div className="table-responsive">
                   <table className="table">
                       <thead>
                           <tr>
                               <th scope="col"><a variant="outline-danger">Xóa</a></th>
                               <th scope="col">STT</th>
                               <th scope="col">Tên danh mục</th>
                               <th scope="col">Mô tả danh mục</th>
                               <th scope="col">Số lượng sản phẩm</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                          {category.map(({id,name,logo,detail},index)=>(
                              <tr key={index}>
                                  <td>&nbsp;<input type="checkbox"/></td>
                                  <td>{index+1}</td>
                                  <td>{name}</td>
                                  <td>{detail}</td>
                                  <td><img src={logo} width="50px"/></td>
                                  <td>Số lượng</td>
                                  <td>
                                    <Button variant="outline-secondary" size="sm">Chi tiết</Button>&nbsp;
                                    <Button variant="primary" size="sm" ><Link to={`/admin/products/edit/${id}`}>Sửa</Link></Button>&nbsp;
                                    <Button variant="danger" size="sm" onClick={()=>onRemove(id)}>Xóa</Button>
                                  </td>
                              </tr>
                          ))}
                       </tbody>
                   </table>

               </div>
           </div>
       </div>
        </div>
    )
}


export default Category
