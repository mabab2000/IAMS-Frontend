import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Userheader from './Userheader';
import Receptionmenu from './Receptionmenu';
function 
Reception() {
 

  function handleLogout() {
    axios.post('http://127.0.0.1:8000/api/logout')
      .then(response => {
        console.log(response.data.message);
        console.log("Logout sucess");
      })
      .catch(error => {
        console.error(error);
        // handle error, e.g. display error message to user
      });
  }

  return (
    <><Userheader/>
    <div className="container">
    <div className="column1"><Receptionmenu /></div>
      <div className="separator"></div>
      <div className="column"><center><h1>Welcome information</h1><p/></center>
<h3>The key objectives of using this platfforn
</h3>
<b>Centralized applicant information:</b> By storing all applicant information in a centralized database, it becomes easier to manage and track applications.
<p/>
<b>Streamlined application process:</b> An online application portal makes it easier for applicants to apply, and for recruiters to review and respond to applications.
<p/>
<b>Improved communication: </b>The system can provide automated email notifications to applicants, and enable recruiters to communicate with applicants throughout the application process.
<p/>
<b>Tracking and reporting:</b> The system can generate reports on applicant data, including application status, demographics, and other relevant metrics, which can help recruiters make data-driven decisions.
<p/>
<b>Time-saving:</b> By automating tasks such as sending email notifications and tracking applicant status, the system can save recruiters time and increase their efficiency.

</div></div>
      </>
  );
}

export default Reception
