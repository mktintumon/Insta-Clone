import React, { useState } from "react";
import "./profile.css";
import {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext'

function Profile() {
  let contextObj = useContext(AuthContext)
  const [loading , setLoading] = useState(false)

  return (
    <>
    {
      contextObj.currUser == null ? <div>Need to login</div> :
      <div>Logged in user is {contextObj.currUser.uid}</div>
      // loading == true ? <div>Fetching data...</div> :
      // <>
      //   <div className="header"></div>
      // <div className="main">
      //   <div className="pimg_container">
      //     <img
      //       src="http://placehold.jp/150x150.png"
      //       alt="pic"
      //       className="pimg"
      //     />
      //   </div>
      //   <div className="details">
      //     <div className="content">Mohit kumar </div>
      //     <div className="content">
      //       No of posts: <span className="bold_text">posts</span>
      //     </div>
      //     <div className="content">
      //       Email <span className="bold_text">gmail.com</span>
      //     </div>
      //   </div>
      // </div>
      // </>
    }
      
    </>
  );
}

export default Profile;
