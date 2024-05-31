import React from 'react'
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAuth } from '../../context/auth';
import Search from 'antd/es/input/Search';
import SearchInput from '../Form/SearchInput';
import useCategory from "../../components/hooks/useCategory";
import { useCart } from '../../context/cart';
import { Badge } from "antd";
function Header() {
  const [auth,setAuth] = useAuth()
  const [cart] = useCart()
  const categories = useCategory();
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
  }

  return (
   <>
<nav className="navbar navbar-expand-lg  bg-body-tertiary">
  <div className="container-fluid " style={{backgroundColor:'black',color:'white'}} >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <Link className="navbar-brand" to="/"><p style={{paddingLeft:'18px',paddingTop:'8px',color:'white'}}>My Shop</p></Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <SearchInput></SearchInput>
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>


        <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

       {
        !auth.token ? (
          <>
          <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
          </>
        ) : (
          <>
          <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout} to="/login">Logout</Link>
        </li>
          </>
        )
       }
        <li className="nav-item">
          <Link className="nav-link" to={`/dash/${auth?.user?.role===2?"user/profile":"admin"}`}>dashboard</Link>
        </li>

        <li className="nav-item pl-5 ml-3 pt-2">
                <Badge count={cart?.length} showZero>
                  <Link to="/cart" className="nav-link">
                    Cart
                  </Link>
                </Badge>
              </li>

      </ul>
      
    </div>
  </div>
</nav>

   </>
  )
}

export default Header
