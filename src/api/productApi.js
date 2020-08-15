import http from "./axiosHttp";

const getAll = () => {
    return http.get("/products");
}
const search = data =>{ 
    return http.get(`/products?q=${data}`);
  
}
const page = (id,data) =>{
    return http.get(`/products?_page=${id}&_limit=${data}`)
}
const get = id => {
    return http.get(`/products/${id}`);
};

const create = data => {
    return http.post("/products",data);
};
const update = (id,data) =>{
    return http.put(`/products/${id}`,data);
};
const remove = id =>{
    console.log(id);
    return http.delete(`/products/${id}`);
};

export default{
    getAll,
    get,
    search,
    page, 
    create,
    update,
    remove
}