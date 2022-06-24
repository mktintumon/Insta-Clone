import React from "react";
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="header"></div>
      <div className="main">
        <div className="pimg_container">
          <img
            src="http://placehold.jp/150x150.png"
            alt="pic"
            className="pimg"
          />
        </div>
        <div className="details">
          <div className="content">Mohit kumar </div>
          <div className="content">
            No of posts: <span className="bold_text">posts</span>
          </div>
          <div className="content">
            Email <span className="bold_text">gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
