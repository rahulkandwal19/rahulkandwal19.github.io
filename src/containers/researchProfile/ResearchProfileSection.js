import React, {useContext} from "react";
import "./researchProfile.scss";
import {illustration, researchSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/researchPerson.json";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottieNoLoop from "../../components/displayLottie/displayLottieNoLoop";
import ResearchProfile from "../../components/softwareSkills/researchPROFILE";

export default function ResearchProfileSection() {
    const {isDark} = useContext(StyleContext);
    if (!researchSection.display) {
        return null;
    }
    return (
        <div className={isDark ? "dark-mode main" : "main"} id="skills">
            <div className="skills-main-div">
                <Fade left duration={1000}>
                    <div className="skills-image-div">
                        {illustration.animated ? (
                            <DisplayLottieNoLoop animationData={codingPerson} />
                        ) : (
                            <img
                                alt="Man Working"
                                src={require("../../assets/images/developerActivity.svg")}
                            ></img>
                        )}
                    </div>
                </Fade>
                <Fade right duration={1000}>
                    <div className="skills-text-div">
                        <h1
                            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
                        >
                            {researchSection.title}{" "}
                        </h1>
                        <p
                            className={
                                isDark
                                    ? "dark-mode subTitle skills-text-subtitle"
                                    : "subTitle skills-text-subtitle"
                            }
                        >
                            {researchSection.subTitle}
                        </p>
                        <ResearchProfile />
                        <div>
                            {researchSection.skills.map((skills, i) => {
                                return (
                                    <p
                                        key={i}
                                        className={
                                            isDark
                                                ? "dark-mode subTitle skills-text"
                                                : "subTitle skills-text"
                                        }
                                    >
                                        {skills}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
