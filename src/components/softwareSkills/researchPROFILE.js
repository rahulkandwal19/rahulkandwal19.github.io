import React from "react";
import "./SoftwareSkill.scss";
import {researchSection, skillsSection} from "../../portfolio";

export default function ResearchProfile() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {researchSection.profile.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
