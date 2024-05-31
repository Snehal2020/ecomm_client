import React,{useEffect,useState} from 'react'
import { useAuth } from '../../../context/auth'
import { Outlet } from "react-router-dom";
import axios from "axios";
import Login from '../../../pages/Auth/Login'
import Spinner from '../../spinner';


export default function PrivateRoute() {
   const [ok,setOk] = useState(false)
   const [auth,setAuth]=useAuth()

   useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Login></Login>;
}


