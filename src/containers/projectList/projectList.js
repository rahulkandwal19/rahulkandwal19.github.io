import React, {useContext} from "react";
import "../../components/projectCard/projectCard.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {projectList} from "../../portfolio";
import ProjectCard from "../../components/projectCard/projectCard";
export default function ProjectList() {
    const {isDark} = useContext(StyleContext);
    if (!projectList.display) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="achievements" style={{ marginTop:"0px"}}>
                <div className="achievement-main-div">
                    <div className="achievement-cards-div">
                        {projectList.projectCards.map((card, i) => {
                            return (
                                <a href = {card.url}>
                                    <ProjectCard
                                        key={i}
                                        isDark={isDark}
                                        cardInfo={{
                                            title: card.title,
                                            description: card.subtitle,
                                            image: card.image,
                                            imageAlt: card.imageAlt,
                                            technology: card.technology
                                        }}
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
