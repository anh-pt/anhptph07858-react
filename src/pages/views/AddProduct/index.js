import React,{useState} from 'react';
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from '../../../firebase';
const AddProduct = ({onAddProduct,category}) => {
    const {register,handleSubmit,watch,errors} = useForm();
    let history = useHistory();
   
    //khai báo useState chứa dữ liệu
    // const [products,setProduct] = useState("");
    //Lấy dữ liệu từ form
    const onHandleSubmit = (data)=>{
         //lấy dữ liệu
         console.log(data.txtLogo[0]);
         //gán file vừa lấy vào biến
         let file = data.txtLogo[0];
          // tạo reference chứa ảnh trên firesbase
         let storageRef = firebase.storage().ref(`images/${file.name}`)
         //đẩy ảnh lên đường dẫn
         storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url)=>{
                 console.log(url);
                 const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    txtLogo:url
                 }
                 onAddProduct(newData);
                 history.push("/admin/products");
             })
         })
         
        //  onAdd(newData);
        //  history.push("/admin/products");
    }
   
    
    //style cho validate
    const mystyle = {
        color: "red",
        fontStyle:"italic",
        fontSize:"14px",
        fontFamily:"tahoma"
      };

    return (
        <div>
            <h3>Thêm sản phẩm</h3>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label >Tên sản phẩm<span style={mystyle}>*</span></label>
                    <input type="text" 
                    className="form-control"
                    name="txtName"
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
                    {errors.txtLogo && errors.txtLogo.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                </div>
                
                <div className="form-group">
                    <label >Số lượng<span style={mystyle}>*</span></label>
                    <input type="number" 
                    className="form-control"
                    ref={register({ required:true,min: 0 })}
                    name="txtNumber"
                    />
                   {errors.txtNumber && errors.txtNumber.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.txtNumber && errors.txtNumber.type === "min" && <span style={mystyle}>Số lượng không âm</span>}
                </div>
                
                <div className="form-group">
                    <label >Danh mục</label>
                    <select className="form-control" name="cateId" ref={register}>
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
                    ref={register({required:true,minLength:10,maxLength:1000})}
                    name="txtContent"
                    />
                   {errors.txtContent && errors.txtContent.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                   {errors.txtContent && errors.txtContent.type === "minLength" && <span style={mystyle}>Nội dung quá ngắn</span>}
                   {errors.txtContent && errors.txtContent.type === "maxLength" && <span style={mystyle}>Nội dung quá dài</span>}
                </div>
                
                <button type="submit" className="btn btn-primary" >Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default AddProduct
