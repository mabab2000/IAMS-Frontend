import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function RequestTable() {
  const token=localStorage.getItem('token');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const Id = searchParams.get('id');
    
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/view_user/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const { info } = response.data;
        setRequests(info);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <><Userheader/>
    <div className="container">
    <div className="column1"><Adminmenu /></div>
      <div className="separator"></div>
      <div className="column">
    
    <div>
      <h1><font color='green'> <center>{requests.length} Users</center></font></h1>
      <p>Users information</p>
      <table border='1'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            
            
          </tr>
        </thead>
        <tbody>
          {requests && requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.first_name} {request.last_name}</td>
              <td>{request.gender}</td>
              <td>{request.phone}</td>
              <td>{request.email}</td>
              
              
            </tr>
          ))}
        </tbody>
      </table>
    </div></div></div></>
  );
}

export default RequestTable;