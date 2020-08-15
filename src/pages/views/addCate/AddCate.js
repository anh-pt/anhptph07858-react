import React ,{useState}from 'react'
import {useForm} from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from '../../../firebase';

const AddCate = ({onAddCate}) => {
    const {register,handleSubmit,watch,errors} = useForm();
    let history = useHistory();
    
    //khai báo useState chứa dữ liệu
    // const [products,setProduct] = useState("");
    //Lấy dữ liệu từ form
    const onHandleSubmit = (data)=>{
         //lấy dữ liệu
         console.log(data.logo[0]);
         //gán file vừa lấy vào biến
         let file = data.logo[0];
          // tạo reference chứa ảnh trên firesbase
         let storageRef = firebase.storage().ref(`images/${file.name}`)
         //đẩy ảnh lên đường dẫn
         storageRef.put(file).then(function(){
            storageRef.getDownloadURL().then((url)=>{
                 console.log(url);
                 const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    logo:url
                 }
                 onAddCate(newData);
                 history.push("/admin/category");
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
             <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label >Tên danh mục<span style={mystyle}>*</span></label>
                    <input type="text" 
                    className="form-control"
                    name="name"
                    ref={register({ required: true, minLength: 3 })}
                    />
                    {errors.name && errors.name.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.name && errors.name.type === "minLength" && <span style={mystyle}>Bạn phải nhập ít nhất 3 ký tự</span>}
                </div>
                
                <div className="form-group">
                    <label >Nội dung ngắn<span style={mystyle}>*</span></label>
                    <input type="text" 
                    className="form-control"
                    name="detail"
                    ref={register({ required: true, minLength: 3,maxLength:30 })}
                    />
                    {errors.detail && errors.detail.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                    {errors.detail && errors.detail.type === "minLength" && <span style={mystyle}>Bạn phải nhập ít nhất 5 ký tự</span>}
                    {errors.detail && errors.detail.type === "maxLength" && <span style={mystyle}>Bạn phải nhập ít nhất 30 ký tự</span>}
                </div>
                
                <div className="form-group">
                    <label >Logo<span style={mystyle}>*</span></label>
                    <input type="file" 
                    className="form-control"
                    name="logo"
                    ref={register({ required:true })}
                    />
                    {errors.logo && errors.logo.type === "required" && <span style={mystyle}>Bạn không nên để trống</span>}
                </div>
            
                <button type="submit" className="btn btn-primary" >Thêm danh mục</button>
            </form>
        </div>
    )
}

export default AddCate
