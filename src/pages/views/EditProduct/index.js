import React,{useState} from 'react'
import {useForm} from "react-hook-form"
import { useParams, useHistory } from 'react-router-dom';
import firebase from '../../../firebase';
const EditProduct = ({products,onUpdateProduct,category}) => {
    let {id} = useParams();
    let history = useHistory();
    const product = products.find(product =>product.id ===id);
    const [currentProduct,setCurrentProduct] = useState(product);console.log(currentProduct);
    //style cho validate
    const mystyle = {
        color: "red",
        fontStyle:"italic",
        fontSize:"14px",
        fontFamily:"tahoma"
      };
    const {register,handleSubmit,watch,errors} = useForm();
    //Lấy dữ liệu từ form
    const onHandleSubmit = (data)=>{
        // console.log(data.txtLogo[0]);
        let file = data.txtLogo[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                const newData = {
                    ...data,
                    txtLogo:url
                 }
                
                 onUpdateProduct(newData);
                // history.push("/admin/products");
            })
        });
        
         //lấy dữ liệu
         
        //  
    }
    return (
        <div>
            <h3>Sửa sản phẩm</h3>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label >Tên sản phẩm<span style={mystyle}>*</span></label>
                    <input type="text" 
                    className="form-control"
                    name="txtName"
                    defaultValue={currentProduct.txtName}
                    ref={register({ required: true, minLength: 3 })}
                    />
                    {errors.txtName && errors.txtName.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.txtName && errors.txtName.type === "minLength" && <span style={mystyle}>Bạn phải nhập ít nhất 3 ký tự</span>}
                </div>
                
                <div className="form-group">
                    <label >Ghi chú sản phẩm<span style={mystyle}>*</span></label>
                    <input type="text" 
                    className="form-control"
                    name="txtDetail"
                    defaultValue={currentProduct.txtDetail}
                    ref={register({ required: true, minLength: 3,maxLength:30 })}
                    />
                    {errors.txtDetail && errors.txtDetail.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.txtDetail && errors.txtDetail.type === "minLength" && <span style={mystyle}>Bạn phải nhập ít nhất 5 ký tự</span>}
                    {errors.txtDetail && errors.txtDetail.type === "maxLength" && <span style={mystyle}>Bạn phải nhập ít nhất 30 ký tự</span>}
                </div>
                
                <div className="form-group">
                    <label >Giá sản phẩm<span style={mystyle}>*</span></label>
                    <input type="number" 
                    className="form-control"
                    name="txtPrice"
                    defaultValue={currentProduct.txtPrice}
                    ref={register({ required:true,min: 0 })}
                    />
                    {errors.txtPrice && errors.txtPrice.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.txtPrice && errors.txtPrice.type === "min" && <span style={mystyle}>Giá không âm</span>}
                    
                </div>
                
                <div className="form-group">
                    <label >Giá sale</label>
                    <input type="number" 
                    className="form-control"
                    name="txtPriceSale"
                    defaultValue={currentProduct.txtPriceSale}
                    ref={register({min: 0 })}
                    />
                {errors.txtPriceSale && errors.txtPriceSale.type === "min" && <span style={mystyle}>Giá sale không âm</span>}
                </div>
                
                <div className="form-group">
                    <label >Logo<span style={mystyle}>*</span></label>
                    <input type="file" 
                    className="form-control"
                    name="txtLogo"
                    ref={register({ required:true })}
                    />
                    <img src={currentProduct.txtLogo} width="50px"/>
                    {errors.txtLogo && errors.txtLogo.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                </div>
                
                <div className="form-group">
                    <label >Số lượng<span style={mystyle}>*</span></label>
                    <input type="number" 
                    className="form-control"
                    defaultValue={currentProduct.txtNumber}
                    ref={register({ required:true,min: 0 })}
                    name="txtNumber"
                    />
                   {errors.txtNumber && errors.txtNumber.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.txtNumber && errors.txtNumber.type === "min" && <span style={mystyle}>Số lượng không âm</span>}
                </div>
                
                <div className="form-group">
                    <label >Danh mục</label>
                    <select className="form-control">
                    <option value={0}>Mặc định</option> 
                    {category.map(({id,name},index)=>(
                        <option key={index} value={id}>{name}</option> 
                    ))}
                    </select>
                </div>
                
                <div className="form-group">
                    <label >Nội dung<span style={mystyle}>*</span></label>
                    <textarea className="form-control" 
                    rows="10" cols="100"
                    defaultValue={currentProduct.txtContent}
                    ref={register({required:true,minLength:10,maxLength:1000})}
                    name="txtContent"
                    />
                   {errors.txtContent && errors.txtContent.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                   {errors.txtContent && errors.txtContent.type === "minLength" && <span style={mystyle}>Nội dung quá ngắn</span>}
                   {errors.txtContent && errors.txtContent.type === "maxLength" && <span style={mystyle}>Nội dung quá dài</span>}
                </div>
                
                <button type="submit" className="btn btn-primary" >Cập nhập sản phẩm</button>
            </form>
        </div>
    )
}

export default EditProduct
