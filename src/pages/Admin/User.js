import React, { useState,useEffect } from "react";
import axios from "axios";
import Layout from "./../../components/Layout/Layout";
import Adminmenu from "./Adminmenu";
import '../../styles/userlist.css'

const Users = () => {
  const [users, setuser] = useState([]);

   const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/get-all-users");
      console.log(data.userdata);
      setuser(data.userdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu></Adminmenu>
          </div>
          <div className="col-md-9">
          <div className="responsive-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
              {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              {/* <td>{user.duration}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
              </td>
              <td>
                <button className="action-button edit">Edit</button>
                <button className="action-button delete">Delete</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
