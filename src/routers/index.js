import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Dashboard from '../pages/views/Dashboard';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import Product from '../pages/views/Product';
import AddProduct from '../pages/views/AddProduct';
import EditProduct from '../pages/views/EditProduct';
import Category from '../pages/views/Category';
import AddCate from '../pages/views/addCate/AddCate';
import Layoutmain from '../pages/layouts/Layoutmain';
import Home from '../pages/views/Home';
import Menu from '../components/main/Menu';
const Routers = ({ products,onAddProduct,removeProduct,onUpdateProduct,searchProduct,searchProducts,
                   category,onAddCate,onRemoveCate}) => {
    return (
        <Router>
            
            <Switch>
               <Route path='/admin/:path?/:path?' exact>
                   <LayoutAdmin>
                    <Route path='/admin' exact>
                            <Dashboard />
                        </Route>
                        <Route path='/admin/products'exact >
                            <Product products={products} removeProduct={removeProduct} searchProduct={searchProduct} searchProducts={searchProducts}
                            category={category}
                            />
                        </Route>
                        <Route path='/admin/products/add'>
                        <AddProduct onAddProduct={onAddProduct} category={category}/>
                        </Route>
                        <Route path='/admin/products/edit/:id'>
                        <EditProduct products={products} onUpdateProduct={onUpdateProduct} category={category}/>
                        </Route>
                        <Route path='/admin/category' exact>
                            <Category category={category} onRemoveCate={onRemoveCate}/>
                        </Route>
                        <Route path='/admin/category/add'>
                        <AddCate onAddCate={onAddCate}/>
                        </Route>
                        {/* <Route path='/admin/category/edit/:id'>
                        <EditProduct products={products} onUpdateProduct={onUpdateProduct}/>
                        </Route> */}
                    </LayoutAdmin>
               </Route>
               {/* <Route>
                    <Layoutmain>
                        <Switch>
                            <Route path="/" exact>
                                <Menu category={category}/>
                                <Home />
                            </Route>
                            <Route path="/about">
                             
                            </Route>
                        </Switch>
                    </Layoutmain>
                </Route> */}
            </Switch>
            
        </Router>
    )
}

// Routers.propTypes = {

// }

export default Routers
