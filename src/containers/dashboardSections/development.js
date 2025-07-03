import React, {useContext} from "react";
import "./dashboard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Development() {
  const {isDark} = useContext(StyleContext);
  let theme = isDark? "radical":"buefy";
  let cftheme = isDark? "dark":"default";
  let lctheme = isDark? "dark":"light";
  return (
      <Fade bottom duration={1000} distance="20px">
        {/*
        <div className="main contact-margin-top" id="contact">
          <h1 className={isDark ? "dark-mode contact-title" : "contact-title"}>PROGRAMING</h1>
          <div className="contact-div-main">
            <div className="github-grid-container">
              <div className="cpDSA-grid-item">
                <img
                    src={"https://leetcard.jacoblin.cool/rahulkandwal19?theme="+lctheme+"&font=Alice&ext=contest"}></img>
              </div>
              <div className="cpDSA-grid-item">
                <img src={"https://codeforces-readme-stats.vercel.app/api/card?username=rahulkandwal19&theme="+cftheme+"&disable_animations=false&show_icons=true&force_username=true"}></img>
              </div>
            </div>
          </div>
        </div>
        */}

        <div className="main contact-margin-top" id="contact">
          <h1 className={isDark ? "dark-mode contact-title" : "contact-title"}>DEVELOPMENT</h1>
          <div className="contact-div-main">
            <div className="github-grid-container">
              <div className="github-grid-item">
                <img
                    src={"http://github-profile-summary-cards.vercel.app/api/cards/stats?username=rahulkandwal19&theme=" + theme}></img>
              </div>
              <div className="github-grid-item">
                <img
                    src={"http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=rahulkandwal19&theme=" + theme}></img>
              </div>
              <div className="github-grid-item merged-row">
                <img
                    src={"http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=rahulkandwal19&theme=" + theme}></img>
              </div>
            </div>
          </div>
        </div>
      </Fade>
  );
}
