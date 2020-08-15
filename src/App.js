import React, { useState ,useEffect} from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
import apiCate from './api/cateApi';
function App() {
   const [products,setProducts] = useState([]);
   const [category,setCategory] = useState([]);
   const [searchProducts,setSearchProduct] = useState([]);
   //Danh sách sản phẩm
   useEffect(()=>{
       const getproducts = async () =>{
         try
         {
           const {data} = await apiRequest.getAll();
           setProducts(data);
          } 
          catch(error)
          {
             console.log('failed to request API:',error)
          }
       }
       getproducts();
   },[]); 
  //  const [count,setCount]=useState(0);
  //      const numberId = products.map(({id},index)=>{
        
  //       console.log(id)
  //      })

    
        //Thêm sản phẩm
        const onHandleAdd = async (product)=>{
           try{
                const {data} = await apiRequest.create(product);
                setProducts([
                  ...products,
                  data
                ])
           }
           catch(error)
           {
             console.log('faile to request API: ',error)
           }
        }
        //search product
         const searchProduct = async (product)=>{
          try{
            const {data} = await apiRequest.search(product);
            setSearchProduct(data);
            console.log(data);
       }
       catch(error)
       {
         console.log('faile to request API: ',error)
       }
         }
        //Xóa sản phẩm
        const removeProduct = (id) =>{
          try {
             const {data} =  apiRequest.remove(id);
             const newProduct = products.filter((product) => product.id !== id);
             setProducts(newProduct);console.log(newProduct)
          } catch (error) {
            console.log('Faile to request API: ',error)
          }
        }
        
        //sửa sản phẩm
       
          const onHandleUpdateProduct = async (updateProduct) => { console.log(updateProduct);
          try{
            await apiRequest.update(updateProduct.id, updateProduct);
            const newProducts = products.map(product => (
              product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
            ));
            localStorage.setItem('products', JSON.stringify(newProducts))
            setProducts(newProducts);
          } catch (error) {
            console.log(error)
          }
        }
  
       //danh mục
       //hiển thị danh mục
   useEffect(()=>{
    const getCategory = async () =>{
      try
      {
        const {data} = await apiCate.getAll();
        setCategory(data);
       } 
       catch(error)
       {
          console.log('failed to request API:',error)
       }
    }
    getCategory();
},[]);
    //Thêm danh mục
    const onHandleAddCate = async (categories)=>{
      try{
           const {data} = await apiCate.create(categories);
           setCategory([
             ...category,
             data
           ])
      }
      catch(error)
      {
        console.log('faile to request API: ',error)
      }
   }
   //xóa 
   const onHandleRemoveCate = (id)=>{
     try{
           const {data} = apiCate.remove(id);
           const cate = category.filter(cate=>cate.id!==id);
           setCategory(cate);
     }
     catch(error)
     {
       console.log('Fail to request API: ',error)
     }
   }
 
  return (
    <div className="App">
         <Routers products={products}
                  searchProduct={searchProduct}
                  searchProducts={searchProducts}
                  onAddProduct={onHandleAdd}
                  removeProduct={removeProduct}
                  onUpdateProduct={onHandleUpdateProduct}
                  category={category}
                  onAddCate={onHandleAddCate}
                  onRemoveCate={onHandleRemoveCate}
           />
    </div>
  );
}

export default App;
