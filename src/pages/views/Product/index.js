import React,{useState}  from 'react'
// {useState} 
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
const Product = ({products,removeProduct,searchProduct,searchProducts,category}) => {
    
   //Lấy id xóa
   const removeHandle = (id) =>{
      
       removeProduct(id);
   }

   const onHandleChang = e =>{
    searchProduct(e.target.value);
   } 
  console.log(searchProducts);
  
    return (
    <div>
        <h1 className="h3 mb-2 text-gray-800"><Link to="/admin/products/add"><button type="button" className="btn btn-success">Thêm mới</button></Link></h1>
       <form>
           <input type="text" className="form-control" onChange={onHandleChang} placeholder="Search ..."/><br/>
       </form>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"><a variant="outline-danger">Xóa</a></th>
                                <th scope="col">STT</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Tình trạng hàng</th>
                                <th scope="col">Giá</th>
                                <th>Logo</th>
                                <th scope="col">Danh mục</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                {products.map(({id,txtName,txtNumber,txtPrice,txtLogo,cateId},index)=>(
                                <tr key={index}>
                                    <td>&nbsp;<input type="checkbox"/></td>
                                    <td>{index+1}</td>
                                    <td>{txtName}</td>
                                    <td>{txtNumber>0 ?'còn hàng':'hết hàng'}</td>
                                    <td>{txtPrice}</td>
                                    <td><img src={txtLogo} width="50px"/></td>
                                    <td>{category.map((cat)=>cat.id==cateId?cat.name:"Mặc định")}</td>
                                    <td>
                                    <Button variant="outline-secondary" size="sm">Chi tiết</Button>&nbsp;
                                    <Button variant="primary" size="sm" ><Link to={`/admin/products/edit/${id}`}>Sửa</Link></Button>&nbsp;
                                    <Button variant="danger" size="sm" onClick={()=>removeHandle(id)}>Xóa</Button>
                                    </td>
                                </tr>
                            ))};
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    )
}

Product.propTypes = {

}

export default Product
