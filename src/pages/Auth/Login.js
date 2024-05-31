import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./authStyles.css";
import "../../styles/login.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/login`, {
        email,
        password,
      });
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        console.log(res.data)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        console.log("sssss")
        console.log(res.data.message);
      }
    } catch (error) {
      
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    // <Layout title="Register - Ecommer App">
    //   <div className="form-container ">
    //     <form onSubmit={handleSubmit}>
    //       <h4 className="title">LOGIN FORM</h4>

    //       <div className="mb-3">
    //         <input
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="form-control"
    //           id="exampleInputEmail1"
    //           placeholder="Enter Your Email "
    //           required
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="form-control"
    //           id="exampleInputPassword1"
    //           placeholder="Enter Your Password"
    //           required
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <button
    //           type="button"
    //           className="btn btn-primary"
    //           onClick={() => {
    //             navigate("/forgot-password");
    //           }}
    //         >
    //           Forgot Password
    //         </button>
    //       </div>

    //       <button type="submit" className="btn btn-primary">
    //         LOGIN
    //       </button>
    //     </form>
    //   </div>
    // </Layout>
    <>
     
<section class="background-radial-gradient overflow-hidden">
 
  <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style={{"z-index": "10"}}>
        <h1 class="my-5 display-5 fw-bold ls-tight" style={{"color": "hsl(218, 81%, 95%)"}}>
       <br />
          <span style={{"color": "hsl(218, 81%, 75%)"}}>  Here you will find best for you</span>
        </h1>
        <p class="mb-4 opacity-70" style={{"color":" hsl(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

        <div class="card bg-glass">
          <div class="card-body px-4 py-5 px-md-5">
            <form  onSubmit={handleSubmit}>
             
              <div data-mdb-input-init class="form-outline mb-4">
                <input  type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

             
              <div data-mdb-input-init class="form-outline mb-4">
                <input  type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

             
              <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">
                Login
              </button>

           
              <div class="text-center">
              <p>Dont have account?</p>
              <Link to="/register">Register</Link>
                {/* <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Login;