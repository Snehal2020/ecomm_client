import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
// require('dotenv').config()
// require('./config/db');
// import "./authStyles.css";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    console.log(name, email, phone, address, password, cpassword);
    e.preventDefault(); //cancels the default event here it is submit event
    try {
      const res = await axios.post(`/register`, {
        name,
        email,
        phone,
        address,
        password,
        cpassword,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        console.log(res.data);
        navigate("/login");
      } else {
        toast.error(res.data.message);
        console.log(res)
        console.log("44")
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    //  <Layout title={"Register in Ecommerce App"}>
    //       <div className="form-container">
    //       <form onSubmit={handleSubmit}>
    //         <div className="mb-3">
    //           <input
    //             type="text"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             className="form-control"
    //             id="exampleInputName"
    //             placeholder="Enter Your Name"
    //             required
    //             autoFocus
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <input
    //             type="email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="form-control"
    //             id="exampleInputEmail1"
    //             placeholder="Enter Your Email "
    //             required
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <input
    //             type="text"
    //             value={phone}
    //             onChange={(e) => setPhone(e.target.value)}
    //             className="form-control"
    //             id="exampleInputPhone"
    //             placeholder="Enter Your Phone"
    //             required
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <input
    //             type="password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="form-control"
    //             id="exampleInputPassword1"
    //             placeholder="Enter Your Password"
    //             required
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <input
    //             type="password"
    //             value={cpassword}
    //             onChange={(e) => setCpassword(e.target.value)}
    //             className="form-control"
    //             id="exampleInputCPassword1"
    //             placeholder="confirm Password"
    //             required
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <input
    //             type="text"
    //             value={address}
    //             onChange={(e) => setAddress(e.target.value)}
    //             className="form-control"
    //             id="exampleInputaddr"
    //             placeholder="Enter Your Address"
    //             required
    //           />
    //         </div>

    //         <button type="submit" className="btn btn-primary">
    //           REGISTER
    //         </button>
    //       </form>
    //     </div>
    //  </Layout>
    <>
      <section class="text-center" style={{height:'100vh'}}>
        <div
          class="p-5 bg-image"
          style={{backgroundImage: `url('https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg')`,height:'430px'}}
        ></div>

        <div
          class="card  shadow-5-strong"
          style={{"marginTop": "-270px",
       
        "background":" hsla(0, 0%, 100%, 0.8)",
        "backdropFilter": "blur(30px)",
        width:'50vw',marginLeft:'24vw'}}
        
        >
          <div class="card-body py-4 px-md-4" style={{width:'45vw'}}>
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Sign up now</h2>
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                       <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Your Name"
                required
                autoFocus
              /> 
                      
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div data-mdb-input-init class="form-outline">
                       
                      <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                required
              />

                      </div>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
             <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter Your Phone"
                required
              />
            </div> 
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    
                  <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                required
              />
                  
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                   
                  <input
                type="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                className="form-control"
                id="exampleInputCPassword1"
                placeholder="confirm Password"
                required
              />
                  
                  </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                id="exampleInputaddr"
                placeholder="Enter Your Address"
                required
              />
            </div>

                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    class="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>

                  <div class="text-center">
                    <p>Already have an account?</p>
                    <Link to='/login'>Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
