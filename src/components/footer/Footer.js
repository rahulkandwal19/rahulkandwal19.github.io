import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={isDark ? "footer-div dark-mode" : "footer-div"}>
        <p className="footer-text">
          rahulkandwal19/portfolio
        </p>
        <p className="footer-text">
          <a href="mailto:rahulkandwal19@outlook.com" className="footer-text">
            eMail : rahulkandwal19@outlook.com
          </a>
        </p>
      </div>
    </Fade>
  );
}
