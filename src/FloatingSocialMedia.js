import React from "react";
import "./socialmedia.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
function FloatingSocialMedia() {
  return (
    <div>
      <div className="a-social-icons">
        <a href="https://www.linkedin.com/" >
          <LinkedInIcon/>
        </a>
        <a href="https://twitter.com/" >
        <Twitter/>
        </a>
        <a
          href="https://www.instagram.com"
       
        >
          <InstagramIcon/>
        </a>
        <a href="https://github.com" >
         <GitHubIcon/>
        </a>
      </div>
    </div>
  );
}

export default FloatingSocialMedia;