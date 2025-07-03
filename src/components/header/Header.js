import React, {useContext} from "react";
import Headroom from "react-headroom";
import { useHistory } from "react-router-dom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  blogSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  const history = useHistory();
  return (
      <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <span className="logo-name">{greeting.username}</span>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
            <li className={"button"} onClick={() => history.push("/")}>
              <a>Home</a>
            </li>

            <li className={"button"} onClick={() => history.push("/dashboard")}>
            <a>Dashboard</a>
            </li>

            <li className={"button"} onClick={() => history.push("/education")}>
            <a>Education</a>
            </li>

            <li className={"button"} onClick={() => history.push("/projects")}>
              <a>Projects</a>
            </li>

            {/*
            <li className={"button"} onClick={() => history.push("/research")}>
              <a>Research</a>
            </li>
            

            <li className={"button"} onClick={() => history.push("/blogs")}>
              <a>Blog</a>
            </li>
            */}
          <li>
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
