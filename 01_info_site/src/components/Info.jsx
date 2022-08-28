import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profile_cat from "../assets/profile.jpeg";

export default function Info() {
  return (
    <div className="info_container">
      <img
        src={profile_cat}
        alt="profile picture"
        className="info_pic"
        width="100%"
      />
      <h1 className="info_name">YiTing Liu</h1>
      <h2 className="info_title">Software Development Engineer</h2>
      <h3 className="info_website">thereisno.website.oops</h3>
      <div className="button_container">
        <a
          href="mailto:andy930293@gmail.com"
          className="a_email"
          target="blank">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
        <a
          className="a_linkedin"
          href="https:www.linkedin.com/in/yiting-liu-6a665b209"
          target="blank">
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
