import React from "react";
import "./feed.css";

function Feed() {
  return (
    <>
      <div className="header">
        <img
          src="
        https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png
        "
          alt=""
          className="insta_img"
        />
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQFD6BpNagVGmg/profile-displayphoto-shrink_100_100/0/1640539979634?e=1661385600&v=beta&t=78toHWhPe-02ZXmLW5ws3Zws5zuCZdZq_gHPgFTH2_Q"
          alt=""
          className="profile_img"
        />
      </div>
      <div className="main_continer">
        <div className="upload_container">
          <i className="movie_icon fa-solid fa-clapperboard"></i>
          <div className="upload_text">UPLOAD VIDEO</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  );
}
export default Feed;
