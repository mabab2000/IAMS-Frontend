import React,{useState} from 'react';
import Userheader from './Userheader';
import Adminmenu from './Adminmenu';
function User() {
  const [isLoading, setIsLoading] = useState(true);
  const dep_id = localStorage.getItem('department');
  
  return (
    <><Userheader/>
    <body class='dash'>
    <div className="container">
    <div className="column1"><Adminmenu /></div>
      <div className="separator"></div>
      <div className="column">
      <center><h1><font color='green'>Welcome information</font></h1><br/></center>
<h3>The key objectives of using this platfforn
</h3>
<b>Centralized applicant information:</b> By storing all applicant information in a centralized database, it becomes easier to manage and track applications.
<br/>
<b>Streamlined application process:</b> An online application portal makes it easier for applicants to apply, and for recruiters to review and respond to applications.
<p/>
<b>Improved communication: </b>The system can provide automated email notifications to applicants, and enable recruiters to communicate with applicants throughout the application process.
<p/>
<b>Tracking and reporting:</b> The system can generate reports on applicant data, including application status, demographics, and other relevant metrics, which can help recruiters make data-driven decisions.
<p/>
<b>Time-saving:</b> By automating tasks such as sending email notifications and tracking applicant status, the system can save recruiters time and increase their efficiency.

      
    </div></div></body></>
  );
}

export default User;
