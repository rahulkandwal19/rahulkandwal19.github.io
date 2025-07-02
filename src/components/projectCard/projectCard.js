import React from "react";
import "./projectCard.scss";

export default function ProjectCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <div className={isDark ? "dark-mode project-card" : "project-card"}>
        <div className="project-detail-div">
          <h5 className={isDark ? "dark-mode card-title" : "card-title"} style={{ whiteSpace: "pre-wrap" }}>
            {cardInfo.title}
          </h5>
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {cardInfo.description}
          </p>

          <ul className="dev-icons" style={{fontSize: "2rem"}}>
            {cardInfo.technology.map((skills, i) => {
              return (
                  <li
                      key={i}
                      className="software-skill-inline"
                  >
                    <i className={skills.fontAwesomeClassname}></i>
                  </li>
              );
            })}
          </ul>

        </div>
      </div>
  );
}
