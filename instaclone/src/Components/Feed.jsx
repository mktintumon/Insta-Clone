import React from 'react'
import './feed.css'

function Feed() {
  return (
   <>
   <div className="header">
    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" 
    alt="" className='insta_img'/>
    <img src="https://media-exp1.licdn.com/dms/image/C5603AQFD6BpNagVGmg/profile-displayphoto-shrink_400_400/0/1640539979634?e=1661385600&v=beta&t=98gJn3myiBLDob7PO7G_4kQFPceWWyoQyYhbemgSX8A" 
    alt="" className='profile_img'/>
   </div>
   <div className="main_container">
     <div className="upload_container">Upload</div>
     <div className="reels_container">Reels</div>
   </div>
   </>
  )
}

export default Feed