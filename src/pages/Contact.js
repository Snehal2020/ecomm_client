import React from 'react'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from '../components/Layout/Layout'
function Contact() {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://www.hitech.in/wp-content/uploads/2019/11/contactus-banner-1200x900.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.shoponline.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 123-3456789
          </p>
         
        </div>
      </div>
    </Layout>
  )
}

export default Contact
