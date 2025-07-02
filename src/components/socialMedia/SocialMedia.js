import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
          <a
              href={socialMediaLinks.twitter}
              className="icon-button twitter"
              target="_blank"
              rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
            <span></span>
          </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-kaggle"></i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.reserchGate ? (
          <a
              href={socialMediaLinks.reserchGate}
              className="icon-button kaggle"
              target="_blank"
              rel="noopener noreferrer"
          >
            <i className="fa-brands fa-researchgate"></i>
            <span></span>
          </a>
      ) : null}

      {socialMediaLinks.discord ? (
          <a
              href={socialMediaLinks.discord}
              className="icon-button kaggle"
              target="_blank"
              rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord"></i>
            <span></span>
          </a>
      ) : null}
    </div>
  );
}
