import React from 'react';
import Layout from '../../components/Layout/Layout';
import Adminmenu from './Adminmenu';
import { useAuth } from '../../context/auth';

function AdminDashboard() {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <div className="card shadow-lg p-4 mb-5 bg-white rounded">
              <div className="d-flex align-items-center">
                <div >
                  <img src="https://st4.depositphotos.com/41205956/41501/v/450/depositphotos_415013312-stock-illustration-woman-working-stock-vector-illustration.jpg" alt="Admin Avatar"  style={{ width: '100px', height: '100px',borderRadius:'50%',overflow:'hidden',backgroundColor:'rgb(180, 183, 207)',paddingTop:'4px'}} />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-0">Admin Dashboard</h4>
                  <p className="text-muted">Welcome back, {auth?.user?.name}!</p>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Name:</strong> {auth?.user?.name}
                  </li>
                  <li className="list-group-item">
                    <strong>Email:</strong> {auth?.user?.email}
                  </li>
                  <li className="list-group-item">
                    <strong>Contact:</strong> {auth?.user?.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
