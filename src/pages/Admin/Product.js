import React, { useState, useEffect } from "react";
import Adminmenu from "./Adminmenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <Adminmenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap" style={{display:"flex",flexDirection:"row"}}>
            {products?.map((p) => (


              <Link
                key={p._id}
                to={`/dash/admin/product/${p.slug}`}
                className="product-link"
              > <div className="card m-2" style={{ width: "18rem",backgroundColor:'rgb(235, 235, 235)',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <img
                  src={`/product/product-photo/${p._id}`}
                  style={ {height:"180px",
                  width:"160px"}}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name.substring(0,19)}..</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">  {p.price}</p>

                  
                </div>
              </div>
                {/* <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
