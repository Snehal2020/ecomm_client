import React from 'react'
import {Helmet} from "react-helmet";
import Headers from './Header'
import Footers from './Footer'
import { Toaster } from 'react-hot-toast';
  import 'react-toastify/dist/ReactToastify.css';
function Layout(props) {
  return (
    <div>
      {/* <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
      </Helmet> */}
     <Headers/>
     <main style={{minHeight:"85vh"}}>
            {props.children}
      </main>
     <Footers/>

    </div>
  )
}

export default Layout
