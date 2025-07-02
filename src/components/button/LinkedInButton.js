import React from "react";
import "./Button.scss";

export default function LinkedInButton({text, className, href, newTab}) {
    return (
        <div className={className}>
            <a className="main-button linkedInButton" href={href} target={newTab && "_blank"}>
                <i className="fa-brands fa-linkedin" style={{color: "#ffffff;"}}></i> {" "+text}
            </a>
        </div>
    );
}