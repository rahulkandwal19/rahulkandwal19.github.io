import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LinkedInButton from "../../components/button/LinkedInButton";
import MailButton from "../../components/button/mailButton";
import Button from "../../components/button/Button";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}
                  style={{ whiteSpace: "pre-wrap" }}>
                {greeting.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">

                {greeting.resumeLink && (
                    <a
                        href={require("./RahulKandwal_Resume.pdf")}
                        download="RahulKandwal_Resume.pdf"
                        className="download-link-button"
                    >
                      <Button text="resume" />
                    </a>
                )}

                <MailButton text="Contact" href={"mailto:"+socialMediaLinks.gmail} />
                <LinkedInButton text="Connect on LinkedIn" href={socialMediaLinks.linkedin}/>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
