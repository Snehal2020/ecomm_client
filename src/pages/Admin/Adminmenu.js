import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/sidebar.css";
function Adminmenu() {
  return (
    <>
      <div
        className="text-center"
        style={{ backgroundColor: "rgb(235, 235, 235)"}}
        
      >
        <div
          className="text-center"
          style={{
            backgroundColor: "#343a40",
            color: "white",
            minHeight: "100vh",
            
          }}
        >
          <div  style={{ backgroundColor: "#343a40" }}>
            <h4 style={{paddingTop:'14px'}}>Admin Panel</h4>
            <div style={{padding:'9px',fontSize:'16px'}}>
            <Link
              to="/dash/admin/createcategory"
              className="list-group-item"
              style={{
                backgroundColor: "#495057",
                color: "white",
                textDecoration: "none",
              }}
            >
              Create Category
            </Link>
            </div>
            <div style={{padding:'9px',fontSize:'16px'}}>
            <Link
              to="/dash/admin/createproduct"
              className="list-group-item"
              style={{
                backgroundColor: "#495057",
                color: "white",
                textDecoration: "none",
              }}
            >
              Create Product
            </Link>
            </div>
            <div style={{padding:'9px',fontSize:'16px'}}>
            <Link
              to="/dash/admin/products"
              className="list-group-item"
              style={{
                backgroundColor: "#495057",
                color: "white",
                textDecoration: "none",
              }}
            >
              Products
            </Link>
            </div>
            <div style={{padding:'9px',fontSize:'16px'}}>
            <Link
              to="/dash/admin/user"
              className="list-group-item"
              style={{
                backgroundColor: "#495057",
                color: "white",
                textDecoration: "none",
              }}
            >
              User
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminmenu;
